'use strict';

import { Platform, Dimensions, PixelRatio } from 'react-native';
import colors from './colors';
import px2dp from '../utils/px2dp';

const favoriteColor = colors.limeGreen;
export default {
  mainThemeColor: favoriteColor,
  pageBackgroundColor: '#f4f4f4',
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  segment: {
    color: '#ccc',
    width: 1 / PixelRatio.get()
  },
  tabButton: {
    selectedColor: favoriteColor,
    normalColor: '#aaa'
  },
  toolbar: {
      height: (Platform.OS === 'android') ? px2dp(45) : px2dp(49),
      barColor: favoriteColor,
      titleColor: '#fff',
      titleSize: px2dp(16)
  }
}
