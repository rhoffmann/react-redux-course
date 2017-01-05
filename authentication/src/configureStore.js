import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './modules/rootReducer';

import { Types } from './modules/user/actions';

function rehydrateStore(store) {
  const token = localStorage.getItem('token');

  if (token) {
    store.dispatch({ type: Types.USER_AUTH });
  }

  return store;
}

const middleware = [
  thunkMiddleware,
  promiseMiddleware
];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, enhancers);

rehydrateStore(store);

export default store;
