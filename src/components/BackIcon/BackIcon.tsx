import React from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({ icon: { padding: 12 }});

function BackIcon({ onPress }: { onPress: () => void }) {
  return <AntDesign name="arrowleft" size={24} style={styles.icon} color="#333" onPress={onPress} />
}

export default BackIcon;
