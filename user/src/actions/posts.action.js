import { GET_POST_REQUEST, GET_POST_FAILURE, GET_POST_SUCCESS } from './constant'

export const getPostRequest = (query) => {
    return {
        type: GET_POST_REQUEST,
        payload:query
    }
}

export const getPostFailure = (error) => {
    return {
        type: GET_POST_FAILURE,
        payload:error
    }
}

export const getPostSuccess = (posts) => {
    return {
        type: GET_POST_SUCCESS,
        payload:posts
    }
}
