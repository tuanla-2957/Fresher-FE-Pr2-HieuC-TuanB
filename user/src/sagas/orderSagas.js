import { all, call, put, takeEvery, select } from "redux-saga/effects";
import {
  cancelOrderFailure,
  cancelOrderSuccess,
  getCustomerOrderFailure,
  getCustomerOrderSuccess,
  setOrderPageSuccess,
} from "../actions";
import {
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  GET_CUSTOMER_ORDER_REQUEST,
  SET_ORDER_PAGE_REQUEST,
  SET_ORDER_PAGE_SUCCESS,
} from "../actions/constant";

import axiosInstance from "../helper/axios";

const getOrder = (state) => state.orders;

const fetchCustomerOrder = async ({ page, perPage }) => {
  const response = await axiosInstance.get("/order/user/getOrders", {
    params: {
      page,
      perPage,
    },
  });
  return response.data;
};

const cancelOrder = async ({ orderId }) => {
  await axiosInstance.put("/order/user/cancelOrder", {
    orderId,
  });
};

export function* getCustomerOrder({ payload }) {
  const order = yield select(getOrder);
  const { page, ...rest } = order;
  try {
    const { docs, totalDocs } = yield fetchCustomerOrder({
      page,
      ...rest,
    });
    yield put(getCustomerOrderSuccess({ orders: docs, totalDocs }));
  } catch (error) {
    yield put(getCustomerOrderFailure(error));
  }
}

export function* setOrderByPage({ payload }) {
  const { page } = payload;
  yield put(setOrderPageSuccess({ page }));
}

export function* onLoadCustomerOrder() {
  yield takeEvery(GET_CUSTOMER_ORDER_REQUEST, getCustomerOrder);
}

export function* cancelCustomerOrder({ payload }) {
  try {
    yield cancelOrder(payload);
    yield put(cancelOrderSuccess());
  } catch (error) {
    yield put(cancelOrderFailure(error));
  }
}

export function* onSetOrderPage() {
  yield takeEvery(SET_ORDER_PAGE_REQUEST, setOrderByPage);
  yield takeEvery(SET_ORDER_PAGE_SUCCESS, getCustomerOrder);
}

export function* onCancelOrder() {
  yield takeEvery(CANCEL_ORDER_REQUEST, cancelCustomerOrder);
  yield takeEvery(CANCEL_ORDER_SUCCESS, getCustomerOrder);
}

export function* ordersSaga() {
  yield all([
    call(onLoadCustomerOrder),
    call(onSetOrderPage),
    call(onCancelOrder),
  ]);
}
