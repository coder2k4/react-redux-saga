import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import Post from "./Post";
import Spinner from "./Spinner";

const FetchedPosts = () => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts
    });

    const loading = useSelector(state => state.app.loading);

    // при ветче поста забирать
    if(loading)
        return <Spinner/>;

    if (posts === undefined || !posts.length)
        return <button className={'btn btn-primary'} onClick={() => dispatch(fetchPosts())}>Загрузить</button>;

    return (
        posts.map((post) => <Post post={post} key={post.id}/>)
    );
};

export default FetchedPosts
