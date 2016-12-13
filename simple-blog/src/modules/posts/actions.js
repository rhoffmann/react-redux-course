import { createTypes } from 'reduxsauce';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=richardhoffmann';

const createApiUrl = (endpoint) => `${ROOT_URL}${endpoint}${API_KEY}`;

export const Types = createTypes(`
  FETCH_POSTS
`);

export const fetchPosts = (key) => {
  const request = axios.get(createApiUrl('/posts'));

  return {
    type: Types.FETCH_POSTS,
    payload: request
  };
}
