'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import theme from '../../constants/theme';
import NavigationBar from '../../components/NavigationBar';
import BackPageComponent from '../BackPageComponent';

export default class ImageTabPage extends BackPageComponent {
    render() {
        return(
            <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor}}>
                <NavigationBar title={this.props.title} isBackBtnOnLeft={true} leftBtnIcon="arrow-back" leftBtnPress={this._handleBack.bind(this)} />
            </View>
        );
    }
}
