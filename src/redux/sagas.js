import {takeEvery, put, call} from "redux-saga/effects";
import {ASYNC_CREATE_POST, REQUEST_POSTS} from "./types";
import {hideLoader, showAlert, showLoader} from "./actions";

export function *SagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWatcher)
}

function* sagaWatcher() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchposts);
        yield put({type: ASYNC_CREATE_POST, payload});
        yield put(hideLoader());
    }
    catch (e) {
        yield put(showAlert('С сервером возникла проблема!'));
        yield put(hideLoader());
    }

}


async function fetchposts() {
    const response = await fetch('ttps://jsonplaceholder.typicode.com/posts');
    return await response.json()
}