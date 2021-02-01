import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface Props {}

const MinusIconSvg = (props: Props) => {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none">
      <Path
        d="M10.5 16.5v3h15v-3h-15zM18 3C9.713 3 3 9.713 3 18c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15zm0 27c-6.615 0-12-5.385-12-12S11.385 6 18 6s12 5.385 12 12-5.385 12-12 12z"
        fill="#F32013"
      />
    </Svg>
  );
};

export default MinusIconSvg;

const styles = StyleSheet.create({});
