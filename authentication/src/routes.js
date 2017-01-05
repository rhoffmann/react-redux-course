import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import SignOut from './components/auth/SignOut';

// import requireAuth from './helpers/requireAuth';

const routes = (
  <Route path="/" component={App}>
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
    <Route path="signout" component={SignOut} />
  </Route>
);

export default routes;
