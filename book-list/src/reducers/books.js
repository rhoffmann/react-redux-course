import { Types } from '../actions';

const INITIAL_STATE = [
  { id: 1, title: 'Javascript: The Good Parts', pages: 213 },
  { id: 2, title: 'Superhuman', pages: 143 },
  { id: 3, title: 'Eloquent Javascript', pages: 300},
  { id: 4, title: 'I dont know', pages: 1}
];

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default booksReducer;
