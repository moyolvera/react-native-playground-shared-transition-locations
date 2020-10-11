import React, { useMemo } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, Image, Text, FlatList } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import { StackParams } from '../../declarations/types.td';
import CommonStyles from '../../theme/CommonStyles';
import { BackIcon } from '../../components';
import styles from './Two.styles';
import { DIMENSIONS, SPACING } from '../../constants';

const zoomInAnimation = {
  0: {
    opacity: 0,
    scale: 0,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

type TwoDetailRouteProp = RouteProp<StackParams, 'TwoDetail'>;

function TwoDetail() {
  const { goBack } = useNavigation();
  const { params } = useRoute<TwoDetailRouteProp>();
  const item = useMemo(() => params.item, []);

  return (
    <SafeAreaView style={CommonStyles.flexOne}>
      <BackIcon
        color="#fff"
        buttonStyles={styles.backButton}
        onPress={() => {
          goBack();
        }}
      />
      <SharedElement id={`item.${item.key}.photo`} style={[StyleSheet.absoluteFillObject]}>
        <View style={[StyleSheet.absoluteFillObject]}>
          <Image source={{ uri: item.image }} style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover' }]} />
        </View>
      </SharedElement>
      <SharedElement id={`item.${item.key}.location`}>
        <Text style={[styles.location, { top: 60 }]}>{item.location}</Text>
      </SharedElement>
      <View style={{ position: 'absolute', bottom: 120 }}>
        <Text style={[styles.location, styles.activities]}>Activities</Text>
        <FlatList
          data={[...Array(8).keys()]}
          keyExtractor={(item) => String(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: SPACING }}
          renderItem={({ item, index }) => {
            return (
              <Animatable.View
                animation={zoomInAnimation}
                duration={700}
                delay={400 + index * 100}
                style={{
                  backgroundColor: 'white',
                  padding: SPACING,
                  width: DIMENSIONS.WIDTH * 0.33,
                  height: DIMENSIONS.WIDTH * 0.5,
                  marginRight: SPACING,
                }}>
                <Image
                  source={{ uri: 'https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png' }}
                  style={{ width: '100%', height: '70%', resizeMode: 'cover' }}
                />
                <Text>Activity #{item + 1}</Text>
              </Animatable.View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

TwoDetail.sharedElements = (route: RouteProp<StackParams, 'TwoDetail'>) => {
  const { item } = route.params;

  return [
    {
      id: `item.${item.key}.photo`,
    },
    {
      id: `item.${item.key}.location`,
    },
  ];
};

export default TwoDetail;
