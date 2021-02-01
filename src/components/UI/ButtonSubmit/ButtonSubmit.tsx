import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

interface Props {
  text: string;
  submitFunction: () => void;
  isDisabled?: boolean;
}

const ButtonSubmit = ({text, submitFunction, isDisabled}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonWrapper,
        isDisabled ? styles.acitveButtonWrapper : styles.inacitveButtonWrapper,
      ]}
      onPress={submitFunction}
      disabled={isDisabled ? false : true}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSubmit;
