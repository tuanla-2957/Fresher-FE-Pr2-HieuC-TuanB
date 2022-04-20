import {
  GET_CUSTOMER_ORDER_FAILURE,
  GET_CUSTOMER_ORDER_SUCCESS,
  GET_CUSTOMER_ORDER_REQUEST,
  SET_ORDER_PAGE_REQUEST,
  SET_ORDER_PAGE_SUCCESS,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_FAILURE,
  CANCEL_ORDER_SUCCESS,
} from "../actions/constant";
const initialState = {
  page: 1,
  perPage: 5,
  totalOrders: 0,
  orders: null,
  loading: true,
  error: null,
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CUSTOMER_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case GET_CUSTOMER_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload.orders,
        totalOrders: action.payload.totalDocs,
        loading: false,
      };
    case CANCEL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CANCEL_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case SET_ORDER_PAGE_REQUEST:
      return { ...state };

    case SET_ORDER_PAGE_SUCCESS:
      return {
        ...state,
        page: action.payload.page,
      };

    default:
      return state;
  }
};

export default productsReducer;
