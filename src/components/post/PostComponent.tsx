import React, {FC} from 'react';
import {PostModel} from "../../models/PostModel";
interface IProps {
    post: PostModel
}

type IPropsType = IProps & {children?: React.ReactNode}
const PostComponent:FC<IPropsType>= ({post}) => {
    return (
        <div key={post.id}>
                <p>userId {post.userId} <br/> {post.id}. {post.title}</p>
        </div>
    );
};

export default PostComponent;