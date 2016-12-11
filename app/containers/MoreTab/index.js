'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import theme from '../../constants/theme';
import NavigationBar from '../../components/NavigationBar';
import RowItem from '../../components/SimpleRowItem';
import px2dp from '../../utils/px2dp';
import ThemeColorPage from './ThemeColorPage';

export default class MeFragment extends Component {

  constructor(props) {
    super(props);
  }

  _itemClickCallback() {
      this.props.navigator.push({
        component: ThemeColorPage
      });
  }

  render() {
    return (
      <View style={styles.container}>
          <NavigationBar title="更多" />
          <ScrollView>
            <View style={[styles.block, styles.intro]}>
            </View>
            <View style={styles.block}>
                <RowItem title="自定义主题" icon="md-brush" onPress={this._itemClickCallback.bind(this)} />
                <RowItem title="选择语言 / Language" icon="md-globe" renderSegment={false} onPress={this._itemClickCallback.bind(this)} />
            </View>
            <View style={styles.block}>
                <RowItem title="关于作者" icon="md-happy" renderSegment={false} onPress={this._itemClickCallback.bind(this)}/>
            </View>
            <View style={styles.block}>
                <RowItem title="关于Gank.io" icon="md-aperture" onPress={this._itemClickCallback.bind(this)}/>
                <RowItem title="反馈" icon="md-text" onPress={this._itemClickCallback.bind(this)}/>
                <RowItem title="分享" icon="md-share" renderSegment={false} onPress={this._itemClickCallback.bind(this)}/>
            </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: theme.pageBackgroundColor
    },
    intro: {
        height: px2dp(100),
        marginTop: px2dp(18),
        backgroundColor: '#fff'
    },
    block: {
        marginTop: px2dp(15),
        borderBottomColor: theme.segment.color,
        borderBottomWidth: theme.segment.width,
        borderTopColor: theme.segment.color,
        borderTopWidth: theme.segment.width
    }
});
