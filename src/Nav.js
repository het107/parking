import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Login from "./components/Login";
import Signup from "./components/Signup";

export default class Nav extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Signup" />
          {/* <Scene key="home" component={Home} /> */}
        </Stack>
      </Router>
    );
  }
}
