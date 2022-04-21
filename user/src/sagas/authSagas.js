import {
  takeEvery,
  all,
  call,
  select,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  KEEP_LOGIN,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_USER_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  LOG_OUT,
  CHANGE_PASSWORD_SUCCESS,
} from "../actions/constant";
import {
  loginSuccess,
  loginFailure,
  registerFailure,
  registerSuccess,
  updateUserSuccess,
  updateUserFailure,
  changePasswordSuccess,
  changePasswordFailure,
  logOut,
} from "../actions/auth.action";
import axiosInstance from "../helper/axios";
import toast from "react-hot-toast";

const getUser = (state) => state.auth;

const logIn = async (userInfo) => {
  const {
    data: { token, user },
  } = await axiosInstance.post("/user/login", {
    ...userInfo,
  });
  return { token, user };
};

const register = async (user) => {
  await axiosInstance.post("/user/register", {
    ...user,
  });
  return {
    user: {
      email: user.email,
      password: user.password,
    },
  };
};

const updateUser = async (payload) => {
  const response = await axiosInstance.put("/user/update", payload);
  return { user: response.data.data };
};

const changePassword = async (payload) => {
  await axiosInstance.patch("/user/changePassword", { payload });
};

export function* logInGenerator({ payload: infoUser }) {
  const user = yield select(getUser);
  const { userRegister } = user;
  try {
    const user = yield logIn(userRegister ? userRegister : infoUser);
    yield put(loginSuccess(user));
    toast.success("Loged in!");
    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user.user));
  } catch (error) {
    const { response } = error;
    yield put(loginFailure(error));
    toast.error(`${response.data.message}`);
  }
}

export function* registerGenerator({ payload: infoUser }) {
  try {
    const user = yield register(infoUser);
    yield put(registerSuccess(user));
    toast.success("Success create account!, you are signin");
  } catch (error) {
    const { response } = error;
    console.log(response);
    yield put(registerFailure(error));
    toast.error(`${response.data.error}`);
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

export function* updateUserInfomation({ payload }) {
  try {
    const { user } = yield updateUser(payload);
    localStorage.setItem("user", JSON.stringify(user));
    yield put(updateUserSuccess({ user }));
    toast.success("Update profile successfull");
  } catch (error) {
    yield put(updateUserFailure(error));
    toast.error("Some problem happen when updating, try again");
  }
}

export function* changeUserPassword({ payload }) {
  try {
    yield changePassword(payload);
    yield put(changePasswordSuccess());
    toast.success("Update Password successfull");
  } catch (error) {
    const errorMsg = error.response.data.message;
    yield put(changePasswordFailure({ error: errorMsg }));
    toast.error(`${error.response.data.error}`);
  }
}

export function* logoutRequest() {
  localStorage.clear();
  yield put(logOut());
  window.location.href = "/";
}

export function* onLogInStart() {
  yield takeLatest(LOGIN_REQUEST, logInGenerator);
}

export function* onRegisterStart() {
  yield takeLatest(REGISTER_REQUEST, registerGenerator);
  yield takeEvery(REGISTER_SUCCESS, logInGenerator);
}

export function* isUserLoggedIn() {
  yield takeEvery(KEEP_LOGIN, isUserLoggedInGenerator);
}

export function* onUpdateUser() {
  yield takeEvery(UPDATE_USER_REQUEST, updateUserInfomation);
}

export function* onChangePassword() {
  yield takeEvery(CHANGE_PASSWORD_REQUEST, changeUserPassword);
  yield takeEvery(CHANGE_PASSWORD_SUCCESS, logoutRequest);
}

export function* authSagas() {
  yield all([
    call(onLogInStart),
    call(isUserLoggedIn),
    call(onRegisterStart),
    call(onUpdateUser),
    call(onChangePassword),
  ]);
}
