import {
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "./constant";

export const getOrdersSuccess = (products) => {
  return {
    type: GET_ORDERS_SUCCESS,
    payload: products,
  };
};

export const getOrdersFailure = (error) => {
  return {
    type: GET_ORDERS_FAILURE,
    payload: error,
  };
};

export const getOrdresRequest = (query) => {
  return {
    type: GET_ORDERS_REQUEST,
    payload: query,
  };
};
