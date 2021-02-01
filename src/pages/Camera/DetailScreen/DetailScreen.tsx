import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './styles';

const DetailScreen = ({route}: any) => {
  const {item} = route.params;
  return (
    <View style={styles.wrapperContainer}>
      <Image style={styles.imageView} source={{uri: item.uri}} />
    </View>
  );
};

export default DetailScreen;
