import { createReducer } from 'reduxsauce';

import { Types } from './actions';

import { omit } from 'lodash';

const INITIAL_STATE = {
  all: [],
  post: null
};

const fetchAllPosts = (state = INITIAL_STATE, action) => {
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


const fetchPost = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  if (action.error) {
    return state;
  }
  const post = payload.data;
  return {
    ...state,
    byId: {
      ...state.byId,
      [ post.id ]: post
    }
  };
};


const deletePost = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  console.log('deletePost', action);
  if (action.error) {
    return state;
  }
  const post = payload.data;
  return {
    ...state,
    byId: {
      ...omit(state.byId, [post.id])
    }
  };
};

const ACTION_HANDLERS = {
  [Types.FETCH_POSTS]: fetchAllPosts,
  [Types.FETCH_POST]: fetchPost,
  [Types.DELETE_POST]: deletePost
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
