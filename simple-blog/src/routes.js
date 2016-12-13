import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Posts, { PostsList } from './components/Posts';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={PostsList} />
  </Route>
);

export default routes;
