import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  LOAD_POSTS
`);

export const loadPosts = (key) => ({
  type: Types.LOAD_POSTS,
  payload: key
});
