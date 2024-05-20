import React, {FC} from 'react';
import {IPostModel} from "../../model/IPostModel";
import {NavLink} from "react-router-dom";
import css from '../users/User.module.css'

interface IProps {
    post:IPostModel
}

const PostComponentWrapper:FC<IProps> = ({post}) => {
    return (
        <div className={css.User}>
            <div>
                Id: {post.id},
                title: "{post.title}"
            </div>
            <NavLink to={post.id.toString()} state={{post:'post'}}>
                <button>Show comments of this post</button>
            </NavLink>
        </div>
    );
};

export default PostComponentWrapper;