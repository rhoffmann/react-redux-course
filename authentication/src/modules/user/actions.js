import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  CHANGE_AUTH
`);

// action creators
export const setAuthenticated = (isAuth) => {
  return {
    type: Types.CHANGE_AUTH,
    payload: isAuth
  };
};
