import {
  takeEvery,
  select,
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import { GET_ORDERS_REQUEST } from "../actions/constant";
import { getOrdersFailure, getOrdersSuccess } from "../actions";
import axiosInstance from "../helper/axios";

const getOrder = (state) => state.orders;

const getOrders = async () => {
  const response = await axiosInstance.get("order/admin/getCustomerOrders");
  return { orders: response.data.orders };
};

export function* getCustomerOrders({ payload }) {
  try {
    const orders = yield getOrders();
    yield put(getOrdersSuccess(orders));
  } catch (error) {
    yield put(getOrdersFailure(error));
  }
}

export function* onLoadingOrders() {
  yield takeEvery(GET_ORDERS_REQUEST, getCustomerOrders);
}

export function* ordersSaga() {
  yield all([call(onLoadingOrders)]);
}
