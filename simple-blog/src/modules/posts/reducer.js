import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const INITIAL_STATE = {
  all: [],
  post: null
};

const fetchPostsReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  if (action.error) {
    console.error(payload.message);
    return state;
  }
  return {
    ...state,
    all: action.payload.data
  };
};

const ACTION_HANDLERS = {
  [Types.FETCH_POSTS]: fetchPostsReducer
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
