import { all, call } from "redux-saga/effects";
import { authSagas } from "./authSagas";
import { productsSaga } from "./productSagas";
import { postsSaga } from "./postSagas";
import { ordersSaga } from "./orderSagas";
import { cartsSaga } from './cartSagas';

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(productsSaga),
    call(postsSaga),
    call(ordersSaga),
    call(cartsSaga)
  ]);
}
