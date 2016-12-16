import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Posts, { PostsList, PostsNew, PostsDetail } from './components/Posts';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={PostsList} />
    <Route path='posts/new' component={PostsNew} />
    <Route path='posts/:id' component={PostsDetail} />
  </Route>
);

export default routes;
