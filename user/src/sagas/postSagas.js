import {
    all,
    call,
    put,
    takeEvery
} from "redux-saga/effects";
import { GET_POST_REQUEST } from '../actions/constant'
import { getPostFailure, getPostSuccess } from '../actions/posts.action'
import axiosInstance from '../helper/axios';

const fetchPosts = async (query) => {
    
    const response = await axiosInstance.get(
        "/post", {
            params: query
        }
    );
    return { posts: response.data.docs };
}

export function* getPosts({payload}) {
    try {
        const posts = yield fetchPosts(payload);
        yield put(getPostSuccess(posts));
    } catch (error) {
        yield put(getPostFailure(error));
    }
}

export function* onLoadingPosts() {
    yield takeEvery(GET_POST_REQUEST, getPosts);
}

export function* postsSaga() {
    yield all([
        call(onLoadingPosts),
    ]);
}

