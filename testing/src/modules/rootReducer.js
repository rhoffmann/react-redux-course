import { combineReducers } from 'redux';

import comments from './comments';

const rootReducer = combineReducers({
  // state: (state = []) => state,
  comments: comments.reducer
});

export default rootReducer;
