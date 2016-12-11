import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BackPageComponent from '../BackPageComponent';
import NavigationBar from '../../components/NavigationBar';

export default class ThemeColorPage extends BackPageComponent {
    _handleBack() {

    }
    
    render() {
        return(
            <View>
                <NavigationBar title="主题" isBackBtnOnLeft={true} leftBtnIcon="arrow-back" leftBtnPress={this._handleBack.bind(this)}/>
            </View>
        );
    }
}
