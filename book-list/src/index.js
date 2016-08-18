import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import App from './components/App';


const INITIAL_STATE = {};

const enhancers = compose(
  // applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, INITIAL_STATE, enhancers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
