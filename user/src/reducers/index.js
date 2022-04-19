import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import productsReducer from "./products.reducer";
import postsReducer from "./posts.reducer";
import ordersReducer from "./order.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  posts: postsReducer,
  orders: ordersReducer,
});
export default rootReducer;
