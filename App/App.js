/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {  
    View,
    StyleSheet,
    Dimensions,
    Platform,    
    StatusBar,
    DrawerLayoutAndroid
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Redux/reducers';
import { setNavigator, setActiveRoute } from "./Redux/actions";
import DrawerContent from './navigation/DrawerContent';
import Toolbar from './navigation/Toolbar';
import {BaseNavigator} from "./navigation";
import { bgStatusBar, bgDrawer } from './global.styles';
  
let store = createStore(reducer);
/* getDrawerWidth - Default drawer width is screen width - header width
* https://material.io/guidelines/patterns/navigation-drawer.html
*/
const getDrawerWidth = () => Dimensions.get('window').width - (Platform.OS === 'android' ? 56 : 64);

export default class App extends Component {
    constructor() {
      super();
  
      this.drawer = React.createRef();
      this.navigator = React.createRef();
    }
  
    componentDidMount() {
      store.dispatch(setNavigator(this.navigator.current));
    }
  
    openDrawer = () => {
      this.drawer.current.openDrawer();
    };
  
    closeDrawer = () => {
      this.drawer.current.closeDrawer();
    };
  
    getActiveRouteName = navigationState => {
      if (!navigationState) {
        return null;
      }
      const route = navigationState.routes[navigationState.index];
      // dive into nested navigators
      if (route.routes) {
        return getActiveRouteName(route);
      }
      return route.routeName;
    };
  
    render() {
      return (
        <Provider store={store}>
          <DrawerLayoutAndroid
            drawerWidth={getDrawerWidth()}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={
              () => <DrawerContent closeDrawer={this.closeDrawer} />
            }
            drawerBackgroundColor={bgDrawer}
            ref={this.drawer}
          >
            <View style={styles.container}>
              <StatusBar
                  translucent
                  backgroundColor={bgStatusBar}
                  animated
              />
              <Toolbar showMenu={this.openDrawer} />              
              <BaseNavigator/>
            </View>
          </DrawerLayoutAndroid>
        </Provider>
      );
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff'
},
});

// export default App = () => (
//     <View style={{
//         flex: 1,
//         backgroundColor: '#fff'
//     }}>
//         <BaseNavigator/>
//     </View>
// );