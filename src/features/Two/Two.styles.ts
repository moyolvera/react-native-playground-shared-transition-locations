import { StyleSheet } from 'react-native';
import { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING } from '../../constants';

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: SPACING,
  },
  location: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '800',
    width: ITEM_WIDTH * 0.8,
    textTransform: 'uppercase',
    top: SPACING,
    left: SPACING * 2,
  },
  days: {
    position: 'absolute',
    bottom: SPACING,
    left: SPACING,
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysValue: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 18,
  },
  daysLabel: {
    color: '#fff',
    fontSize: 10,
  },
  imageWrapper: { overflow: 'hidden', borderRadius: RADIUS },
  backButton: { position: 'absolute', top: 50, left: 10, zIndex: 2 },
  activities: {
    fontSize: 18,
    width: '100%',
    textTransform: 'uppercase',
    fontWeight: '800',
    marginBottom: 20,
  },
});

export default styles;
