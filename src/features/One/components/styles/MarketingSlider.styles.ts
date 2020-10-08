import { StyleSheet } from 'react-native';
import { DIMENSIONS, SPACING } from '../../../../constants';

const styles = StyleSheet.create({
  itemContainer: {
    width: DIMENSIONS.WIDTH * 0.74,
    height: DIMENSIONS.WIDTH * 0.44,
    marginRight: SPACING,
    padding: SPACING * 2,
    borderRadius: 16,
  },
  itemText: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
    letterSpacing: -1,
    fontWeight: '800',
  },
});

export default styles;
