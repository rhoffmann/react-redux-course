import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

const INITIAL_STATE = {};

const enhancers = compose(
  // applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, INITIAL_STATE, enhancers);

export default store;
