import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemWrapper: {
    width: 160,
    height: 160,
    borderColor: '#E1E5E6',
    borderWidth: 1,
    marginLeft: 20,
    position: 'relative',
  },
  itemImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  itemAdder: {
    position: 'absolute',
    top: 15,
    right: 3,
  },
});
