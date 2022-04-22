import {
  GET_PRODUCT_HOT_REQUEST,
  GET_PRODUCT_HOT_FAILURE,
  GET_PRODUCT_HOT_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_FAILURE,
  GET_PRODUCT_SUCCESS,
  CHANGE_FILTER_PRODUCT,
  SELECT_PRODUCT_TAG,
  GET_RELATED_PRODUCTS_REQUEST,
  GET_RELATED_PRODUCTS_SUCCESS,
  GET_RELATED_PRODUCTS_FAILURE,
} from "./constant";

export const getProductHotRequest = (query) => {
  return {
    type: GET_PRODUCT_HOT_REQUEST,
    payload: query,
  };
};

export const getProductHotFailure = (error) => {
  return {
    type: GET_PRODUCT_HOT_FAILURE,
    payload: error,
  };
};

export const getProductHotSuccess = (products) => {
  return {
    type: GET_PRODUCT_HOT_SUCCESS,
    payload: products,
  };
};

export const getProductRequest = (query) => {
  return {
    type: GET_PRODUCT_REQUEST,
    payload: query,
  };
};

export const getProductFailure = (error) => {
  return {
    type: GET_PRODUCT_FAILURE,
    payload: error,
  };
};

export const getProductSuccess = (data) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const getProductByIdRequest = (query) => {
  return {
    type: GET_PRODUCT_BY_ID_REQUEST,
    payload: query,
  };
};

export const getProductByIdSuccess = (product) => {
  return {
    type: GET_PRODUCT_BY_ID_SUCCESS,
    payload: product,
  };
};

export const getProductByIdFailure = (error) => {
  return {
    type: GET_PRODUCT_BY_ID_FAILURE,
    payload: error,
  };
};

export const changeFilterProduct = (params) => {
  return {
    type: CHANGE_FILTER_PRODUCT,
    payload: params,
  };
};

export const selectProductTag = (tags) => {
  return {
    type: SELECT_PRODUCT_TAG,
    payload: tags,
  };
};

export const getRelatedProductsRequest = (query) => {
  return {
    type: GET_RELATED_PRODUCTS_REQUEST,
    payload: query,
  };
};

export const getRelatedProductsSuccess = (product) => {
  return {
    type: GET_RELATED_PRODUCTS_SUCCESS,
    payload: product,
  };
};

export const getRelatedProductsFailure = (error) => {
  return {
    type: GET_RELATED_PRODUCTS_FAILURE,
    payload: error,
  };
};
