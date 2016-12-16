import { createTypes } from 'reduxsauce';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=richardhoffmann';

const createApiUrl = (endpoint) => `${ROOT_URL}${endpoint}${API_KEY}`;

export const Types = createTypes(`
  FETCH_POSTS
  FETCH_POST
  DELETE_POST
  POST_CREATE
`);

// action creators

export const fetchPosts = () => {
  const request = axios.get(createApiUrl('/posts'));

  return {
    type: Types.FETCH_POSTS,
    payload: request
  };
}

export const fetchPost = (id) => {
  const request = axios.get(createApiUrl(`/posts/${id}`));

  return {
    type: Types.FETCH_POST,
    payload: request
  };
}

export const deletePost = (id) => {
  const request = axios.delete(createApiUrl(`/posts/${id}`));

  return {
    type: Types.DELETE_POST,
    payload: request
  };
}


export const createPost = (post) => {
  const request = axios.post(createApiUrl('/posts'), post);

  return {
    type: Types.POST_CREATE,
    payload: request
  }
}
