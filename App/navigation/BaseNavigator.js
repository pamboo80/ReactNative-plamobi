import React from 'react';
import {  
    Image,
    StyleSheet,
  } from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';

import Home from '../tabs/Home';
import Menu from '../tabs/Menu';
import Contact from '../tabs/Contact';
import Bookmarks from '../tabs/Bookmarks';
import Settings from '../tabs/Settings';

import {Routes} from "./Routes";

const TabsNavigator = createBottomTabNavigator({
    [Routes.TabsHome]: {
            screen: Home,
            navigationOptions: {
              tabBarLabel: 'Home',
              tabBarIcon: ({ tintColor }) => (
                <Image 
                  source={require('../assets/images/homeicon.png')}
                  style={[styles.icon, {tintColor: tintColor}]}
                />
              )
            }
          },
    [Routes.TabsMenu]: {
    screen: Menu,
    navigationOptions: {
        tabBarLabel: 'Menu',
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/images/menuicon.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        )
    }
    },
    MultiBar: {
        screen: () => null,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <MultiBarToggle
                    navigation={navigation}
                    actionSize={30}
                    routes={[
                        {
                            routeName: Routes.OtherScreen,
                            color: '#FF8360',
                            icon: (
                                <Icon
                                    name="rocket"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: '#E8E288',
                            icon: (
                                <Icon
                                    name="dashboard"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: '#7DCE82',
                            icon: (
                                <Icon
                                    name="gears"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                    ]}
                    icon={(
                        <Icon
                            name="plus"
                            color="#FFFFFF"
                            size={24}
                        />
                    )}
                />
            )
        }),
        params: {
            navigationDisabled: true
        }
    },
    [Routes.TabsContact]: {
        screen: Contact,
        navigationOptions: {
          tabBarLabel: 'Contact',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('../assets/images/contacticon.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
          )
        }
    },
    [Routes.TabsBookmarks]: {
        screen: Bookmarks,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="user"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
}, {
    tabBarComponent: MultiBar,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171F33'
        },
        tabStyle: {}
    }
});

const styles = StyleSheet.create({
    icon: {
      width: 28,
      height: 28
    }
  });

const BaseNavigatorContainer = createAppContainer(createStackNavigator({
    [Routes.Tabs]: TabsNavigator,
    [Routes.OtherScreen]: Settings
}, {
    headerMode: 'none'
}));

export {BaseNavigatorContainer as BaseNavigator};