import React from 'react';
import { Provider } from 'react-redux';

import {AppRegistry} from 'react-native';
import Tab from './src/Navigator';
import {name as appName} from './app.json';

import storeConfig from './src/store';

const store = storeConfig();

const Redux = () => (
    <Provider store={store}>
        <Tab />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
