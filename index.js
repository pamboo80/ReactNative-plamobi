/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App/App';
import {name as appName} from './app.json';

//import * as MapView from './MapView/MapWithClustering';
//module.exports = MapView;

AppRegistry.registerComponent(appName, () => App);
