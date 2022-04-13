import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import productsReducer from "./products.reducer";
import orderReducer from "./order.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  orders: orderReducer,
});

export default rootReducer;
