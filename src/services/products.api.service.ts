import axios, {AxiosResponse} from "axios";
import {IProductProps} from "../models/Product";
import {IProductsResponseModels} from "../models/axiosResponse/IProductsResponseModels";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getAllProducts = (): Promise<AxiosResponse<IProductsResponseModels>> => {
    return axiosInstance.get('/products')
}

export {
    getAllProducts
}

