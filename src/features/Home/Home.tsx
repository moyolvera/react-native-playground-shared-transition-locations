import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import CommonStyles from '../../theme/CommonStyles';
import styles from './Home.styles';

function Home() {
  const { navigate } = useNavigation();

  function navigateToRoute(index: number) {
    switch (index) {
      case 0:
        navigate('One');
        break;
      case 1:
        navigate('Two');
        break;
      case 2:
        navigate('Three');
        break;
      case 3:
        navigate('Four');
        break;
      default:
        Alert.alert('Wow', 'Looks like that feature is not implemented yet. :D');
        break;
    }
  }

  return (
    <SafeAreaView style={CommonStyles.flexOne}>
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigate('Playground');
          }}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>React Native</Text>
            <Text style={styles.subtitle}>Transitions</Text>
            <Text style={styles.playground}>Playground</Text>
          </View>
        </TouchableWithoutFeedback>
        <ScrollView>
          <View style={styles.itemWrapper}>
            {[...Array(10).keys()].map((item) => (
              <TouchableOpacity
                key={item}
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
