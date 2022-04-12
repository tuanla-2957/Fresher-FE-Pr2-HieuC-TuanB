import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE , LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../actions/constant";
const initialState = {
    token: null,
    user: null,
    authenticate: false,
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
                authenticate: true,
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
        case LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case LOGOUT_SUCCESS:
            state = {
                ...initialState,
                loading: false,
            };
            break;
        case LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        default: 
            return false
    }
    return state;
};

export default authReducer;
