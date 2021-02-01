import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigationService';

// Stacks
import CameraStack from './stack/CameraStack';

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>{CameraStack}</NavigationContainer>
  );
};

export default Navigator;
