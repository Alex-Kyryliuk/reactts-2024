import React, {FC} from 'react';
import {ICommentModel} from "../../model/ICommentModel";
import css from '../posts/Post.module.css'

interface IProps {
    comment:ICommentModel
}

const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div className={css.Post}>
            {comment.id}. {comment.name}
        </div>
    );
};

export default CommentComponent;