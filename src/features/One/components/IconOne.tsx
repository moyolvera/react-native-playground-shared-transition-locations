import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles/IconOne.styles';

function IconOne({ uri }: { uri: string }) {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri}} style={styles.image} />
    </View>
  )
};

export default IconOne;
