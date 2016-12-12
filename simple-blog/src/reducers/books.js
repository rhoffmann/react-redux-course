import { createReducer } from 'reduxsauce';

import { Types } from '../actions';

const INITIAL_STATE = [
  { id: 1, title: 'Javascript: The Good Parts', pages: 213 },
  { id: 2, title: 'Superhuman', pages: 143 },
  { id: 3, title: 'Eloquent Javascript', pages: 300},
  { id: 4, title: 'I dont know', pages: 1}
];

// const doNothing = (state = INITIAL_STATE, action) => state;

const ACTION_HANDLERS = {
  // [Types.SELECT_BOOK]: doNothing
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
