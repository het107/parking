import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { Router, Stack, Scene } from "react-native-router-flux";

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    marginBottom: 20
  }
});
