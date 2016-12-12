import { createReducer } from 'reduxsauce';

import { Types } from '../actions';

const INITIAL_STATE = {};

const selectBook = (state = INITIAL_STATE, action) => {
  return action.payload;
};

const ACTION_HANDLERS = {
  [ Types.SELECT_BOOK ]: selectBook
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
