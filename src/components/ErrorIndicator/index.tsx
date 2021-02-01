import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const ErrorIndicator = () => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>
        Client error, please look at stack trace for fix it!!!
      </Text>
    </View>
  );
};
