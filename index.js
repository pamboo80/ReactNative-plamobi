/**
 * @format
 */

import App from './App/App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import { Client } from 'bugsnag-react-native';
const bugsnag = new Client("a78d0159b5c1f7886fe21fb9854b047d");

AppRegistry.registerComponent(appName, () => App);

//bugsnag.notify(new Error("Test error"));


