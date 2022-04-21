import { all, call } from "redux-saga/effects";

import { authSagas } from "./authSagas";
import { productsSaga } from "./productsSaga";
import { ordersSaga } from "./orderSaga";
import { adminSaga } from './adminSaga';

export default function* rootSaga() {
  yield all([call(authSagas), call(productsSaga), call(ordersSaga), call(adminSaga)]);
}
