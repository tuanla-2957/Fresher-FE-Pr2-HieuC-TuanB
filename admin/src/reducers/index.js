import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import productsReducer from "./products.reducer";
import orderReducer from "./order.reducer";
import adminReducer from './admin.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  orders: orderReducer,
  admin: adminReducer,
});

export default rootReducer;
