import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking,
  StyleSheet
} from 'react-native';

export default class About extends React.Component {
  render() {
      return (
        <ScrollView contentContainerStyle={styles.view}>
        <Text style={styles.h1}>Advertise Yourself</Text>
        <Text style={[styles.text, styles.p]}>plaMobi is a peer-to-peer (P2P) decentralized Ethereum blockchain application in which service seeker and service provider meet without the need of middlemen, enter into trustless smart contracts with reputation and money in escrow, and take advantage of a decentralized system of moderators if needed.
        </Text>
        <Text style={[styles.text, styles.p]}>We collide reputation and economic initiatives into one by tokenizing reputation and giving it value. All parties, moderators included, have strong and aligned initiatives to act honestly, since everyone has something of value at stake and something to gain if the desired outcome is achieved.
        </Text>
        <Text style={[styles.text, styles.p]}>Identity verification and reputation data on the blockchain ensures safe, reputable service providers. And smart contracts enable secure and reliable payments directly from one party to another.      
        </Text>                     
        <Text onPress={() =>
            Linking.openURL('https://www.plamobi.com/')}
            style={styles.linkCredits}
          >www.plamobi.com</Text>
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    padding: 20
  },
  h1: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10
  },
  p: {
    textAlign: 'left',
    marginBottom: 20
  },
  linkCredits: {
    fontStyle: 'italic',
    color: '#2962FF'
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  signature: {
    fontSize: 16,
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#2962FF'
  }
});

export{About};
