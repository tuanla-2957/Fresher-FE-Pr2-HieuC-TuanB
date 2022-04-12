import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "./constant";
import axios from "../helper/axios";

export const login = (user) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            const res = await axios.post("/user/login", { ...user });
            if (res.status === 200) {
                const { token, user } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { token, user },
                });
            }
        } catch (err) {
            const { error } = err.response.data;
            console.log(error);
            dispatch({
                type: LOGIN_FAILURE,
                payload: { error },
            });
        }
    };
};

export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");

        if (token) {
            const user = JSON.parse(localStorage.getItem("user"));
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token,
                    user,
                },
            });
        } else {
            dispatch({
                type: LOGIN_FAILURE,
                payload: { error: null },
            });
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT_REQUEST });
        const res = await axios.post("/admin/logout");

        if (res.status === 200) {
            localStorage.clear();
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        } else {
            dispatch({
                type: LOGOUT_FAILURE,
                payload: { error: res.data.error },
            });
        }
    };
};
