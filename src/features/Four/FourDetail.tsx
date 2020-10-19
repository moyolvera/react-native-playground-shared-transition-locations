import React, { useMemo } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { BackIcon } from '../../components';
import { StackParams } from '../../declarations/types.td';
import CommonStyles from '../../theme/CommonStyles';
import UserCard from './components/UserCard';
import { DIMENSIONS } from '../../constants';
import MasonryList from './components/MasonryList';

type FourDetailRouteProp = RouteProp<StackParams, 'FourDetail'>;

function FourDetail() {
  const { goBack } = useNavigation();
  const { params } = useRoute<FourDetailRouteProp>();
  const item = useMemo(() => params.item, []);

  return (
    <View style={[CommonStyles.flexOne]}>
      <BackIcon onPress={goBack} color="#fff" buttonStyles={{ position: 'absolute', top: 50, left: 15, zIndex: 99 }} />
      <SharedElement id={`item.${item.key}.image`}>
        <Image
          source={{ uri: item.image }}
          style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover', height: DIMENSIONS.HEIGHT / 2 }]}
        />
      </SharedElement>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: DIMENSIONS.HEIGHT / 2 - 100 }}>
        <SharedElement id={`item.${item.key}.userCard`}>
          <UserCard item={item.user} />
        </SharedElement>
        <MasonryList />
      </ScrollView>
    </View>
  );
}

FourDetail.sharedElements = (route: RouteProp<StackParams, 'FourDetail'>) => {
  const { item } = route.params;

  return [
    {
      id: `item.${item.key}.image`,
    },
    {
      id: `item.${item.key}.userCard`,
    },
  ];
};

export default FourDetail;
