import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({ icon: { padding: 12 } });

function BackIcon({
  onPress,
  color,
  buttonStyles,
}: {
  onPress: () => void;
  color?: string;
  buttonStyles?: StyleProp<ViewStyle>;
}) {
  return (
    <AntDesign
      name="arrowleft"
      size={24}
      style={[styles.icon, buttonStyles]}
      color={color || '#333'}
      onPress={onPress}
    />
  );
}

export default BackIcon;
