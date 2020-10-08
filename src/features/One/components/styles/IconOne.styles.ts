import { StyleSheet } from 'react-native';
import { ICON_SIZE, SPACING } from '../../../../constants';

const styles = StyleSheet.create({
  imageContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SPACING,
  },
  image: {
    width: ICON_SIZE * 0.6,
    height: ICON_SIZE * 0.6,
    resizeMode: 'contain',
  },
});

export default styles;
