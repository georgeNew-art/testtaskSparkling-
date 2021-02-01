import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface Props {}

const PlusIconSvg = (props: Props) => {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none">
      <Path
        d="M19.5 10.5h-3v6h-6v3h6v6h3v-6h6v-3h-6v-6zM18 3C9.713 3 3 9.713 3 18c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15zm0 27c-6.615 0-12-5.385-12-12S11.385 6 18 6s12 5.385 12 12-5.385 12-12 12z"
        fill="#2FCC71"
      />
    </Svg>
  );
};

export default PlusIconSvg;

const styles = StyleSheet.create({});
