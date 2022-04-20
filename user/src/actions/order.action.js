import {
  CANCEL_ORDER_FAILURE,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  GET_CUSTOMER_ORDER_FAILURE,
  GET_CUSTOMER_ORDER_REQUEST,
  GET_CUSTOMER_ORDER_SUCCESS,
  SET_ORDER_PAGE_REQUEST,
  SET_ORDER_PAGE_SUCCESS,
} from "./constant";

export const getCustomerOrderRequest = (query) => {
  return {
    type: GET_CUSTOMER_ORDER_REQUEST,
    payload: query,
  };
};

export const getCustomerOrderFailure = (error) => {
  return {
    type: GET_CUSTOMER_ORDER_FAILURE,
    payload: error,
  };
};

export const getCustomerOrderSuccess = (products) => {
  return {
    type: GET_CUSTOMER_ORDER_SUCCESS,
    payload: products,
  };
};

export const setOrderPageRequest = (query) => {
  return {
    type: SET_ORDER_PAGE_REQUEST,
    payload: query,
  };
};

export const setOrderPageSuccess = (page) => {
  return {
    type: SET_ORDER_PAGE_SUCCESS,
    payload: page,
  };
};

export const cancelOrderRequest = (query) => {
  return {
    type: CANCEL_ORDER_REQUEST,
    payload: query,
  };
};

export const cancelOrderFailure = (error) => {
  return {
    type: CANCEL_ORDER_FAILURE,
    payload: error,
  };
};

export const cancelOrderSuccess = (orders) => {
  return {
    type: CANCEL_ORDER_SUCCESS,
    payload: orders,
  };
};
