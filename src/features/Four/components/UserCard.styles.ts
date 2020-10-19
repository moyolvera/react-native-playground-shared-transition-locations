import { StyleSheet } from 'react-native';
import { DIMENSIONS, SPACING } from '../../../constants';

const AVATAR_SIZE = 64;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: SPACING * 2,
    width: DIMENSIONS.WIDTH * 0.9,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: SPACING * 2,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: SPACING / 3,
  },
  job: {
    fontSize: 16,
    color: '#999',
  },
  detailsList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  detailsItem: {
    alignItems: 'center',
  },
  detailLabel: {
    color: '#999',
    fontSize: 11,
  },
  detailValue: {
    fontWeight: '800',
    fontSize: 24,
    marginBottom: SPACING / 3,
  },
});

export default styles;
