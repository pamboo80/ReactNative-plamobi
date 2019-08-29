import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  /*ScrollView,
  View,
  Text,*/
  StatusBar
} from 'react-native';

import {
  /*Header,
  LearnMoreLinks,*/
  Colors /*,
  DebugInstructions,
  ReloadInstructions,*/
} from 'react-native/Libraries/NewAppScreen';

//import MapView from './index';
import MapWithClustering from '../../components/MapView/MapWithClustering';
import {Marker} from 'react-native-maps';

export default Home = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>        
          <MapWithClustering  
            region={{  
              latitude: 52.5,  
              longitude: 19.2,  
              latitudeDelta: 8.5,  
              longitudeDelta: 8.5  
            }}  
            style={{ width: 400, height: 800 }}  
          >  
            <Marker coordinate={{ latitude: 52.0, longitude: 18.2 }} />  
            <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />  
            <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />  
            <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />  
            <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />  
            <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />  
            <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />  
            <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />  
            
          </MapWithClustering>        
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});