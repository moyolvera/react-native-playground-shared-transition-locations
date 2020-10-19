import { StyleSheet } from 'react-native';
import { DIMENSIONS } from '../../constants';

const styles = StyleSheet.create({
  itemView: {
    marginHorizontal: 15,
    marginBottom: 30,
    width: DIMENSIONS.WIDTH / 2 - 40,
    borderColor: '#bbb',
    backgroundColor: '#eee',
    borderRadius: 4,
    borderWidth: 1,
    height: (DIMENSIONS.WIDTH / 2 - 40) * 1.35,
  },
  itemText: {
    fontSize: 120,
    fontWeight: '900',
    position: 'absolute',
    bottom: -10,
    right: 10,
    color: '#999',
  },
  itemWrapper: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 150 },
  subtitle: { fontWeight: '800', textTransform: 'uppercase', fontSize: 40 },
  title: { fontWeight: '900', textTransform: 'uppercase', fontSize: 25, letterSpacing: -1, top: 10 },
  playground: { fontWeight: '900', textTransform: 'uppercase', fontSize: 25, letterSpacing: -1, top: -10 },
  titleWrapper: { marginHorizontal: 10, marginTop: 30, marginBottom: 10 },
  wrapper: { marginHorizontal: 10 },
});

export default styles;
