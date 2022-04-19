import { all, call, put, takeEvery, select } from "redux-saga/effects";
import { getCustomerOrderFailure, getCustomerOrderSuccess } from "../actions";
import { GET_CUSTOMER_ORDER_REQUEST } from "../actions/constant";

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

export function* getCustomerOrder() {
  const order = yield select(getOrder);
  const { page, ...rest } = order;
  try {
    const { docs, totalDocs } = yield fetchCustomerOrder({ page, ...rest });
    yield put(getCustomerOrderSuccess({ orders: docs }));
  } catch (error) {
    yield put(getCustomerOrderFailure(error));
  }
}

export function* onLoadCustomerOrder() {
  yield takeEvery(GET_CUSTOMER_ORDER_REQUEST, getCustomerOrder);
}

export function* ordersSaga() {
  yield all([call(onLoadCustomerOrder)]);
}
