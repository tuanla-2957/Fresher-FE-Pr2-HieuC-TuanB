import {
  GET_CUSTOMER_ORDER_FAILURE,
  GET_CUSTOMER_ORDER_REQUEST,
  GET_CUSTOMER_ORDER_SUCCESS,
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
