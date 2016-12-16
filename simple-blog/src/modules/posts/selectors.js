import { createSelector } from 'reselect';
import { find } from 'lodash';

export const getPosts = state => state.posts;
export const getPostsById = state => state.posts.byId;
export const getAll = state => state.posts.all;

export const getPost = createSelector(
  [getPostsById, (_, id) => id],
  (posts, id) => posts && posts[ id ]
);
