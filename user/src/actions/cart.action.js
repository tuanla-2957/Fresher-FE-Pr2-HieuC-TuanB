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
} from './constant'

export const getCartRequest = () => {
    return {
        type: GET_CART_REQUEST,
    }
}

export const getCartSuccess = (products) => {
    return {
        type: GET_CART_SUCCESS,
        payload: products
    }
}

export const getCartFailure = (error) => {
    return {
        type: GET_CART_FAILURE,
        payload: error
    }
}

export const addCartRequest = (cart) => {
    return {
        type: ADD_CART_REQUEST,
        payload: cart
    }
}

export const addCartSuccess = (cart) => {
    return {
        type: ADD_CART_SUCCESS,
        payload: cart
    }
}

export const addCartFailure = (error) => {
    return {
        type: ADD_CART_FAILURE,
        payload: error
    }
}

export const updateCartRequest = (cart) => {
    return {
        type: UPDATE_CART_REQUEST,
        payload: cart
    }
}

export const updateCartSuccess = (cart) => {
    return {
        type: UPDATE_CART_SUCCESS,
        payload: cart
    }
}

export const updateCartFailure = (error) => {
    return {
        type: UPDATE_CART_FAILURE,
        payload: error
    }
}

export const deleteCartRequest = (productId) => {
    return {
        type: DELETE_CART_REQUEST,
        payload: productId
    }
}

export const deleteCartSuccess = (message) => {
    return {
        type: DELETE_CART_SUCCESS,
        payload: message
    }
}

export const deleteCartFailure = (error) => {
    return {
        type: DELETE_CART_FAILURE,
        payload: error
    }
}

export const deleteAllCartRequest = () => {
    return {
        type: DELETE_ALL_CART_REQUEST,
    }
}

export const deleteAllCartSuccess = (message) => {
    return {
        type: DELETE_ALL_CART_SUCCESS,
        payload: message
    }
}

export const deleteAllCartFailure = (error) => {
    return {
        type: DELETE_ALL_CART_FAILURE,
        payload: error
    }
}
