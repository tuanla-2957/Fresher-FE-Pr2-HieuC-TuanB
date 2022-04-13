import {
  KEEP_LOGIN,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "./constant";

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const loginRequest = (credential) => {
  return {
    type: LOGIN_REQUEST,
    payload: credential,
  };
};

export const isUserLoggedIn = () => ({
  type: KEEP_LOGIN,
});

export const logOut = () => ({
  type: LOG_OUT,
});
