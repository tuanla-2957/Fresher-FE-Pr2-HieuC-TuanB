import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  KEEP_LOGIN,
  LOG_OUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAILURE,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
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

export const loginRequest = (user) => {
  return {
    type: LOGIN_REQUEST,
    payload: user,
  };
};

export const isUserLoggedIn = () => ({
  type: KEEP_LOGIN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    payload: error,
  };
};

export const registerRequest = (user) => {
  return {
    type: REGISTER_REQUEST,
    payload: user,
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  };
};

export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};

export const updateUserRequest = (user) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: user,
  };
};

export const changePasswordSuccess = (value) => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: value,
  };
};

export const changePasswordFailure = (error) => {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    payload: error,
  };
};

export const changePasswordRequest = (value) => {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    payload: value,
  };
};
