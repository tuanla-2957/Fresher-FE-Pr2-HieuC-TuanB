import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
  REGISTER_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
} from "../actions/constant";
const initialState = {
  token: null,
  user: null,
  isAuthenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
  userRegister: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
        isAuthenticate: true,
        authenticating: false,
      };
      break;
    case LOGIN_FAILURE:
      state = {
        ...state,
        authenticating: false,
        error: action.payload.error,
      };
      break;
    case REGISTER_SUCCESS:
      state = {
        ...state,
        userRegister: action.payload.user,
      };
      break;

    case UPDATE_USER_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        loading: false,
      };
      break;
    case UPDATE_USER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case UPDATE_USER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case CHANGE_PASSWORD_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: null,
      };
      break;
    case CHANGE_PASSWORD_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case CHANGE_PASSWORD_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case LOG_OUT:
      state = initialState;
      break;
    default:
      return state;
  }
  return state;
};

export default authReducer;
