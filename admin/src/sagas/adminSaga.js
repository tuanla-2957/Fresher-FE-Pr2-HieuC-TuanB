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
  GET_ADMIN_BY_ID_REQUEST,
  ADD_ADMIN_REQUEST,
  ADD_ADMIN_SUCCESS,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
} from "../actions/constant";
import {
  getAdminFailure,
  getAdminSuccess,
  getAdminByIdFailure,
  getAdminByIdSuccess,
  addAdminFailure,
  addAdminSuccess,
  updateAdminFailure,
  updateAdminSuccess,
  deleteAdminFailure,
  deleteAdminSuccess
} from "../actions";
import axiosInstance from "../helper/axios";

const fetchAccount = async (query) => {
  const response = await axiosInstance.post(
    "/getUsersByQuery",
    {
      query,
    }
  );
  return { accounts: response.data.users, meta: response.data.meta };
};

const fetchAccountById = async (userId) => {
  const { data: { user } } = await axiosInstance.get(`/adminUser/${userId}`);
  return user
};

const deleteAccount = async (payload) => {
  const { accountId } = payload;
  await axiosInstance.delete(`/adminUser/${accountId}`);
};

const updateAccount = async (account) => {
  const res = await axiosInstance.put(
    `/adminUser/update`, {
      updateUser: account
    });
  return res
};

const addNewAccount = async (payload) => {
  await axiosInstance.post(
    `/adminUser/create`,
    {
      ...payload
    }
  );
};

export function* getAccountByQuery({ payload }) {
  try {
    const accounts = yield fetchAccount(payload || 'admin');
    yield put(getAdminSuccess(accounts));
  } catch (error) {
    yield put(getAdminFailure(error));
  }
}

export function* getAccountById({ payload }) {
  try {
    const account = yield fetchAccountById(payload);
    yield put(getAdminByIdSuccess(account));
  } catch (error) {
    yield put(getAdminByIdFailure(error));
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

export function* addAccount({ payload }) {
  try {
    yield addNewAccount(payload);
    yield put(addAdminSuccess());
  } catch (error) {
    yield put(addAdminFailure(error));
  }
}

export function* updateAccountGenerator({ payload }) {
  try {
    const account = yield updateAccount(payload);
    yield put(updateAdminSuccess(account));
  } catch (error) {
    yield put(updateAdminFailure(error));
  }
}

export function* onLoadingAccounts() {
  yield takeEvery(GET_ADMIN_REQUEST, getAccountByQuery);
}

export function* onLoadingAccountById() {
  yield takeEvery(GET_ADMIN_BY_ID_REQUEST, getAccountById);
}

export function* onDeleteAccount() {
  yield takeEvery(DELETE_ADMIN_REQUEST, deleteAccountGenerator);
  yield takeEvery(DELETE_ADMIN_SUCCESS, getAccountByQuery);
}

export function* onAddAccount() {
  yield takeEvery(ADD_ADMIN_REQUEST, addAccount);
  yield takeEvery(ADD_ADMIN_SUCCESS, getAccountByQuery);
}

export function* onUpdateAccount() {
  yield takeEvery(UPDATE_ADMIN_REQUEST, updateAccountGenerator);
}


export function* adminSaga() {
  yield all([
    call(onLoadingAccounts),
    call(onDeleteAccount),
    call(onAddAccount),
    call(onLoadingAccountById),
    call(onUpdateAccount)
  ])
}
