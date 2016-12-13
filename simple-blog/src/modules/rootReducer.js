import { combineReducers } from 'redux';

import posts from './posts';


const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: posts.reducer
});

export default rootReducer;
