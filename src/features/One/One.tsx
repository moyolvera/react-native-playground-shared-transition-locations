import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import IconOne from './components/IconOne';
import ONE_DATA from '../../assets/OneData';
import MarketingSlider from './components/MarketingSlider';
import CommonStyles from '../../theme/CommonStyles';
import styles from './One.styles';

function One() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={CommonStyles.flexOne}>
      <MarketingSlider />
      <View style={styles.listWrapper}>
        {ONE_DATA.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => {
                navigate('OneDetail', { item });
              }}>
              <SharedElement id={`item.${item.id}.icon`}>
                <IconOne uri={item.imageUri} />
              </SharedElement>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default One;
