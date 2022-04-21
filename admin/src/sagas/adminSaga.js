import {
  takeEvery,
  select,
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  GET_ADMIN_REQUEST,
  UPDATE_ADMIN_FAILURE,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
} from "../actions/constant";
import {
  getAdminFailure,
  getAdminSuccess,
  updateAdminFailure,
  updateAdminSuccess,
  deleteAdminFailure,
  deleteAdminSuccess
} from "../actions";
import axiosInstance from "../helper/axios";

const getAccount = (state) => state.admin;

const fetchAccount = async (query) => {
  const response = await axiosInstance.post(
    "/getUsersByQuery",
    {
      query,
    }
  );
  return { accounts: response.data.users, meta: response.data.meta };
};

const deleteAccount = async (payload) => {
  const { accountId } = payload;
  await axiosInstance.delete(`/adminUser/${accountId}`);
};


export function* getAccountByQuery({ payload }) {
  try {
    const accounts = yield fetchAccount(payload || 'admin');
    yield put(getAdminSuccess(accounts));
  } catch (error) {
    yield put(getAdminFailure(error));
  }
}

export function* deleteAccountGenerator({ payload }) {
  try {
    yield deleteAccount(payload);
    yield put(deleteAdminSuccess());
  } catch (error) {
    yield put(deleteAdminFailure(error));
  }
}

export function* onLoadingAccounts() {
  yield takeEvery(GET_ADMIN_REQUEST, getAccountByQuery);
}

export function* onDeleteAccount() {
  yield takeEvery(DELETE_ADMIN_REQUEST, deleteAccountGenerator);
  yield takeEvery(DELETE_ADMIN_SUCCESS, getAccountByQuery);
}

export function* adminSaga() {
  yield all([
    call(onLoadingAccounts),
    call(onDeleteAccount)
  ])
}
