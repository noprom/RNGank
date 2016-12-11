'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NavigationBar from '../components/NavigationBar';

export default class MeFragment extends Component {
  render() {
    return (
      <View>
        <NavigationBar />
        <Text>me</Text>
      </View>
    );
  }
}
