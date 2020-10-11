import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Animated } from 'react-native';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import THREE_DATA from '../../assets/ThreeData';
import { BackIcon } from '../../components';
import { THREE_IMAGE_HEIGHT, THREE_IMAGE_WIDTH, THREE_VISIBLE_ITEMS } from '../../constants';
import CommonStyles from '../../theme/CommonStyles';
import styles from './Three.styles';

function Three() {
  const { navigate, goBack } = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const reactiveAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, { toValue: reactiveAnimated, duration: 300, useNativeDriver: true }).start();
  }, []);

  const setActiveSlide = useCallback((newIndex) => {
    setActiveIndex(newIndex);
    reactiveAnimated.setValue(newIndex);
  }, []);

  return (
    <SafeAreaView style={[CommonStyles.flexOne, { backgroundColor: '#000' }]}>
      <BackIcon onPress={goBack} color="#fff" />
      <FlingGestureHandler
        key="UP"
        direction={Directions.UP}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (activeIndex === THREE_DATA.length - 1) {
              return;
            }
            setActiveSlide(activeIndex + 1);
          }
        }}>
        <FlingGestureHandler
          key="DOWN"
          direction={Directions.DOWN}
          onHandlerStateChange={(ev) => {
            if (ev.nativeEvent.state === State.END) {
              if (activeIndex === 0) {
                return;
              }
              setActiveSlide(activeIndex - 1);
            }
          }}>
          <FlatList
            data={THREE_DATA}
            keyExtractor={(item) => item.key}
            scrollEnabled={false}
            contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            CellRendererComponent={({ index, item, children, style, ...props }) => {
              const newStyle = [
                styles,
                { zIndex: THREE_DATA.length - index, left: -THREE_IMAGE_WIDTH / 2, top: -THREE_IMAGE_HEIGHT / 2 },
              ];
              return (
                <View index={index} {...props} style={newStyle}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateY = animatedValue.interpolate({ inputRange, outputRange: [-30, 0, 30] });
              const opacity = animatedValue.interpolate({
                inputRange,
                outputRange: [1 - 1 / THREE_VISIBLE_ITEMS, 1, 0],
              });
              const scale = animatedValue.interpolate({
                inputRange,
                outputRange: [0.92, 1, 1.2],
              });
              return (
                <Animated.View style={{ position: 'absolute', opacity, transform: [{ translateY }, { scale }] }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigate('ThreeDetail', { item: THREE_DATA[activeIndex] });
                    }}>
                    <SharedElement id={`item.${item.key}.image`} style={styles.image}>
                      <Image source={{ uri: item.image }} style={styles.image} />
                    </SharedElement>
                    <View style={{ position: 'absolute', bottom: 20, left: 20 }}>
                      <SharedElement id={`item.${item.key}.name`}>
                        <Text style={styles.name} numberOfLines={1} adjustsFontSizeToFit>
                          {item.name}
                        </Text>
                      </SharedElement>
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              );
            }}
          />
        </FlingGestureHandler>
      </FlingGestureHandler>
    </SafeAreaView>
  );
}

export default Three;
