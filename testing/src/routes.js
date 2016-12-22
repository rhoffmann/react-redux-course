import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import CommentBox from './components/CommentBox';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={CommentBox} />
  </Route>
);

export default routes;
