import React from 'react';
import { TextInput, Text, Image, View, StyleSheet, Dimensions } from 'react-native';

import { Input, Button } from 'react-native-elements';
import { primaryDark } from '../../global.styles';

const { width } = Dimensions.get('window');

export default class Chat extends React.Component {

  state = {
    name: '',
    email: '',
    message: '',
  }

  updateFormInput = (type, value) => {
    this.setState({
      [type]: value,
    });
  }

  sendMessage = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.logoContainer}>
          <Image resizeMode='contain' style={styles.logo} source={require('../../assets/images/logo.png')} />
        </View>
        <Text style={styles.title}>Contact Us</Text>
        
        <Input placeholder="Name" value={this.state.name} onChangeText={(text) => this.updateFormInput('name', text)} />        
        <Input placeholder="Email" value={this.state.email} onChangeText={(text) => this.updateFormInput('email', text)} />
        <Input placeholder="Message" value={this.state.message} onChangeText={(text) => this.updateFormInput('message', text)} />
          
        <Button
          onPress={this.sendMessage}
          title="Submit"
          large
          backgroundColor={primaryDark}
          buttonStyle={styles.button}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginLeft: 12,
    fontFamily: 'AlegreyaSansSC-Light',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  logoContainer: {
    maxHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 170,
    maxHeight: 40
  },
  button: {
    marginTop: 20
  }
})