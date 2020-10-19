import React from 'react';
import { View, Text, Animated, StyleProp, ViewStyle } from 'react-native';
import { DIMENSIONS } from '../../../constants';
import { FourDataList } from '../../../declarations/types.td';
import styles from './PhotoDetails.styles';

function PhotographyDetails({
  data,
  scrollX,
  wrapperStyles,
}: {
  data: FourDataList;
  scrollX: Animated.Value;
  wrapperStyles: StyleProp<ViewStyle>;
}) {
  return (
    <View style={wrapperStyles}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 0.5) * DIMENSIONS.WIDTH,
          index * DIMENSIONS.WIDTH,
          (index + 0.5) * DIMENSIONS.WIDTH,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });

        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [20, 0, 20],
        });

        return (
          <Animated.View
            key={`detail.${item.key}`}
            style={{
              position: 'absolute',
              opacity,
              transform: [{ translateY }],
            }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </Animated.View>
        );
      })}
    </View>
  );
}

export default PhotographyDetails;
