import React, { Component, MutableRefObject, useMemo, useRef } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, StyleSheet, Text, ViewProps, ViewStyle } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { BackIcon } from '../../components';
import { DIMENSIONS, SPACING } from '../../constants';
import { StackParams } from '../../declarations/types.td';
import styles from './Three.styles';
import Avatars from './components/Avatars';
import ThreeInfo from './components/ThreeInfo';

type ThreeDetailRouteProp = RouteProp<StackParams, 'ThreeDetail'>;

function ThreeDetail() {
  const { goBack } = useNavigation();
  const { params } = useRoute<ThreeDetailRouteProp>();
  const item = useMemo(() => params.item, []);

  const topRef = useRef() as MutableRefObject<
    Component<Animatable.AnimatableProperties<ViewStyle> & ViewProps, any, any>
  >;
  const bottomRef = useRef() as MutableRefObject<
    Component<Animatable.AnimatableProperties<ViewStyle> & ViewProps, any, any>
  >;

  return (
    <View style={[{ flex: 1, backgroundColor: '#000' }]}>
      <Animatable.View
        ref={topRef}
        animation="fadeIn"
        duration={800}
        delay={600}
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 2,
          },
        ]}>
        <BackIcon
          onPress={() => {
            Promise.all([bottomRef.current.fadeOut(200), topRef.current.fadeOut(200)]).finally(() => {
              goBack();
            });
          }}
          color="#fff"
          buttonStyles={{ top: SPACING * 4, left: SPACING }}
        />
        <LinearGradient
          colors={['transparent', '#000', '#000']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: DIMENSIONS.HEIGHT / 2,
          }}
        />
      </Animatable.View>
      <SharedElement id={`item.${item.key}.image`} style={styles.detailImage}>
        <Image source={{ uri: item.image }} style={styles.detailImage} />
      </SharedElement>
      <View style={{ flex: 1, position: 'absolute', bottom: 70, justifyContent: 'flex-end', zIndex: 3 }}>
        <View style={{ paddingHorizontal: 20, alignItems: 'flex-start' }}>
          <SharedElement id={`item.${item.key}.name`}>
            <Text style={styles.name} numberOfLines={1} adjustsFontSizeToFit>
              {item.name}
            </Text>
          </SharedElement>
        </View>
        <Animatable.View
          ref={bottomRef}
          animation="fadeIn"
          duration={800}
          delay={700}
          style={{
            width: DIMENSIONS.WIDTH,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Avatars />
          <ThreeInfo title="Distance" type="km" number={Math.floor(Math.random() * 40) + 20} />
          <ThreeInfo title="Height" type="m" number={Math.floor(Math.random() * 2200) + 1000} />
        </Animatable.View>
      </View>
    </View>
  );
}

ThreeDetail.sharedElements = (route: RouteProp<StackParams, 'ThreeDetail'>) => {
  const { item } = route.params;

  return [
    {
      id: `item.${item.key}.image`,
    },
    {
      id: `item.${item.key}.name`,
    },
  ];
};

export default ThreeDetail;
