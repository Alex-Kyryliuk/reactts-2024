import axios, {AxiosResponse} from 'axios';
import {IPostModel} from "../models/IPostModel";
import {IFormProps} from "../models/IFormProps";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
});

const postService = {
    getAllPosts: () => {
        return axiosInstance.get('/posts')
    },


    savePost: (post: IFormProps): Promise<AxiosResponse<IPostModel>> => {
        return axiosInstance
            .post(`/posts`, post)
    }
}

export {
    postService
}
