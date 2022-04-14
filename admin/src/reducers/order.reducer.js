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
} from "../actions/constant";

const initialState = {
  orders: [],
  orderDetails: null,
  loading: true,
  error: null,
  salesByMonth: [],
  loadSalesByMonth: true,
  salesByDay: [],
  loadSalesByDay: true,
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
    // UPDATE
    case UPDATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    // CHART
    case GET_SALE_BY_DAY_REQUEST:
      return {
        ...state,
        loadSalesByDay: true,
      };
    case GET_SALE_BY_DAY_SUCCESS:
      return {
        ...state,
        salesByDay: action.payload.salesByDay,
        loadSalesByDay: false,
      };
    case GET_SALE_BY_DAY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loadSalesByDay: false,
      };

    case GET_SALE_BY_MONTH_REQUEST:
      return {
        ...state,
        loadSalesByMonth: true,
      };
    case GET_SALE_BY_MONTH_SUCCESS:
      return {
        ...state,
        salesByMonth: action.payload.salesByMonth,
        loadSalesByMonth: false,
      };
    case GET_SALE_BY_MONTH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loadSalesByMonth: false,
      };

    default:
      return state;
  }
};
