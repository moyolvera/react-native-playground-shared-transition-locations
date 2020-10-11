import React from 'react';
import { View, Text, Image } from 'react-native';
import { THREE_AVATARS } from '../../../assets/ThreeData';
import styles from './ThreeComponents.styles';

function Avatars() {
  return (
    <View>
      <Text style={styles.heading}>Your team</Text>
      <View style={styles.avatarWrapper}>
        {THREE_AVATARS.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            style={[styles.avatar, { zIndex: THREE_AVATARS.length - index, marginLeft: index === 0 ? 0 : -20 }]}
          />
        ))}
      </View>
    </View>
  );
}

export default Avatars;
