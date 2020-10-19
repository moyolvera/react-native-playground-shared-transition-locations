import React, { useRef } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Animated, FlatList, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import { BackIcon } from '../../components';
import CommonStyles from '../../theme/CommonStyles';
import UserCard from './components/UserCard';
import FOUR_DATA from '../../assets/FourData';
import MasonryList from './components/MasonryList';
import PhotoDetails from './components/PhotoDetails';
import { DIMENSIONS, SPACING } from '../../constants';

function Four() {
  const { goBack, navigate } = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={[CommonStyles.flexOne, CommonStyles.blackBackground]}>
      <BackIcon onPress={goBack} color="#fff" buttonStyles={{ position: 'absolute', top: 50, left: 15, zIndex: 99 }} />
      <Animated.FlatList
        data={FOUR_DATA}
        keyExtractor={(item) => item.key}
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, width: DIMENSIONS.WIDTH, height: DIMENSIONS.HEIGHT }}>
              <SharedElement id={`item.${item.key}.image`}>
                <Image
                  source={{ uri: item.image }}
                  style={[
                    StyleSheet.absoluteFillObject,
                    { width: DIMENSIONS.WIDTH, height: DIMENSIONS.HEIGHT, resizeMode: 'cover' },
                  ]}
                />
              </SharedElement>
              <View style={{ position: 'absolute', bottom: 120, alignSelf: 'center' }}>
                <TouchableScale
                  activeScale={0.8}
                  tension={20}
                  friction={7}
                  useNativeDriver
                  onPress={() => {
                    navigate('FourDetail', { item });
                  }}>
                  <SharedElement id={`item.${item.key}.userCard`}>
                    <UserCard item={item.user} />
                  </SharedElement>
                </TouchableScale>
              </View>
            </View>
          );
        }}
      />
      <PhotoDetails
        data={FOUR_DATA}
        scrollX={scrollX}
        wrapperStyles={{ position: 'absolute', top: SPACING * 9, width: DIMENSIONS.WIDTH * 0.88, alignSelf: 'center' }}
      />
    </View>
  );
}

export default Four;
