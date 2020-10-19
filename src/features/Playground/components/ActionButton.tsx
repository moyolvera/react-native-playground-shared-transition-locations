import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback, StyleProp, ViewStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const BUTTON_IZE = 60;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    width: BUTTON_IZE,
    height: BUTTON_IZE,
    borderRadius: BUTTON_IZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: { height: 10, width: 0 },
  },
  menu: {
    backgroundColor: '#f02a4b',
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#fff',
  },
});

function ActionButton({ actionStyles }: { actionStyles: StyleProp<ViewStyle> }) {
  const animation = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    const toValue = isOpen ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  }

  const pinStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }),
      },
    ],
  };

  const thumbStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80],
        }),
      },
    ],
  };

  const heartStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -200],
        }),
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  const opacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={[styles.container, actionStyles]}>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, heartStyle, { opacity }]}>
          <AntDesign name="hearto" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, thumbStyle, { opacity }]}>
          <Entypo name="thumbs-up" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, pinStyle, { opacity }]}>
          <Entypo name="location-pin" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <AntDesign name="plus" size={24} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default ActionButton;
