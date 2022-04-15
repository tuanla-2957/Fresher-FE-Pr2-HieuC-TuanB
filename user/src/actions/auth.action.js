import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, KEEP_LOGIN, LOG_OUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./constant";

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    };
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    };
};

export const loginRequest = (user) => {
    return {
        type: LOGIN_REQUEST,
        payload: user,
    };
};

export const isUserLoggedIn = () => ({
    type: KEEP_LOGIN,
});

export const logOut = () => ({
    type: LOG_OUT,
});

export const registerSuccess = (user) => {
    return {
        type: REGISTER_SUCCESS,
        payload: user,
    };
};

export const registerFailure = (error) => {
    return {
        type: REGISTER_FAILURE,
        payload: error,
    };
};

export const registerRequest = (user) => {
    return {
        type: REGISTER_REQUEST,
        payload: user,
    };
};
