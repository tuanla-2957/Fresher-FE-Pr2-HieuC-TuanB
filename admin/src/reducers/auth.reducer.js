import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actions/constant";

const initialState = {
  token: null,
  user: {},
  expiresIn: null,
  isAuthenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
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
        expiresIn: action.payload.expiresIn,
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
    case LOG_OUT:
      state = initialState;
      break;
  }
  return state;
};

export default authReducer;
