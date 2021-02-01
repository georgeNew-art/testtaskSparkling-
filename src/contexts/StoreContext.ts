import React from 'react';
import {MainCameraStore} from '../store/MainCameraStore';

const store = {
  mainCameraStore: new MainCameraStore(),
};

export const StoreContext = React.createContext(store);
