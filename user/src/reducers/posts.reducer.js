import { GET_POST_REQUEST, GET_POST_FAILURE, GET_POST_SUCCESS } from '../actions/constant'
const initialState = {
    posts: [],
    query: {},
    loading: true,
    error: null,
};
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_REQUEST:
            state = {
                ...state,
                loading: true,
                query: action.payload
            };
            break;
        case GET_POST_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case GET_POST_SUCCESS:
            state = {
                ...state,
                posts: action.payload.posts,
                loading: false,
            };
            break;
        default:
            return state
    }
    return state;
};

export default postsReducer;
