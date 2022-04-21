import {
  GET_ADMIN_FAILURE,
  GET_ADMIN_REQUEST,
  GET_ADMIN_SUCCESS,
  UPDATE_ADMIN_FAILURE,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  DELETE_ADMIN_FAILURE,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
} from "../actions/constant";

const initialState = {
  accounts: [],
  selectedProduct: {},
  query: "",
  loading: true,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_REQUEST:
      state = {
        ...state,
        loading: true
      };
      break;
    case GET_ADMIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case GET_ADMIN_SUCCESS:
      state = {
        ...state,
        accounts: action.payload.accounts,
        loading: false,
      };
      break;
    case UPDATE_ADMIN_REQUEST:
      state = {
        ...state,
        loading: true
      };
      break;
    case UPDATE_ADMIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case UPDATE_ADMIN_SUCCESS:
      state = {
        ...state,
        accounts: action.payload,
        loading: false,
      };
      break;
    case DELETE_ADMIN_REQUEST:
      state = {
        ...state,
        loading: true
      };
      break;
    case DELETE_ADMIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case DELETE_ADMIN_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    default:
      return state
  }
  return state;
};

export default adminReducer;
