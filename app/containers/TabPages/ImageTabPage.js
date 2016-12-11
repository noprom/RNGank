'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import theme from '../../constants/theme';

export default class ImageTabPage extends Component {
  render() {
    return(
      <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor}}>
        <Text>福利</Text>
      </View>
    );
  }
}
