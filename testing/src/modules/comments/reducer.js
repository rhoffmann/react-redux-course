import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const INITIAL_STATE = [];

const saveComment = (state = INITIAL_STATE, action) => {
  return [ ...state, action.payload ];
};

const ACTION_HANDLERS = {
  [Types.COMMENT_SAVE]: saveComment
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
