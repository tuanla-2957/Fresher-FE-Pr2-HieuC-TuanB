import {
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDER_DETAIL_FAILURE,
  GET_ORDER_DETAIL_REQUEST,
  GET_ORDER_DETAIL_SUCCESS,
} from "../actions/constant";

const initialState = {
  orders: [],
  orderDetails: {},
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload.orders,
        loading: false,
      };
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    // DETAILS
    case GET_ORDER_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        orderDetails: action.payload.orderDetails,
        loading: false,
      };
    case GET_ORDER_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};
