import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import IconOne from './components/IconOne';
import ONE_DATA from '../../assets/OneData';
import MarketingSlider from './components/MarketingSlider';
import { SPACING } from '../../constants';
import CommonStyles from '../../theme/CommonStyles';

function One() {
  return (
    <SafeAreaView style={CommonStyles.flexOne}>
      <MarketingSlider />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          // marginTop: DIMENSIONS.HEIGHT * 0.4,
        }}>
        {ONE_DATA.map((item) => {
          return (
            <TouchableOpacity key={item.id} style={{ padding: SPACING }} onPress={() => {}}>
              <IconOne uri={item.imageUri} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default One;
