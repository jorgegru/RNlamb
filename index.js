import React from 'react';
import { Provider } from 'react-redux';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import axios from 'axios';

import storeConfig from './src/store';

const store = storeConfig();
axios.defaults.baseURL = 'https://lamb-82233.firebaseio.com/';

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
