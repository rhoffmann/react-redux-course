import axios from 'axios';
import { createTypes } from 'reduxsauce';

const API_URL = 'http://localhost:3090';

export const Types = createTypes(`
  USER_AUTH
  USER_AUTH_ERROR
  USER_UNAUTH
  USER_SIGNUP
`);

const api = axios.create({
  baseURL: API_URL,
  timeout: 2000
});

export function authError(error) {
  return {
    type: Types.USER_AUTH_ERROR,
    payload: error
  }
}

function handleTokenResponse(dispatch) {
  return function(response) {
    console.log(response);
    const token = response.data.token;

    dispatch({ type: Types.USER_AUTH });
    localStorage.setItem('token', token);

    return token;
  }
}

// action creators
export const signInUser = ({ email, password }) =>
  async (dispatch) => {
    return api.post('/signin', { email, password })
      .then(handleTokenResponse(dispatch))
      .catch(e => {
        dispatch(authError('Bad Login Info, please try again'));
        throw e;
      });
  };

export const signUpUser = ({ email, password }) => (dispatch) => {
  return api.post('/signup', { email, password })
    .then(handleTokenResponse(dispatch))
    .catch(error => {
      const errorMessage = error.response.data.error;
      dispatch(authError(errorMessage));
      throw error;
    });
};



export const signOutUser = () => {
  localStorage.removeItem('token');
  return { type: Types.USER_UNAUTH };
};
