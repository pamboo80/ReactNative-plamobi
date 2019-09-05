import React from 'react';

import List from './routes/List';
import Appetizers from './routes/Appetizers';
import Burgers from './routes/Burgers';

import { createStackNavigator } from 'react-navigation';

const routeConfig = {
  List: { screen: List },
  Appetizers: { screen: Appetizers },
  Burgers: { screen: Burgers },
}

const StackNavigatorConfig = {
  navigationOptions: {
    headerBackTitleStyle: {
      color: 'red',
    },
    headerTintColor: 'red'
  }
}

export default Home = createStackNavigator(routeConfig, StackNavigatorConfig);