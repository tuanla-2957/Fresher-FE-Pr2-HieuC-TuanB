import {
  GET_ADMIN_FAILURE,
  GET_ADMIN_REQUEST,
  GET_ADMIN_SUCCESS,
  GET_ADMIN_BY_ID_FAILURE,
  GET_ADMIN_BY_ID_REQUEST,
  GET_ADMIN_BY_ID_SUCCESS,
  UPDATE_ADMIN_FAILURE,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  DELETE_ADMIN_FAILURE,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
  ADD_ADMIN_FAILURE,
  ADD_ADMIN_REQUEST,
  ADD_ADMIN_SUCCESS,
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

//get by id
export const getAdminByIdRequest = (userId) => {
  return {
    type: GET_ADMIN_BY_ID_REQUEST,
    payload: userId,
  };
};

export const getAdminByIdSuccess = (account) => {
  return {
    type: GET_ADMIN_BY_ID_SUCCESS,
    payload: account,
  };
};

export const getAdminByIdFailure = (error) => {
  return {
    type: GET_ADMIN_BY_ID_FAILURE,
    payload: error,
  };
};

//add
export const addAdminRequest = (query) => {
  return {
    type: ADD_ADMIN_REQUEST,
    payload: query,
  };
};

export const addAdminSuccess = (accounts) => {
  return {
    type: ADD_ADMIN_SUCCESS,
    payload: accounts,
  };
};

export const addAdminFailure = (error) => {
  return {
    type: ADD_ADMIN_FAILURE,
    payload: error,
  };
};

//update
export const updateAdminRequest = (account) => {
  return {
    type: UPDATE_ADMIN_REQUEST,
    payload: account,
  };
};

export const updateAdminSuccess = (account) => {
  return {
    type: UPDATE_ADMIN_SUCCESS,
    payload: account,
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
