import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import CommonStyles from '../../theme/CommonStyles';
import styles from './Home.styles';

function Home() {
  const { navigate } = useNavigation();

  function navigateToRoute(index: number) {
    switch (index) {
      case 0:
        navigate('One');
        break;
      default:
        Alert.alert('Wow', 'Looks like that feature is not implemented yet. :D');
        break;
    }
  }

  return (
    <SafeAreaView style={CommonStyles.flexOne}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>React Native</Text>
          <Text style={styles.subtitle}>Transitions</Text>
        </View>
        <ScrollView>
          <View style={styles.itemWrapper}>
            {[...Array(10).keys()].map((item) => (
              <TouchableOpacity
                onPress={() => {
                  navigateToRoute(item);
                }}
                style={styles.itemView}>
                <Text style={styles.itemText}>{item + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
