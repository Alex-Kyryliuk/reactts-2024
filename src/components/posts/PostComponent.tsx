import React, {FC} from 'react';
import {IPostModel} from "../../model/IPostModel";
import css from './Post.module.css'
interface IProps {
    post: IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div className={css.Post}>
            userId: {post.userId}, <br/>
            id: {post.id}, <br/>
            title: "{post.title}", <br/>
            body: "{post.body}"
        </div>
    );
};

export default PostComponent;