import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';

const rootReducer = combineReducers({
  // state: (state = []) => state,
  user: user.reducer,
  form: formReducer
});

export default rootReducer;
