import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const INITIAL_STATE = [
];

// const doNothing = (state = INITIAL_STATE, action) => state;

const ACTION_HANDLERS = {
  // [Types.SELECT_BOOK]: doNothing
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
