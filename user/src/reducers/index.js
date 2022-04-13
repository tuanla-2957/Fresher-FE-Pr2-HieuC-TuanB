import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import productsReducer from "./products.reducer"
import postsReducer from './posts.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    posts: postsReducer
});
export default rootReducer;
