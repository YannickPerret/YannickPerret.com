import React, {useState} from "react";
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


class App extends React.Component{

    render(){ 
        return (
            <>
                <SideBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="blog" element={<Blog />}>
                        <Route index element={<PostList />} />
                    </Route> 
                    <Route path="blog/:slug" element={<Article />} />  
                    <Route path="admin" element={<Login />} />
                    <Route path="admin/addpost" element={<AddPost />}/>  
                    <Route path="admin/post" element={<PostListAdmin />} />

                </Routes>
            </>
        )
    }
}
export default App
