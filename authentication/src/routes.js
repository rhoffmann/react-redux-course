import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignIn from './components/auth/SignIn';

// import requireAuth from './helpers/requireAuth';

const routes = (
  <Route path="/" component={App}>
    <Route path="signin" component={SignIn} />
  </Route>
);

export default routes;
