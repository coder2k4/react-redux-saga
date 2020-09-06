import {ASYNC_CREATE_POST, SYNC_CREATE_POST} from "./types";

const initialState = {
    posts : [],
    fetchedPosts : []
};

export const postsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SYNC_CREATE_POST :
            return {...state, posts: state.posts.concat(actions.payload)};
        case ASYNC_CREATE_POST:
            return {...state, fetchedPosts: actions.payload};
        default:
            return state
    }
};