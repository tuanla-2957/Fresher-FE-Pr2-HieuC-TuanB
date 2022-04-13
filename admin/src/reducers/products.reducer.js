import {
  ADD_PRODUCTS_FAILURE,
  ADD_PRODUCTS_REQUEST,
  ADD_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCTS_FAILURE,
  UPDATE_PRODUCTS_REQUEST,
  UPDATE_PRODUCTS_SUCCESS,
} from "../actions/constant";

const initialState = {
  products: [],
  selectedProduct: {},
  query: "",
  loading: true,
  loadingSpec: true,
  selectedProduct: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
        loading: false,
      };
      break;
    case GET_PRODUCTS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;

    case GET_PRODUCT_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_PRODUCT_BY_ID_SUCCESS:
      state = {
        ...state,
        selectedProduct: action.payload.product,
        loading: false,
      };
      break;
    case GET_PRODUCT_BY_ID_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    //  ADD
    case ADD_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case ADD_PRODUCTS_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case ADD_PRODUCTS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    //  UPDATE
    case UPDATE_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case UPDATE_PRODUCTS_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case UPDATE_PRODUCTS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;

    // DELETE
    case DELETE_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case DELETE_PRODUCTS_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case DELETE_PRODUCTS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
  }
  return state;
};
