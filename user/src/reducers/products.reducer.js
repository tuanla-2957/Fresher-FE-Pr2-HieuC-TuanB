import { GET_PRODUCT_HOT_REQUEST, GET_PRODUCT_HOT_FAILURE, GET_PRODUCT_HOT_SUCCESS } from '../actions/constant'
const initialState = {
    products: [],
    hotProducts: [],
    query: {},
    loading: true,
    error: null,
};
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_HOT_REQUEST:
            state = {
                ...state,
                loading: true,
                query: action.payload
            };
            break;
        case GET_PRODUCT_HOT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case GET_PRODUCT_HOT_SUCCESS:
            state = {
                ...state,
                hotProducts: action.payload.products,
                loading: false,
            };
            break;
        default:
            return state
    }
    return state;
};

export default productsReducer;
