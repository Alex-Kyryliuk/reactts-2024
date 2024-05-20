import React from 'react';
import PostsComponentWrapper from "../components/posts/PostsComponentWrapper";
import {Outlet} from "react-router-dom";

const PostsPageWrapper = () => {
    return (
        <div>
            <PostsComponentWrapper/>
            <Outlet/>
        </div>
    );
};

export default PostsPageWrapper;