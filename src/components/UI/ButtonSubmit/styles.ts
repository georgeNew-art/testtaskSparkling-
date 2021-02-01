import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonWrapper: {
    alignSelf: 'center',
    marginTop: 70,
    width: 155,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  acitveButtonWrapper: {
    backgroundColor: '#2B3E50',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 15,
  },

  inacitveButtonWrapper: {
    backgroundColor: '#DDDDDD',
  },
});
