import { all, call } from "redux-saga/effects";
import { authSagas } from "./authSagas";
import { productsSaga } from "./productSagas";
import { postsSaga } from "./postSagas";
import { ordersSaga } from "./orderSagas";

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(productsSaga),
    call(postsSaga),
    call(ordersSaga),
  ]);
}
