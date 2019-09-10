import React from 'react';

import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

export default class Burgers extends React.Component {
  static navigationOptions = {
    title: 'Burgers'
  }

  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Yet to be implemented!</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})