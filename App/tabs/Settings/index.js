import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

export default class Settings extends React.Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Settings</Text>
            </SafeAreaView>
        );
    }
}

export{Settings};