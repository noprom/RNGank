'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import theme from '../../../constants/theme';

export default class TextTabPage extends Component {

    render() {
        return(
            <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor}}>
                <Text>Android/iOS</Text>
            </View>
        );
    }
}
