import { StyleSheet } from 'react-native';
import { DIMENSIONS, THREE_IMAGE_HEIGHT, THREE_IMAGE_WIDTH } from '../../constants';

const styles = StyleSheet.create({
  image: {
    width: THREE_IMAGE_WIDTH,
    height: THREE_IMAGE_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  name: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 36,
    fontWeight: '900',
  },
  detailImage: {
    width: DIMENSIONS.WIDTH,
    height: DIMENSIONS.HEIGHT,
    resizeMode: 'cover',
  },
});

export default styles;
