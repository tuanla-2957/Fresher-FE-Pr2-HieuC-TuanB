import { GET_PRODUCT_HOT_REQUEST, GET_PRODUCT_HOT_FAILURE, GET_PRODUCT_HOT_SUCCESS } from './constant'

export const getProductHotRequest = (query) => {
    return {
        type: GET_PRODUCT_HOT_REQUEST,
        payload:query
    }
}

export const getProductHotFailure = (error) => {
    return {
        type: GET_PRODUCT_HOT_FAILURE,
        payload:error
    }
}

export const getProductHotSuccess = (products) => {
    return {
        type: GET_PRODUCT_HOT_SUCCESS,
        payload:products
    }
}
