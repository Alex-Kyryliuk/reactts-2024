import React, {FC, useState} from 'react';
import {IFormProps} from "../models/IFormProps";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {postService} from "../services/api.service";
import {IPostModel} from "../models/IPostModel";


const FormComponent: FC = () => {
    let {
        register,
        handleSubmit,
        formState: {errors, isValid}}
        = useForm<IFormProps>({mode: "all", resolver: joiResolver(postValidator)});

    const [post, setPost] = useState<IPostModel | null>(null);

    const save = (post: IFormProps) => {
        postService
            .savePost(post)
            .then(value => setPost(value.data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <input type="text" {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="number" {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>
                <button>save</button>
            </form>

            {post && <div>
                <h2>Saved post:</h2>
                <p>id: {post.id},</p>
                <p>title: '{post.title}',</p>
                <p>body: '{post.body}',</p>
                <p>userId: {post.userId}</p>
            </div>}
        </div>
    );
};

export default FormComponent;