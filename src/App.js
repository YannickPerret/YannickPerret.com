import React, {useEffect} from "react";
import SideBar from "./components/SideBar";
import Home from "./Home";
import Blog from "./blog";
import { Routes, Route } from "react-router-dom";
import Article from "./components/blog/Article";
import PostList from "./components/blog/PostList";

import '@css/_settings.scss'
import AddPost from "./admin/AddPost";
import Login from "./admin/login";
import PostListAdmin from "./admin/PostList";
import { useSelector } from "react-redux";


//class App extends React.Component{
const App = () =>{
    const isAuth = useSelector((state) => state.user.loggedIn)

    return (
        <>
            <h1>{`fvcvvvvvvvvvvvvvv Auth : ${isAuth}`}</h1>
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="blog" element={<Blog />}>
                    <Route index element={<PostList />} />
                </Route> 
                <Route path="blog/:slug" element={<Article />} /> 
                <Route path="admin" element={<Login />} />

            {isAuth ?
            <>
                <Route path="admin/addpost" element={<AddPost />}/>  
                <Route path="admin/post" element={<PostListAdmin />} />
            </> : <Route path="admin/*" element={<Login />} />}

            </Routes>
        </>
    )
    
}
export default App
