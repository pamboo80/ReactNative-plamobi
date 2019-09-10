import React from 'react';
import {  
    Image,
    StyleSheet,
  } from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {MultiBar, MultiBarToggle} from '../components/Multibar';

import Map from '../tabs/Map';
import List from '../tabs/List';
import Chat from '../tabs/Chat';
import Notifications from '../tabs/Notifications';
import Settings from '../tabs/Settings';

import {BottomTabRoutes as Routes} from "./BottomTabRoutes";

import { primaryLight, primaryDark } from '../global.styles';

const TabsNavigator = createBottomTabNavigator({
    [Routes.TabsMap]: {
            screen: Map,
            navigationOptions: {
              tabBarLabel: 'Map',
              tabBarIcon: ({ tintColor }) => (
                <Image 
                  source={require('../assets/images/ic_map.png')}
                  style={[styles.icon, {tintColor: tintColor}]}
                />
              )
            }
          },
    [Routes.TabsList]: {
    screen: List,
    navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/images/ic_list.png')}
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
                    actionSize={40}
                    toggleColor={primaryDark}
                    routes={[
                        {
                            routeName: Routes.OtherScreen,
                            color: primaryDark,
                            icon: 
                               (
                                <Image
                                  source={require('../assets/images/ic_edit.png')}     
                                  style={[expandStyles.icon]}                              
                                />
                              )
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: primaryDark,
                            icon: 
                                (
                                    <Image
                                    source={require('../assets/images/ic_camera.png')} 
                                    style={[expandStyles.icon]}                                       
                                    />
                                )                              
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: primaryDark,
                            icon: 
                            (
                                <Image
                                source={require('../assets/images/ic_message_email.png')}   
                                style={[expandStyles.icon]}                                  
                                />
                            )                            
                        },
                    ]}
                    icon={ (
                        <Image
                        source={require('../assets/images/ic_plus.png')}     
                        style={[styles.icon]}                 
                        />
                    )} 
                />
            )
        }),
        params: {
            navigationDisabled: true
        }
    },
    [Routes.TabsChat]: {
        screen: Chat,
        navigationOptions: {
          tabBarLabel: 'Chat',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('../assets/images/ic_chat.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
          )
        }
    },
    [Routes.TabsNotifications]: {
        screen: Notifications,
        navigationOptions: {
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ tintColor }) => (
              <Image
                source={require('../assets/images/ic_bell.png')}
                style={[styles.icon, {tintColor: tintColor}]}
              />
            )
          }
    }
}, {
    tabBarComponent: MultiBar,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#F8F8F8',
        style: {
            backgroundColor: primaryLight
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

const expandStyles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24
    }
});

const BottomNavigatorContainer = createAppContainer(createStackNavigator({
    [Routes.Tabs]: TabsNavigator,
    [Routes.OtherScreen]: Settings
}, {
    headerMode: 'none'
}));

export {BottomNavigatorContainer as BottomNavigator};