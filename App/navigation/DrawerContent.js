import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import {
  drawerInactiveItemColor,
  bgDrawerInactiveItem,
  bgDrawerActiveItem,
  drawerHeaderColor
} from "../global.styles";
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { navigateTo } from "../Redux/actions";

const DrawerContent = ({ navigateTo, activeRoute, routes, closeDrawer }) => (
  <ScrollView>
    <ImageBackground source={require('../assets/images/background_account.png')}
      style={{width: '100%', height: 170, marginBottom:10}}>
      <View style={styles.header}>
      <View style={styles.headerLogo}>      
         <Image
            resizeMode='contain'
            source={require('../assets/images/ic_person_blue.png')}
            style={styles.image32}
          />    
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.drawerTitle}>Nagarajan S</Text>
        <Text style={styles.drawerEmail}>nagarajan.s@gmail.com</Text>
      </View>
    </View>
  </ImageBackground>  
    {routes.map(route => (route.name==="My Profile" || route.name==="Filters" || route.name==="Settings") && (
      <TouchableOpacity
        activeOpacity={.6}
        key={route.name}
        onPress={() => {
          closeDrawer();
          navigateTo(route.name);
        }}
        style={
          activeRoute.name === route.name
            ? [styles.drawerItem, styles.activeDrawerItem]
            : styles.drawerItem
        }
      >
        {route.image && (
          <View style={styles.drawerItemLogo}>
            {/* <Icon
              name={route.icon}
              size={30}
              color={activeRoute.name === route.name ? "#fff" : "#000"}
            /> */}
            <Image           
            source={route.image}
            style={styles.image30}
            />    
          </View>
        )}
        <Text
          style={ 
            activeRoute.name === route.name
              ? { color: "#000", fontSize: 14.5 } //fff
              : { color: "#000", fontSize: 14.5 } 
          }
        >
        {route.name}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

DrawerContent.propTypes = {
  activeRoute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen: PropTypes.any.isRequired,
    image: PropTypes.any.isRequired
  }).isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigateTo: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    paddingTop: 40, // 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
    paddingLeft: 16,
    height: 170
    //backgroundColor: bgDrawerHeader
  },
  image30: {
    width: 30,
    height: 30
  },
  image32: {
    width: 32,
    height: 32
  },
  headerLogo: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  subTitle: {
    height: 56,
    paddingTop: 10,
    paddingLeft: 6
  },
  drawerTitle: {
    color: drawerHeaderColor,
    fontFamily: "Roboto",
    fontWeight: "800",
    fontSize: 14.5
  },
  drawerEmail: {
    color: drawerHeaderColor,
    fontFamily: "Roboto",
    fontWeight: "800",
    fontSize: 14.5
  },
  activeDrawerItem: {
    backgroundColor: "#fff" //bgDrawerActiveItem
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: bgDrawerInactiveItem,
    color: drawerInactiveItemColor,
    height: 50,
    paddingLeft: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#fff"
  },
  drawerItemLogo: {
    paddingRight: 16
  }
});

const mapStateToProps = (state, ownProps) => ({
  routes: state.routes.routes,
  activeRoute: state.routes.activeRoute,
  closeDrawer: ownProps.closeDrawer,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContent);
