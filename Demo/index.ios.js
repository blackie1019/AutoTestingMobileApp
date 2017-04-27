
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/components/Main';

class test extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('test', () => test);
