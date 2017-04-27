
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/components/Main';

class Demo extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('Demo', () => Demo);
