import React, { useCallback, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Animated } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { DIMENSIONS, SPACING } from '../../constants';
import CommonStyles from '../../theme/CommonStyles';
import ActionButton from './components/ActionButton';
import styles from './Playground.styles';

function Playground() {
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  }, [scrollXIndex]);

  const setActiveIndex = useCallback((activeIndex: number) => {
    scrollXIndex.setValue(activeIndex);
  }, []);

  const translateX = scrollXAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [DIMENSIONS.WIDTH + SPACING, SPACING],
  });

  const titleOpacity = scrollXAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <SafeAreaView style={[CommonStyles.flexOne, styles.background]}>
      <View style={styles.barWrapper}>
        <Animated.View style={[styles.titleWrapper, { opacity: titleOpacity }]}>
          <Text style={styles.title}>Simple Wallet</Text>
        </Animated.View>
        <Animated.View style={[styles.searchWrapper, { opacity: titleOpacity }]}>
          <Feather
            name="search"
            size={24}
            onPress={() => {
              setActiveIndex(1);
            }}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.inputWrapper,
            {
              transform: [
                {
                  translateX,
                },
              ],
            },
          ]}>
          <Feather
            name="x"
            size={24}
            style={styles.closeIcon}
            onPress={() => {
              setActiveIndex(0);
            }}
          />
          <TextInput placeholder="Search" placeholderTextColor="#555" />
        </Animated.View>
      </View>
      <ActionButton actionStyles={{ bottom: 100, right: 60 }} />
    </SafeAreaView>
  );
}

export default Playground;
