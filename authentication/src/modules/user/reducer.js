import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const INITIAL_STATE = {
  isAuthenticated: false
};

const setAuthenticated = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isAuthenticated: action.payload
  };
};

const ACTION_HANDLERS = {
  [Types.CHANGE_AUTH]: setAuthenticated
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
