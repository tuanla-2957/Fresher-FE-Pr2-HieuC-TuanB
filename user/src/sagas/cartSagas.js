import {
    all,
    call,
    put,
    takeEvery
} from "redux-saga/effects";
import {
    ADD_CART_REQUEST,
    GET_CART_REQUEST,
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS,
    DELETE_CART_REQUEST,
    DELETE_CART_SUCCESS,
    DELETE_ALL_CART_REQUEST,
    DELETE_ALL_CART_SUCCESS
} from '../actions/constant'
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
    deleteAllCartSuccess
} from '../actions/cart.action'
import axiosInstance from '../helper/axios';

const addToCart = async (payload) => {
    const { data: { data: { products } } } = await axiosInstance.post("cart", {
        ...payload,
    });
    return products
};

const fetchCart = async () => {
    const { data: { data: { products } } } = await axiosInstance.get("cart");
    return products
};

const updateToCart = async (payload) => {
    const { data: { data: { products } } } = await axiosInstance.put("cart/item/update", {
        ...payload,
    });
    return products
};


const deleteExistedCart = async (payload) => {
    const { productId } = payload;
    await axiosInstance.put(`cart/item/remove`, {
        productId: productId
    });
};

const deleteAllExistedCart = async () => {
    await axiosInstance.delete(`cart`);
};

export function* addNewCart({ payload }) {
    try {
        const cart = yield addToCart(payload);
        yield put(addCartSuccess(cart));
    } catch (error) {
        yield put(addCartFailure(error));
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
    } catch (error) {
        yield put(deleteCartFailure(error));
    }
}

export function* deleteAllCart({ payload }) {
    try {
        yield deleteAllExistedCart();
        yield put(deleteAllCartSuccess());
    } catch (error) {
        yield put(deleteAllCartFailure(error));
    }
}

export function* onAddingToCart() {
    yield takeEvery(ADD_CART_REQUEST, addNewCart);
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

export function* cartsSaga() {
    yield all([
        call(onAddingToCart),
        call(onGettingCart),
        call(onUpdateCart),
        call(onDeleteCart),
        call(onDeleteAllCart)
    ]);
}
