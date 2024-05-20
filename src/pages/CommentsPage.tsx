import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {ICommentModel} from "../model/ICommentModel";
import {commentApiService, postApiService} from "../services/api.service";
import CommentsComponent from "../components/comments/CommentsComponent";

const CommentsPage = () => {
    const{id} = useParams();
    const location = useLocation();
    console.log(location);
    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        if(id) {
            postApiService.getCommentsOfPost(id).then(value => setComments(value.data))

        }
    }, [id]);

    useEffect(() => {
        commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;