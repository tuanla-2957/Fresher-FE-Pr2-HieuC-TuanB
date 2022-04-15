import { GET_PRODUCT_HOT_REQUEST, GET_PRODUCT_HOT_FAILURE, GET_PRODUCT_HOT_SUCCESS, GET_PRODUCT_REQUEST, GET_PRODUCT_FAILURE, GET_PRODUCT_SUCCESS, CHANGE_FILTER_PRODUCT, SELECT_PRODUCT_TAG } from './constant'

export const getProductHotRequest = (query) => {
    return {
        type: GET_PRODUCT_HOT_REQUEST,
        payload: query
    }
}

export const getProductHotFailure = (error) => {
    return {
        type: GET_PRODUCT_HOT_FAILURE,
        payload: error
    }
}

export const getProductHotSuccess = (products) => {
    return {
        type: GET_PRODUCT_HOT_SUCCESS,
        payload: products
    }
}

export const getProductRequest = (query) => {
    return {
        type: GET_PRODUCT_REQUEST,
        payload: query
    }
}

export const getProductFailure = (error) => {
    return {
        type: GET_PRODUCT_FAILURE,
        payload: error
    }
}

export const getProductSuccess = (data) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: data
    }
}

export const changeFilterProduct = (params) => {
    return {
        type: CHANGE_FILTER_PRODUCT,
        payload: params
    }
}

export const selectProductTag = (tags) => {
    return {
        type: SELECT_PRODUCT_TAG,
        payload: tags
    }
}
