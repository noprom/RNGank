'use strict';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import thunk from 'react-thunk';

const applyStoreMiddleware = applyMiddleware(thunk)(createStore);
export const store = applyStoreMiddleware(reducers);
