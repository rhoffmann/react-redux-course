import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import routes from './routes';
import store from './configureStore';

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.querySelector('.container')
);
