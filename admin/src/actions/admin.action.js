import {
  GET_ADMIN_FAILURE,
  GET_ADMIN_REQUEST,
  GET_ADMIN_SUCCESS,
  UPDATE_ADMIN_FAILURE,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  DELETE_ADMIN_FAILURE,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
} from './constant'

//get
export const getAdminRequest = (query) => {
  return {
    type: GET_ADMIN_REQUEST,
    payload: query,
  };
};

export const getAdminSuccess = (accounts) => {
  return {
    type: GET_ADMIN_SUCCESS,
    payload: accounts,
  };
};

export const getAdminFailure = (error) => {
  return {
    type: GET_ADMIN_FAILURE,
    payload: error,
  };
};

//update
export const updateAdminRequest = (query) => {
  return {
    type: UPDATE_ADMIN_REQUEST,
    payload: query,
  };
};

export const updateAdminSuccess = (accounts) => {
  return {
    type: UPDATE_ADMIN_SUCCESS,
    payload: accounts,
  };
};

export const updateAdminFailure = (error) => {
  return {
    type: UPDATE_ADMIN_FAILURE,
    payload: error,
  };
};

//delete
export const deleteAdminRequest = (id) => {
  return {
    type: DELETE_ADMIN_REQUEST,
    payload: id,
  };
};

export const deleteAdminSuccess = (accounts) => {
  return {
    type: DELETE_ADMIN_SUCCESS,
    payload: accounts,
  };
};

export const deleteAdminFailure = (error) => {
  return {
    type: DELETE_ADMIN_FAILURE,
    payload: error,
  };
};
