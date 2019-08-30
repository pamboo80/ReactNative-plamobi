import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  /*ScrollView, 
  */Text,
  View,
  StatusBar,
  Dimensions,
  PermissionsAndroid,
  Platform
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
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import Geolocation from 'react-native-geolocation-service';

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.009; // More the value - more zoom out
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export async function requestLocationPermission(parent) 
{
    try {                
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "App needs access to get your location!",
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        parent.getLocation();          
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    };
};

export default class Home extends React.Component {

  constructor(props){
    super(props);

    this.watchID = null;
    this.state = {
      initialPosition: {
        latitude: 0, /*40.712776*/
        longitude: 0, /*-74.005974*/
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      error: null
    };

  }
  
  getLocation()
  {
      /*
      this.watchID = navigator.geolocation.getCurrentPosition((position) => {
        let lat = parseFloat(position.coords.latitude);
        let long = parseFloat(position.coords.longitude);
  
        let initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta:LONGITUDE_DELTA
        };
  
        this.setState({initialPosition: initialRegion});
        this.setState({markerPosition: initialRegion});
      },
      (error) => this.setState({error: error}),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000});
      */                       
      Geolocation.getCurrentPosition(
        (position) => {
          let lat = parseFloat(position.coords.latitude); 
          let long = parseFloat(position.coords.longitude);
    
          let initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA
          };        

          this.setState({initialPosition: initialRegion});
          this.setState({markerPosition: initialRegion});
        },
        (error) => {
          this.setState({error: error.message});
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 ,showLocationDialog: true, forceRequestLocation:true }
      );

      /*
      this.watchID =  navigator.geoLocation.watchPosition((position) => {
        let lat = parseFloat(position.coords.latitude);
        let long = parseFloat(position.coords.longitude);

        let lastRegion = {
          latitude: lat,
          longitude: long,
          longitudeDelta: LONGITUDE_DELTA,
          latitudeDelta: LATITUDE_DELTA
        };
        this.setState({initialPosition: lastRegion});
        this.setState({markerPosition: lastRegion});
      });*/      
      this.watchID = Geolocation.watchPosition(
        (position) => {

          const { latitude, longitude } = position.coords;

          const newCoordinate = {
            latitude,
            longitude
          };

          let lat = parseFloat(position.coords.latitude);
          let long = parseFloat(position.coords.longitude);
    
          let lastRegion = {
            latitude: lat,
            longitude: long,
            longitudeDelta: LONGITUDE_DELTA,
            latitudeDelta: LATITUDE_DELTA
          };
          this.setState({initialPosition: lastRegion});
          this.setState({markerPosition: lastRegion});

          if (Platform.OS === "android") {
            if (this.marker) {
              this.marker._component.animateMarkerToCoordinate(
                newCoordinate,
                500
              );
            }
          } else {
            
          }

        },
        (error) => {
          this.setState({error: error.message});
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 ,showLocationDialog: true, forceRequestLocation:true }
      );   
  }

  async componentDidMount() {          
    await requestLocationPermission(this);
  };

  componentWillUnmount() {
    if(this.watchID!=null){
      //navigator.geoLocation.clearWatch(this.watchID);
      Geolocation.clearWatch(this.watchID);
    }    
  }

  // getMapRegion = () => ({
  //   latitude: this.state.initialPosition.latitude,
  //   longitude: this.state.initialPosition.longitude,
  //   latitudeDelta: LATITUDE_DELTA,
  //   longitudeDelta:LONGITUDE_DELTA
  // });

  render() {
    return (      
      <View style={styles.container}>
          <MapView            
            region={this.state.initialPosition}   /*{this.getMapRegion()} */         
            loadingEnabled={true}
            loadingIndicatorColor={'#3a9def'}
            style={styles.map}               
          >  
            <Marker.Animated
              ref={marker => {
                this.marker = marker;
              }}
              coordinate={this.state.markerPosition}
              title={"title"}
              description={"description"}>
                <View style={styles.radius}>
                  <View style={styles.marker} />
                </View>
            </Marker.Animated>               
          </MapView>             
      </View>   
      // <View>
      //   <Text> {this.state.initialPosition.latitude} </Text>
      //   <Text> {this.state.initialPosition.longitude} </Text>
      //   <Text> {this.state.initialPosition.latitudeDelta} </Text>
      //   <Text> {this.state.initialPosition.longitudeDelta} </Text>
      // </View>
    )
  }
}

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  }
});