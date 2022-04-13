import {
  takeEvery,
  select,
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  GET_ORDERS_REQUEST,
  GET_ORDER_DETAIL_REQUEST,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
} from "../actions/constant";
import {
  getOrderDetailFailure,
  getOrderDetailSuccess,
  getOrdersFailure,
  getOrdersSuccess,
  updateOrdersFailure,
  updateOrdersSuccess,
} from "../actions";
import axiosInstance from "../helper/axios";

const getOrder = (state) => state.orders;

const getOrders = async () => {
  const response = await axiosInstance.get("order/admin/getCustomerOrders");
  return { orders: response.data.orders };
};

const getOrderById = async (orderId) => {
  const response = await axiosInstance.get(`order/admin/${orderId}`);
  return { orderDetails: response.data.order };
};

const updateOrder = async (payload) => {
  await axiosInstance.put("order/admin/update", payload);
};

export function* getCustomerOrders({ payload }) {
  try {
    const orders = yield getOrders();
    yield put(getOrdersSuccess(orders));
  } catch (error) {
    yield put(getOrdersFailure(error));
  }
}

export function* getOrderDetails({ payload: orderId }) {
  const order = yield select(getOrder);
  const { orderDetails } = order;
  const orderIdParams = orderId || orderDetails._id;
  try {
    const orderDetails = yield getOrderById(orderIdParams);
    yield put(getOrderDetailSuccess(orderDetails));
  } catch (error) {
    yield put(getOrderDetailFailure(error));
  }
}

export function* updateCustomerOrder({ payload }) {
  try {
    yield updateOrder(payload);
    yield put(updateOrdersSuccess());
  } catch (error) {
    yield put(updateOrdersFailure(error));
  }
}

export function* onLoadingOrders() {
  yield takeEvery(GET_ORDERS_REQUEST, getCustomerOrders);
}

export function* onLoadingOrderDetails() {
  yield takeEvery(GET_ORDER_DETAIL_REQUEST, getOrderDetails);
}

export function* onUpdateOrder() {
  yield takeEvery(UPDATE_ORDER_REQUEST, updateCustomerOrder);
  yield takeEvery(UPDATE_ORDER_SUCCESS, getOrderDetails);
}

export function* ordersSaga() {
  yield all([
    call(onLoadingOrders),
    call(onLoadingOrderDetails),
    call(onUpdateOrder),
  ]);
}
