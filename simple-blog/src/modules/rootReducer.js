import { combineReducers } from 'redux';

import posts from './posts';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: posts.reducer,
  form: formReducer
});

export default rootReducer;
