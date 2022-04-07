import { authConstant } from "../actions/constant";
const initialState = {
    token: null,
    user: {
        firstName: "",
        lastName: "",
        userName: "",
        dob: "",
        phone: "",
        email: "",
        picture: "",
        isMng: false,
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
            };
            break;
        case authConstant.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                error: null,
                authenticate: true,
                authenticating: false,
            };
            break;
        case authConstant.LOGIN_FAILURE:
            state = {
                ...state,
                authenticating: false,
                error: action.payload.error,
            };
            break;
        case authConstant.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case authConstant.LOGOUT_SUCCESS:
            state = {
                ...initialState,
                loading: false,
            };
            break;
        case authConstant.LOGOUT_FAILURE:
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
