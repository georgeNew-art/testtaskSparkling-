import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../consts/Screens';

// Screens
import MainScreen from '../../pages/Camera/MainScreen/MainScreen';
import DetailScreen from '../../pages/Camera/DetailScreen/DetailScreen';

const Stack = createStackNavigator();

const CameraStack = (
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#ECF0F1'}}}>
    <Stack.Screen
      name={Screens.CAMERA_MAIN_SCREEN}
      component={MainScreen}
      options={{
        title: 'CAR PHOTOS ADDING',
        headerTitleStyle: {fontWeight: 'bold', color: '#2B3E50'},
      }}
    />
    <Stack.Screen
      name={Screens.CAMERA_DETAIL_SCREEN}
      component={DetailScreen}
      options={{
        title: 'DETAIL INFORMATION',
        headerTitleStyle: {fontWeight: 'bold', color: '#2B3E50'},
      }}
    />
  </Stack.Navigator>
);

export default CameraStack;
