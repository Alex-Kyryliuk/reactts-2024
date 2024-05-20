import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsPageWrapper from "../pages/PostsPageWrapper";

export const router = createBrowserRouter(
    [
        {path:'/', element: <MainLayout/>, errorElement: <h1>error 404</h1>,
        children:[
            {index: true, element: <HomePage/>},
            {path:'users', element: <UsersPage/>,
            children:[
                {path:':id', element: <PostsPage/>}
            ]},
            {path:'posts', element: <PostsPageWrapper/>,
            children:[
                {path: ':id', element: <CommentsPage/>}
            ]},
            {path:'comments', element:<CommentsPage/>}
        ]}
    ]
)