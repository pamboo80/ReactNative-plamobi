import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

export class Filters extends React.Component {
  render() {
      return (
       <FiltersView/>
      );
  }
}


const FiltersView = ({ activeRoute }) => (
  <ScrollView contentContainerStyle={styles.view}>
    <Text style={styles.header1}>Filters</Text>  
    {/* {activeRoute.name} */}
    <Text style={styles.text}>Yet to be implemented!</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  header1: {
    fontSize: 24,
    marginBottom: '20%',
  },
  text: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: '20%',
  },
});

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
});

export default connect(
  mapStateToProps,
)(Filters);
