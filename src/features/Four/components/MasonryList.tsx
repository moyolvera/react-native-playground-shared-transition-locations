import React, { MutableRefObject, useEffect, useRef } from 'react';
import Masonry from 'react-native-masonry-layout';
import { View, Image } from 'react-native';
import { FOUR_IMAGES } from '../../../assets/FourData';
import { DIMENSIONS, SPACING } from '../../../constants';

type MasonryItem = {
  height: number;
  image: string;
  key: string;
};

function MasonryList() {
  const ref = useRef() as MutableRefObject<Masonry>;

  useEffect(() => {
    if (ref?.current) {
      const items: MasonryItem[] = [...FOUR_IMAGES, ...FOUR_IMAGES].map((image, index) => {
        return {
          height: DIMENSIONS.WIDTH * Math.max(0, Math.random()) + DIMENSIONS.WIDTH / 4,
          image,
          key: String(index),
        };
      });

      ref.current.addItems(items);
    }
  }, []);

  return (
    <Masonry
      ref={ref}
      columns={2}
      style={{ flex: 1, width: DIMENSIONS.WIDTH }}
      contentContainerStyle={{ padding: SPACING, paddingBottom: 40 }}
      renderItem={(item: MasonryItem) => (
        <View
          style={{
            margin: SPACING / 2,
            backgroundColor: '#fff',
            borderRadius: 0,
            overflow: 'hidden',
          }}>
          <Image source={{ uri: item.image }} style={{ height: item.height }} />
        </View>
      )}
    />
  );
}

export default MasonryList;
