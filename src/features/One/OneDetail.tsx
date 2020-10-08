import React, { RefObject, useEffect, useMemo, useRef } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Animated } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import ONE_DATA from '../../assets/OneData';
import { BackIcon } from '../../components';
import { DIMENSIONS, ICON_SIZE, SPACING } from '../../constants';
import CommonStyles from '../../theme/CommonStyles';
import IconOne from './components/IconOne';
import { StackParams } from '../../declarations/types.td';

type OneDetailRouteProp = RouteProp<StackParams, 'OneDetail'>;

function OneDetail() {
  const { goBack } = useNavigation();
  const { params } = useRoute<OneDetailRouteProp>();
  const item = useMemo(() => params.item, []);
  const ref = useRef<FlatList>() as RefObject<FlatList<any>>;

  const selectedItemIndex = useMemo(() => ONE_DATA.findIndex((i) => i.id === item.id), [item]);
  const mountedAnimated = useRef(new Animated.Value(0)).current;
  const activeIndex = useRef(new Animated.Value(selectedItemIndex)).current;
  const activeIndexAnimation = useRef(new Animated.Value(selectedItemIndex)).current;

  const animation = (toValue: number, delay: number) => {
    return Animated.timing(mountedAnimated, {
      toValue,
      duration: 300,
      delay,
      useNativeDriver: true,
    });
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true,
      }),
      animation(1, 500),
    ]).start();
  }, []);

  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const SIZE = ICON_SIZE + SPACING * 4 + 3;
  const translateX = activeIndexAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [SIZE, 0, -SIZE],
  });

  return (
    <SafeAreaView style={CommonStyles.flexOne}>
      <BackIcon
        onPress={() => {
          animation(0, 0).start(() => {
            goBack();
          });
        }}
      />
      <Animated.View
        style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginVertical: 20,
          marginLeft: DIMENSIONS.WIDTH / 2 - ICON_SIZE / 2 - SPACING,
          transform: [{ translateX }],
        }}>
        {ONE_DATA.map((item, index) => {
          const inputRange = [index - 1, index, index + 1];
          const opacity = activeIndexAnimation.interpolate({
            inputRange,
            outputRange: [0.2, 1, 0.2],
            extrapolate: 'clamp',
          });

          return (
            <TouchableOpacity
              key={item.id}
              style={{ padding: SPACING }}
              onPress={() => {
                activeIndex.setValue(index);
                if (ref.current) {
                  ref.current.scrollToIndex({ index, animated: true });
                }
              }}>
              <Animated.View style={{ alignItems: 'center', opacity }}>
                <SharedElement id={`item.${item.id}.icon`}>
                  <IconOne uri={item.imageUri} />
                </SharedElement>
                <Text style={{ fontSize: 10, marginTop: 2 }}>{item.title}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
      <Animated.FlatList
        style={{ opacity: mountedAnimated, transform: [{ translateY }] }}
        ref={ref}
        data={ONE_DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        initialScrollIndex={selectedItemIndex}
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: DIMENSIONS.WIDTH,
          offset: DIMENSIONS.WIDTH * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          const newIndex = Math.floor(ev.nativeEvent.contentOffset.x / DIMENSIONS.WIDTH);
          activeIndex.setValue(newIndex);
        }}
        renderItem={({ item }) => {
          return (
            <ScrollView
              style={{
                width: DIMENSIONS.WIDTH - SPACING * 2,
                margin: SPACING,
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: 16,
              }}>
              <View style={{ padding: SPACING }}>
                <Text style={{ fontSize: 16 }}>{Array(50).fill(`${item.title} inner text \n`)}</Text>
              </View>
            </ScrollView>
          );
        }}
      />
    </SafeAreaView>
  );
}

OneDetail.sharedElements = () => {
  return ONE_DATA.map((item) => `item.${item.id}.icon`);
};

export default OneDetail;
