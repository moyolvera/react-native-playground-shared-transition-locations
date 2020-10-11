import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    color: '#fff',
    fontWeight: '300',
    marginBottom: 8,
  },
  number: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 32,
    marginRight: 2,
    marginBottom: -5,
  },
  numberType: {
    color: '#fff',
    fontSize: 12,
  },
  numberWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  avatarWrapper: {
    flexDirection: 'row',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 26,
    borderWidth: 4,
    borderColor: '#000',
  },
});

export default styles;
