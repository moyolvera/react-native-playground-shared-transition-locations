import React, { Component, MutableRefObject, useMemo, useRef } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, StyleSheet, Text, ViewProps, ViewStyle } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { BackIcon } from '../../components';
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
    <View style={[styles.container]}>
      <Animatable.View
        ref={topRef}
        animation="fadeIn"
        duration={800}
        delay={600}
        style={[StyleSheet.absoluteFillObject, styles.topAnimatable]}>
        <BackIcon
          onPress={() => {
            Promise.all([bottomRef.current.fadeOut(200), topRef.current.fadeOut(200)]).finally(() => {
              goBack();
            });
          }}
          color="#fff"
          buttonStyles={styles.backButton}
        />
        <LinearGradient colors={['transparent', '#000', '#000']} style={styles.linearGradient} />
      </Animatable.View>
      <SharedElement id={`item.${item.key}.image`} style={styles.detailImage}>
        <Image source={{ uri: item.image }} style={styles.detailImage} />
      </SharedElement>
      <View style={styles.bottomWrapper}>
        <View style={styles.textWrapper}>
          <SharedElement id={`item.${item.key}.name`}>
            <Text style={styles.name} numberOfLines={1} adjustsFontSizeToFit>
              {item.name}
            </Text>
          </SharedElement>
        </View>
        <Animatable.View ref={bottomRef} animation="fadeIn" duration={800} delay={700} style={styles.bottomAnimatable}>
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
