import { Types } from '../actions';

const reducer = (state = null, action) => {
  switch (action.type) {
    case Types.SELECT_BOOK:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
