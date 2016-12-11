'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/requestData';
import { StyleSheet, View, Text, ScrollView, Image, ListView, Button } from 'react-native';
import theme from '../../constants/theme';
import px2dp from '../../utils/px2dp';
import NavigationBar from '../../components/NavigationBar';
import getDate from '../../utils/getCurrentDate';
import * as Info from '../../utils/handleDataSource';

class HomeFragment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0
    };
    this.imageHeight = px2dp(400);
  }

  _onScroll(event) {
    var offsetY = event.nativeEvent.contentOffset.y;
    let offsetH = this.imageHeight - theme.toolbar.height;
    if(offsetY <= offsetH) {
        var opacity = offsetY / offsetH;
        this.setState({opacity: opacity});
    } else {
      this.setState({opacity: 1});
    }
  }

  render() {
    const dataSource = this.props.dataSource;
    return (
      <View style={styles.container}>
          <View style={[styles.toolbar, {opacity: this.state.opacity}]}>
              <NavigationBar title="今日干货" rightBtnIcon="calendar" rightBtnPress={this._onPress.bind(this)}/>
          </View>
          <ScrollView
              scrollEnabled={this.state.scrollEnabled}
              onScroll={this._onScroll.bind(this)}>
              <View style={{height: this.imageHeight, width: theme.screenWidth}}>
                  {this.props.loading ?
                      <Text>loading</Text>
                      :
                      <ImageView
                          imgUrl={Info.getFuLiUrl(dataSource)}
                          labelTime={getDate()}/>
                  }
              </View>
              <View style={styles.scrollContents}>
                <Text>Hello</Text>
              </View>
          </ScrollView>
      </View>
    );
  }
}

class ImageView extends Component {
    static propTypes = {
        imgUrl: PropTypes.string,
        labelTime: PropTypes.string
    }

    render() {
        return(
            <View style={styles.container}>
                <Image source={{uri: this.props.imgUrl}} style={styles.img}/>
                <View style={styles.dateLabel}>
                    <Text style={styles.label}>{this.props.labelTime}</Text>
                </View>
            </View>
        );
    }
}

class MyList extends Component {

    render() {
        // return(
        //     <ListView
        //
        //     />
        // );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    toolbar: {
        position: 'absolute',
        width: theme.screenWidth,
        elevation: 8
    },
    scrollContents: {
        height: theme.screenHeight,
    },
    img: {
        width: theme.screenWidth,
        height: px2dp(400),
        resizeMode: 'cover'
    },
    dateLabel: {
        backgroundColor: 'rgba(0,0,0,.5)',
        position: 'relative',
        width: theme.screenWidth,
        height: px2dp(50),
        bottom: px2dp(50),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    label: {
        color: '#fff',
        fontSize: px2dp(20),
        marginRight: px2dp(20),
        fontWeight: 'bold'
    }
});
