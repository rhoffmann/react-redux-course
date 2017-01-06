import axios from 'axios';
import { createTypes } from 'reduxsauce';

const API_URL = 'http://localhost:3090';

export const Types = createTypes(`
  USER_AUTH
  USER_AUTH_ERROR
  USER_UNAUTH
  USER_SIGNUP

  FETCH_MESSAGE
`);

const api = axios.create({
  baseURL: API_URL,
  timeout: 2000
});


function handleTokenResponse(dispatch) {
  return function(response) {
    const token = response.data.token;

    dispatch({ type: Types.USER_AUTH });
    localStorage.setItem('token', token);

    return token;
  }
}




// action creators
export const signInUser = ({ email, password }) => (dispatch) => {
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
      throw errorMessage;
    });
};

export function authError(error) {
  return {
    type: Types.USER_AUTH_ERROR,
    payload: error
  }
}

export const signOutUser = () => {
  localStorage.removeItem('token');
  return { type: Types.USER_UNAUTH };
};


export function fetchMessage() {
  return function(dispatch) {
    api.get('/', {
      headers: {
        'authorization': localStorage.getItem('token')
      }
    })
      .then(response => {
        dispatch({
          type: Types.FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}
