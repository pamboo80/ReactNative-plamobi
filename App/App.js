/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {  
  View
} from 'react-native';

import {BaseNavigator} from "./navigation";

export default App = () => (
    <View style={{
        flex: 1,
        backgroundColor: '#293656'
    }}>
        <BaseNavigator/>
    </View>
);