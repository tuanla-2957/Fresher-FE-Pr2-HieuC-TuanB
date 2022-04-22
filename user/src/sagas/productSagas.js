import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";
import {
  GET_PRODUCT_HOT_REQUEST,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_RELATED_PRODUCTS_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS
} from "../actions/constant";
import {
  getProductHotFailure,
  getProductHotSuccess,
  getProductFailure,
  getProductSuccess,
  getProductByIdSuccess,
  getProductByIdFailure,
  getRelatedProductsSuccess,
  getRelatedProductsFailure,
} from "../actions/products.action";
import axiosInstance from "../helper/axios";

const getProduct = (state) => state.products;

const fetchHotProducts = async () => {
  const response = await axiosInstance.get("/product/isHot");
  return { products: response.data.products };
};

const fetchProducts = async (query, tags) => {
  const tagParams = tags && tags.map((tag) => `&tag=${tag}`).join("");
  const response = await axiosInstance.get(`/product?${tagParams}`, {
    params: query,
  });
  return {
    products: response.data.docs,
    pagination: {
      _page: response.data.page,
      _limit: response.data.limit,
      _totalRows: response.data.totalDocs,
    },
  };
};

const fetchProductById = async (productId) => {
  const {
    data: { product },
  } = await axiosInstance.get(`product/${productId}`);
  return product;
};

const fetchRelatedProducts = async (payload) => {
  const tagParams = payload.map((type) => `&tag=${type}`).join("");
  const response = await axiosInstance.get(`/product?${tagParams}`, {
    params: {
      page: 1,
      perPage: 3,
    },
  });
  return response.data.docs;
};

export function* getHotProducts() {
  try {
    const products = yield fetchHotProducts();
    yield put(getProductHotSuccess(products));
  } catch (error) {
    yield put(getProductHotFailure(error));
  }
}

export function* getProducts({ payload }) {
  const { selectTags }  = yield select(getProduct);
  try {
    const data = yield fetchProducts(payload, selectTags);
    yield put(getProductSuccess(data));
  } catch (error) {
    yield put(getProductFailure(error));
  }
}

export function* getProductById({ payload }) {
  try {
    const product = yield fetchProductById(payload);
    yield put(getProductByIdSuccess(product));
  } catch (error) {
    yield put(getProductByIdFailure(error));
  }
}

export function* getRelatedProducts({ payload }) {
  const product = yield select(getProduct);
  const { relatedTags, ...rest } = product;
  try {
    const relatedProducts = yield fetchRelatedProducts(relatedTags);
    yield put(getRelatedProductsSuccess({ relatedProducts }));
  } catch (error) {
    yield put(getRelatedProductsFailure(error));
  }
}

export function* onLoadingHotProducts() {
  yield takeEvery(GET_PRODUCT_HOT_REQUEST, getHotProducts);
}

export function* onLoadingProducts() {
  yield takeEvery(GET_PRODUCT_REQUEST, getProducts);
}

export function* onLoadingProductById() {
  yield takeLatest(GET_PRODUCT_BY_ID_REQUEST, getProductById);
  yield takeLatest(GET_PRODUCT_BY_ID_SUCCESS, getRelatedProducts);
}

export function* onLoadingRelatedProducts() {
  yield takeLatest(GET_RELATED_PRODUCTS_REQUEST, getRelatedProducts);
}

export function* productsSaga() {
  yield all([
    call(onLoadingHotProducts),
    call(onLoadingProducts),
    call(onLoadingProductById),
  ]);
}
