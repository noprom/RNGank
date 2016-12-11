'use strict';

import { Provider } from 'react-redux';
import { React, Component } from 'react';
import { Navigator } from 'react-native';
import { store } from './store/index';
import MainPage from './containers/MainPage';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator initialRoute={{component: MainPage}}
        renderScene={(route, navigator) =>
            <route.component {...route.args} navigator={navigator} />
        }
        />
      </Provider>
    );
  }
}
