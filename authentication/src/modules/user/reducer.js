import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const INITIAL_STATE = {
  isAuthenticated: false,
  serverMessage: false
};

const auth = (state = INITIAL_STATE, action) => ({
  ...state,
  error: false,
  isAuthenticated: true
});

const unauth = (state = INITIAL_STATE, action) => ({
  ...state,
  error: false,
  isAuthenticated: false
});

const authError = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.payload
});

const fetchServerMessage = (state = INITIAL_STATE, action) => ({
  ...state,
  serverMessage: action.payload
});

const ACTION_HANDLERS = {
  [Types.USER_AUTH]: auth,
  [Types.USER_UNAUTH]: unauth,
  [Types.USER_AUTH_ERROR]: authError,
  [Types.FETCH_MESSAGE]: fetchServerMessage
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
