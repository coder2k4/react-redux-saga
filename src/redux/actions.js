import {
    ASYNC_CREATE_POST,
    HIDE_ALERT,
    HIDE_LOADER,
    REQUEST_POSTS,
    SHOW_ALERT,
    SHOW_LOADER,
    SYNC_CREATE_POST
} from "./types";

export function createPost(post) {
    return {
        type: SYNC_CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return { type: REQUEST_POSTS}
    // return async (dispatch) => {
    //     dispatch(showLoader());
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const json = await response.json();
    //     dispatch({ type: ASYNC_CREATE_POST, payload: json});
    //     dispatch(hideLoader());
    // }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}


export function showAlert(text) {

    return dispatch => {
        dispatch ({
            type: SHOW_ALERT,
            payload: text
        });

        setTimeout(()=> {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}
