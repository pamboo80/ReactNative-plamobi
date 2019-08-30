import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";


class LocationA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }


  render() {
    return (
      <View>
        <Text> {this.state.latitude} </Text>
        <Text> {this.state.longitude} </Text>
        <Text> {this.state.error} </Text>
      </View>
    );
  }
}

export default LocationA;
