import React, {FC} from 'react';
import {PostModel} from "../../models/PostModel";
import PostComponent from '../post/PostComponent'

interface IProps {
    posts: PostModel[]
}

type IPropsType = IProps & {children?: React.ReactNode}

const PostsComponent:FC<IPropsType>= ({posts}) => {
    return (
        <div>
            {
                posts.map((post) => (<PostComponent key={post.id} post={post}/>))
            }

        </div>
    );
};

export default PostsComponent;