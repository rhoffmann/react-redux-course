import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './modules';

const middleware = [
  thunkMiddleware,
  promiseMiddleware
];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, enhancers);

export default store;
