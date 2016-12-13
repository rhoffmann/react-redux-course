import { createSelector } from 'reselect';

export const getPosts = state => state.posts;

export const getAll = createSelector(
  [getPosts],
  (posts) => posts.all
);
