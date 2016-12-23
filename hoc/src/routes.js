import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Resources from './components/Resources';

import requireAuth from './helpers/requireAuth';

const routes = (
  <Route path="/" component={App}>
    <Route path="resources" component={requireAuth(Resources)} />
  </Route>
);

export default routes;
