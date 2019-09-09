import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigateTo } from '../Redux/actions';

export class MyProfile extends React.Component {
  render() {
      return (
       <MyProfileView/>
      );
  }
}

const MyProfileView = ({ activeRoute, navigateTo }) => (
    
      <ScrollView contentContainerStyle={styles.view}>
          <Text style={styles.header1}>My Profile</Text>
          {/* {activeRoute.name} */}
          <Text style={styles.text}>
              Click the below button to navigate to filters page.
          </Text>
          <Button
            title="Add Filters"
            style={styles.button}
            onPress={() => { navigateTo('Filters'); }}
          />
      </ScrollView>   
);

MyProfile.propTypes = {
  activeRoute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen: PropTypes.any.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      backgroundColor: '#ECEFF1',
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 40,
        padding: 20,
    },
    header1: {
        fontSize: 28,
        marginBottom: '30%',
    },
    text: {
        fontSize: 20,
        width: '70%',
        textAlign: 'center',
        lineHeight: 30,
        marginBottom: '10%',
    },
});

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => { dispatch(navigateTo(routeName)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyProfile);

