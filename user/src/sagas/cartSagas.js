import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  ADD_CART_REQUEST,
  GET_CART_REQUEST,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_ALL_CART_REQUEST,
  DELETE_ALL_CART_SUCCESS,
  ADD_CART_SUCCESS,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
} from "../actions/constant";
import {
  addCartFailure,
  addCartSuccess,
  getCartFailure,
  getCartSuccess,
  updateCartFailure,
  updateCartSuccess,
  deleteCartFailure,
  deleteCartSuccess,
  deleteAllCartFailure,
  deleteAllCartSuccess,
  postOrderFailure,
  postOrderSuccess,
} from "../actions/cart.action";
import axiosInstance from "../helper/axios";
import toast from "react-hot-toast";

const addToCart = async (payload) => {
  const {
    data: {
      data: { products },
    },
  } = await axiosInstance.post("cart", {
    ...payload,
  });
  return products;
};

const fetchCart = async () => {
  const {
    data: {
      data: { products },
    },
  } = await axiosInstance.get("cart");
  return products;
};

const updateToCart = async (payload) => {
  const {
    data: {
      data: { products },
    },
  } = await axiosInstance.put("cart/item/update", {
    ...payload,
  });
  return products;
};

const deleteExistedCart = async (payload) => {
  const { productId } = payload;
  await axiosInstance.put(`cart/item/remove`, {
    productId: productId,
  });
};

const deleteAllExistedCart = async () => {
  await axiosInstance.delete(`cart`);
};

const postOrder = async (payload) => {
  const {
    data: { order },
  } = await axiosInstance.post("order/user/addOrder", {
    ...payload,
  });
  return order;
};

export function* addNewCart({ payload }) {
  try {
    const cart = yield addToCart(payload);
    yield put(addCartSuccess(cart));
    toast.success("Product was add to cart");
  } catch (error) {
    yield put(addCartFailure(error));
    toast.error("Something happens :(");
  }
}

export function* getCart() {
  try {
    const cart = yield fetchCart();
    yield put(getCartSuccess(cart));
  } catch (error) {
    yield put(getCartFailure(error));
  }
}

export function* updateCart({ payload }) {
  try {
    const cart = yield updateToCart(payload);
    yield put(updateCartSuccess(cart));
  } catch (error) {
    yield put(updateCartFailure(error));
  }
}

export function* deleteCart({ payload }) {
  try {
    yield deleteExistedCart(payload);
    yield put(deleteCartSuccess());
    toast.success("Success remote item");
  } catch (error) {
    yield put(deleteCartFailure(error));
  }
}

export function* deleteAllCart({ payload }) {
  try {
    yield deleteAllExistedCart();
    yield put(deleteAllCartSuccess());
    toast.success("Success delete your cart");
  } catch (error) {
    yield put(deleteAllCartFailure(error));
  }
}

export function* postOderCart({ payload }) {
  try {
    const order = yield postOrder(payload);
    yield put(postOrderSuccess(order));
    toast.success("Your order was received by us ^^");
  } catch (error) {
    yield put(postOrderFailure(error));
    toast.error("Something went wrong");
  }
}

export function* onAddingToCart() {
  yield takeEvery(ADD_CART_REQUEST, addNewCart);
  yield takeEvery(ADD_CART_SUCCESS, getCart);
}

export function* onGettingCart() {
  yield takeEvery(GET_CART_REQUEST, getCart);
}

export function* onUpdateCart() {
  yield takeEvery(UPDATE_CART_REQUEST, updateCart);
  yield takeEvery(UPDATE_CART_SUCCESS, getCart);
}

export function* onDeleteCart() {
  yield takeEvery(DELETE_CART_REQUEST, deleteCart);
  yield takeEvery(DELETE_CART_SUCCESS, getCart);
}

export function* onDeleteAllCart() {
  yield takeEvery(DELETE_ALL_CART_REQUEST, deleteAllCart);
}

export function* onPostOrder() {
  yield takeLatest(POST_ORDER_REQUEST, postOderCart);
  yield takeEvery(POST_ORDER_SUCCESS, deleteAllCart);
}

export function* cartsSaga() {
  yield all([
    call(onAddingToCart),
    call(onGettingCart),
    call(onUpdateCart),
    call(onDeleteCart),
    call(onDeleteAllCart),
    call(onPostOrder),
  ]);
}
