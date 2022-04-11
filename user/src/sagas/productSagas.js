import {
    all,
    call,
    put,
    takeEvery
} from "redux-saga/effects";
import { GET_PRODUCT_HOT_REQUEST } from '../actions/constant'
import { getProductHotFailure, getProductHotSuccess } from '../actions/products.action'
import axiosInstance from '../helper/axios';

const fetchHotProducts = async () => {
    const response = await axiosInstance.get(
        "/product/isHot"
    );
    return { products: response.data.products };
}

export function* getHotProducts() {
    try {
        const products = yield fetchHotProducts();
        yield put(getProductHotSuccess(products));
    } catch (error) {
        yield put(getProductHotFailure(error));
    }
}

export function* onLoadingHotProducts() {
    yield takeEvery(GET_PRODUCT_HOT_REQUEST, getHotProducts);
}

export function* productsSaga() {
    yield all([
        call(onLoadingHotProducts),
    ]);
}

