/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App/App';
import {name as appName} from './app.json';

//import * as MapView from './MapView/MapWithClustering';
//module.exports = MapView;

import { Client } from 'bugsnag-react-native';
const bugsnag = new Client("a78d0159b5c1f7886fe21fb9854b047d");

AppRegistry.registerComponent(appName, () => App);
