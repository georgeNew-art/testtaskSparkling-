import React from 'react';
import {StoreContext} from '../contexts/StoreContext';

export const useStores = () => React.useContext(StoreContext);
