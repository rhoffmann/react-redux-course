import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import SignOut from './components/auth/SignOut';

import FeatureScreen from './components/FeatureScreen';
import WelcomeScreen from './components/WelcomeScreen';

import requireAuth from './helpers/requireAuth';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={WelcomeScreen} />
    <Route path="feature" component={requireAuth(FeatureScreen)} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
    <Route path="signout" component={SignOut} />
  </Route>
);

export default routes;
