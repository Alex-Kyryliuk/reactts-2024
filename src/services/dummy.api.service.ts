import axios, {AxiosResponse} from "axios";
import {UsersResponseModel} from "../models/response/UsersResponseModel";
import {PostsResponseModel} from "../models/response/PostsResponseModel";


const axiosInstance = axios.create({
        baseURL: "https://dummyjson.com",
        headers:{"Content-Type":'application/json'}
    }
)

const getAllUsers =():Promise<AxiosResponse<UsersResponseModel>> =>{
    return axiosInstance.get('/users');
}

const getAllPostsOfSingleUser =(userId:number):Promise<AxiosResponse<PostsResponseModel>> =>{
    return axiosInstance.get('posts/user/' + userId);
}

export {
    getAllUsers,
    getAllPostsOfSingleUser
}