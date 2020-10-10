import { StyleSheet } from 'react-native';
import { SPACING } from '../../constants';

const styles = StyleSheet.create({
  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: { padding: SPACING },
});

export default styles;
