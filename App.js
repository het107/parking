import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

import { Actions } from "react-native-router-flux";

import Nav from "./src/Nav";

type Props = {};
export default class App extends Component<Props> {
  login() {
    Actions.login();
  }
  signup() {
    Actions.signup();
  }
  render() {
    return (
      <ImageBackground
        source={require("./app/img/img1.jpg")}
        style={styles.container}
      >
        <View style={styles.bgcolor} />

        <Text style={styles.welcome}>Park{"\n"}Assist</Text>
        <Image
          source={require("./app/img/line.jpg")}
          style={styles.lineimage}
        />
        <Image
          source={require("./app/img/carnew.jpeg")}
          style={styles.carimage}
        />
        <Image source={require("./app/img/spot.jpg")} style={styles.spot} />
        <Text style={styles.quote}>
          'You know, somebody actually complimented me on my driving today. They
          left a littlenote on the windscreen,it said Parking Fine.'
        </Text>
        <TouchableOpacity onPress={this.login}>
          <Text style={styles.buttonLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signup}>
          <Text style={styles.buttonSignup}>Signup</Text>
        </TouchableOpacity>
        <Nav />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  welcome: {
    fontSize: 60,
    textAlign: "center",
    color: "#ffffff",
    marginTop: "20%",
    fontWeight: "bold",
    fontFamily: "Baskerville"
  },
  quote: {
    fontFamily: "Courier",
    textAlign: "center",
    color: "#ffffff",
    marginTop: "20%",
    fontSize: 20,
    width: "100%",
    fontWeight: "bold"
  },
  bgcolor: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.5
  },
  lineimage: {
    height: 60,
    marginTop: 25
  },
  buttonLogin: {
    fontFamily: "Copperplate",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.6)",
    textAlign: "center",
    borderWidth: 2.5,
    borderColor: "white",
    paddingTop: 15,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 140,
    width: 200,
    height: 50
  },
  buttonSignup: {
    fontFamily: "Copperplate",
    color: "white",
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    textAlign: "center",
    borderWidth: 2.5,
    borderColor: "white",
    paddingTop: 15,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 30,
    width: 200,
    height: 50
  },
  carimage: {
    marginTop: -43,
    marginRight: 300
  },
  spot: {
    height: 29,
    width: 29,
    marginTop: -40,
    marginRight: -330
  }
});
