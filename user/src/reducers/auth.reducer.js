import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE , LOG_OUT, REGISTER_SUCCESS } from "../actions/constant";
const initialState = {
    token: null,
    user: null,
    isAuthenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
    userRegister: null
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
                userRegister: action.payload.user
            };
            break;
        case LOG_OUT:
            state = initialState;
            break;
        default: 
            return state
    }
    return state;
};

export default authReducer;
