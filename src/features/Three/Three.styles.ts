import { StyleSheet } from 'react-native';
import { DIMENSIONS, SPACING, THREE_IMAGE_HEIGHT, THREE_IMAGE_WIDTH } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topAnimatable: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 2,
  },
  backButton: {
    top: SPACING * 4,
    left: SPACING,
  },
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
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: DIMENSIONS.HEIGHT / 2,
  },
  bottomWrapper: {
    flex: 1,
    position: 'absolute',
    bottom: 70,
    justifyContent: 'flex-end',
    zIndex: 3,
  },
  textWrapper: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  textViewWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  bottomAnimatable: {
    width: DIMENSIONS.WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerFlatlist: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
