import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ONE_DATA_LABELS } from '../../../assets/OneData';
import { DIMENSIONS, SPACING, ITEM_WIDTH } from '../../../constants';
import styles from './styles/MarketingSlider.styles';

function MarketingSlider() {
  return (
    <FlatList
      data={ONE_DATA_LABELS}
      keyExtractor={(item) => item.color}
      horizontal
      snapToInterval={ITEM_WIDTH + SPACING * 2}
      contentContainerStyle={{
        padding: SPACING,
      }}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        );
      }}
    />
  );
}

export default MarketingSlider;
