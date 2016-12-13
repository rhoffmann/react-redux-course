import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Posts, { PostsList, PostsNew } from './components/Posts';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={PostsList} />
    <Route path='posts/new' component={PostsNew} />
  </Route>
);

export default routes;
