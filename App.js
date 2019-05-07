import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './src/components/LoginScreen';
import SignupScreen from './src/components/SignupScreen';
import HomeScreen from './src/components/HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Home',
    /* For styling header
      navigationOptions: {
          headerStyle: {
          backgroundColor: '#f4511e',
          },
          headerTitleStyle: {
          fontWeight: 'bold',
          },
      }
      */
  }
);

export default class App extends Component {
render() {
  return <RootStack />;
}
}