import React from 'react';
import { View, Text } from 'react-native';
import styles from './ThreeComponents.styles';

type ThreeInfoProps = {
  title: 'Height' | 'Distance';
  number: number;
  type: 'm' | 'km';
};

function ThreeInfo({ title, number, type }: ThreeInfoProps) {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.numberWrapper}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.numberType}>{type}</Text>
      </View>
    </View>
  );
}

export default ThreeInfo;
