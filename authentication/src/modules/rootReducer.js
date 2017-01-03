import { combineReducers } from 'redux';

import user from './user';

const rootReducer = combineReducers({
  // state: (state = []) => state,
  user: user.reducer
});

export default rootReducer;
