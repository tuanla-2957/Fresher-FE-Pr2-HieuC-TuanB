import {
    takeEvery,
    all,
    call,
    select,
    put,
    takeLatest,
} from "redux-saga/effects";
import { LOGIN_REQUEST, KEEP_LOGIN, REGISTER_REQUEST, REGISTER_SUCCESS } from '../actions/constant';
import { loginSuccess, loginFailure, registerFailure, registerSuccess } from "../actions/auth.action";
import axiosInstance from "../helper/axios";

const getUser = (state) => state.auth;

const logIn = async (user) => {
    const response = await axiosInstance.post("/user/login", {
        ...user,
    });
    return { token: response.data.token, user: response.data.user };
};

const register = async (user) => {
    const response = await axiosInstance.post("/user/register", {
        ...user,
    });
    return {
        user: {
            email: user.email,
            password: user.password
        }
    };
}

export function* logInGenerator({ payload: infoUser }) {
    const user = yield select(getUser);
    const { userRegister } = user;
    try {
        const user = yield logIn(userRegister ? userRegister : infoUser);
        yield put(loginSuccess(user));
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user.user));
    } catch (error) {
        yield put(loginFailure(error));
    }
}

export function* registerGenerator({ payload: infoUser }) {
    try {
        const user = yield register(infoUser);
        console.log("user Saga", user)
        yield put(registerSuccess(user));
    } catch (error) {
        yield put(registerFailure(error));
    }
}

export function* isUserLoggedInGenerator() {
    const token = localStorage.getItem("token");
    if (token) {
        const user = JSON.parse(localStorage.getItem("user"));
        yield put(loginSuccess({ token, user }));
    } else {
        yield put(loginFailure({ error: "Login failed" }));
    }
}

export function* onLogInStart() {
    yield takeLatest(LOGIN_REQUEST, logInGenerator);
}

export function* onRegisterStart() {
    yield takeLatest(REGISTER_REQUEST, registerGenerator);
    yield takeEvery(REGISTER_SUCCESS, logInGenerator)
}

export function* isUserLoggedIn() {
    yield takeEvery(KEEP_LOGIN, isUserLoggedInGenerator);
}


export function* authSagas() {
    yield all([call(onLogInStart), call(isUserLoggedIn), call(onRegisterStart)]);
}
