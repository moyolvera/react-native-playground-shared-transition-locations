import React, { RefObject, useRef } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ONE_DATA from '../../assets/OneData';
import { BackIcon } from '../../components';
import { DIMENSIONS, SPACING } from '../../constants';
import CommonStyles from '../../theme/CommonStyles';
import IconOne from './components/IconOne';

function OneDetail() {
  const item = ONE_DATA[0];
  const ref = useRef<FlatList>() as RefObject<FlatList<any>>;
  const selecctedItemIndex = ONE_DATA.findIndex((i) => i.id === item.id);

  return (
    <SafeAreaView style={CommonStyles.flexOne}>
      <BackIcon onPress={() => {}} />
      <View style={{ flexDirection: 'row', flexWrap: 'nowrap', marginVertical: 20 }}>
        {ONE_DATA.map((item) => (
          <TouchableOpacity key={item.id} style={{ padding: SPACING }} onPress={() => {}}>
            <IconOne uri={item.imageUri} />
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        ref={ref}
        data={ONE_DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        initialScrollIndex={selecctedItemIndex}
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: DIMENSIONS.WIDTH,
          offset: DIMENSIONS.WIDTH * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ScrollView
              style={{
                width: DIMENSIONS.WIDTH - SPACING * 2,
                margin: SPACING,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 16,
              }}>
              <View style={{ padding: SPACING }}>
                <Text style={{ fontSize: 16 }}>{Array(50).fill(`${item.title} inner text \n`)}</Text>
              </View>
            </ScrollView>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default OneDetail;
