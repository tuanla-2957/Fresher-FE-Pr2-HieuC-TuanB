import {
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDER_DETAIL_FAILURE,
  GET_ORDER_DETAIL_REQUEST,
  GET_ORDER_DETAIL_SUCCESS,
  GET_SALE_BY_DAY_FAILURE,
  GET_SALE_BY_DAY_REQUEST,
  GET_SALE_BY_DAY_SUCCESS,
  GET_SALE_BY_MONTH_FAILURE,
  GET_SALE_BY_MONTH_REQUEST,
  GET_SALE_BY_MONTH_SUCCESS,
  UPDATE_ORDER_FAILURE,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_PRODUCTS_FAILURE,
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

export const getOrderDetailRequest = (value) => {
  return {
    type: GET_ORDER_DETAIL_REQUEST,
    payload: value,
  };
};

export const getOrderDetailSuccess = (value) => {
  return {
    type: GET_ORDER_DETAIL_SUCCESS,
    payload: value,
  };
};

export const getOrderDetailFailure = (error) => {
  return {
    type: GET_ORDER_DETAIL_FAILURE,
    payload: error,
  };
};

export const updateOrdersSuccess = (products) => {
  return {
    type: UPDATE_ORDER_SUCCESS,
    payload: products,
  };
};

export const updateOrdersFailure = (error) => {
  return {
    type: UPDATE_ORDER_FAILURE,
    payload: error,
  };
};

export const updateOrdresRequest = (query) => {
  return {
    type: UPDATE_ORDER_REQUEST,
    payload: query,
  };
};

export const getSalesByDaySuccess = (data) => {
  return {
    type: GET_SALE_BY_DAY_SUCCESS,
    payload: data,
  };
};

export const getSalesByDayFailure = (error) => {
  return {
    type: GET_SALE_BY_DAY_FAILURE,
    payload: error,
  };
};

export const getSalesByDayRequest = (payload) => {
  return {
    type: GET_SALE_BY_DAY_REQUEST,
    payload: payload,
  };
};

export const getSalesByMonthSuccess = (data) => {
  return {
    type: GET_SALE_BY_MONTH_SUCCESS,
    payload: data,
  };
};

export const getSalesByMonthFailure = (error) => {
  return {
    type: GET_SALE_BY_MONTH_FAILURE,
    payload: error,
  };
};

export const getSalesByMonthRequest = (payload) => {
  return {
    type: GET_SALE_BY_MONTH_REQUEST,
    payload: payload,
  };
};
