import {
    ADD_CART_REQUEST,
    ADD_CART_SUCCESS,
    ADD_CART_FAILURE,
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAILURE,
    DELETE_CART_REQUEST,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    DELETE_ALL_CART_REQUEST,
    DELETE_ALL_CART_SUCCESS,
    DELETE_ALL_CART_FAILURE,
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    POST_ORDER_FAILURE,
} from '../actions/constant'

const initialState = {
    carts: [],
    cart: {},
    cartInfo: [],
    order: null,
    loading: true,
    error: null,
};

const cartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case ADD_CART_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case ADD_CART_SUCCESS:
            state = {
                ...state,
                // cartInfo: action.payload,
                loading: false,
            };
            break;
        case GET_CART_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case GET_CART_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case GET_CART_SUCCESS:
            state = {
                ...state,
                carts: action.payload,
                loading: false,
            };
            break;
        case UPDATE_CART_REQUEST:
            state = {
                ...state,
                loading: true,
                cart: action.payload
            };
            break;
        case UPDATE_CART_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case UPDATE_CART_SUCCESS:
            state = {
                ...state,
                loading: false,
            };
            break;
        case DELETE_CART_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case DELETE_CART_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case DELETE_CART_SUCCESS:
            state = {
                ...state,
                loading: false,
            };
            break;
        case DELETE_ALL_CART_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case DELETE_ALL_CART_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case DELETE_ALL_CART_SUCCESS:
            state = {
                ...state,
                loading: false,
                carts: []
            };
            break;
        case POST_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case POST_ORDER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case POST_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                order: action.payload,
                cartInfo: state.carts,
            };
            break;
        default:
            return state
    }
    return state;
};

export default cartsReducer;
