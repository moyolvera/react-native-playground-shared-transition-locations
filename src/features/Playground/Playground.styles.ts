import { StyleSheet } from 'react-native';
import { DIMENSIONS, SPACING } from '../../constants';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
  },
  barWrapper: {
    width: DIMENSIONS.WIDTH,
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 2,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 3.2,
    overflow: 'visible',
    justifyContent: 'center',
  },
  titleWrapper: {
    width: DIMENSIONS.WIDTH,
    position: 'absolute',
    paddingLeft: SPACING,
  },
  title: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: '200',
  },
  searchWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    right: SPACING * 2,
  },
  inputWrapper: {
    width: DIMENSIONS.WIDTH,
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(200,200,200,0.1)',
    padding: SPACING,
    justifyContent: 'center',
  },
  closeIcon: {
    zIndex: 2,
    position: 'absolute',
    right: SPACING * 2,
  },
});

export default styles;
