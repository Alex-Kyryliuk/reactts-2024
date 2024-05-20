import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../model/IPostModel";
import {postApiService} from "../../services/api.service";
import PostComponentWrapper from "./PostComponentWrapper";


const PostsComponentWrapper:FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        postApiService.getAllPosts().then(value=> setPosts(value.data))
    }, []);

    return (
        <div>
            {
                posts.map(post=> <PostComponentWrapper key={post.id} post={post}/>)
            }

        </div>
    );
};

export default PostsComponentWrapper;