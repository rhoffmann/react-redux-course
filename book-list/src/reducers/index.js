import { combineReducers } from 'redux';

import booksReducer from './books';
import activeBookReducer from './activeBook';

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: activeBookReducer
});

export default rootReducer;
