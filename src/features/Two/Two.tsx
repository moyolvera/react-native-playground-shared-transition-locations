import React, { useRef } from 'react';
import { SafeAreaView, Animated, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import CommonStyles from '../../theme/CommonStyles';
import TWO_DATA_LIST from '../../assets/TwoData';
import styles from './Two.styles';
import { FULL_SIZE, ITEM_WIDTH } from '../../constants';
import { BackIcon } from '../../components';

function Two() {
  const { navigate, goBack } = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={CommonStyles.flexOne}>
      <BackIcon onPress={goBack} />
      <Animated.FlatList
        data={TWO_DATA_LIST}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate="fast"
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * FULL_SIZE, index * FULL_SIZE, (index + 1) * FULL_SIZE];
          const translateX = scrollX.interpolate({ inputRange, outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH] });
          const scale = scrollX.interpolate({ inputRange, outputRange: [1, 1.2, 1] });
          return (
            <TouchableOpacity
              onPress={() => {
                navigate('TwoDetail', { item });
              }}
              style={styles.itemContainer}>
              <SharedElement id={`item.${item.key}.photo`} style={[StyleSheet.absoluteFillObject]}>
                <View style={[StyleSheet.absoluteFillObject, styles.imageWrapper]}>
                  <Animated.Image
                    source={{ uri: item.image }}
                    style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover', transform: [{ scale }] }]}
                  />
                </View>
              </SharedElement>
              <SharedElement id={`item.${item.key}.location`}>
                <Animated.Text style={[styles.location, { transform: [{ translateX }] }]}>
                  {item.location}
                </Animated.Text>
              </SharedElement>
              <View style={styles.days}>
                <Text style={styles.daysValue}>{item.numberOfDays}</Text>
                <Text style={styles.daysLabel}>days</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default Two;
