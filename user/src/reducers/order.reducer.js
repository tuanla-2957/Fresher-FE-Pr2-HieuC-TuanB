import {
  GET_CUSTOMER_ORDER_FAILURE,
  GET_CUSTOMER_ORDER_SUCCESS,
  GET_CUSTOMER_ORDER_REQUEST,
} from "../actions/constant";
const initialState = {
  page: 1,
  perPage: 5,
  orders: null,
  loading: true,
  error: null,
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_CUSTOMER_ORDER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case GET_CUSTOMER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
        loading: false,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default productsReducer;
