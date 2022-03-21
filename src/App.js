import React from "react";
import SideBar from "./components/SideBar";
import Home from "./Home";
import Blog from "./blog";
import { Routes, Route } from "react-router-dom";
import Article from "./components/blog/Article";
import PostList from "./components/blog/PostList";

import '@css/_settings.scss'
import AddPost from "./admin/AddPost";
import Login from "./login";


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
                    <Route path="admin/addpost" element={<AddPost />}/>   
                    <Route path="login" element={<Login />} />
                </Routes>
            </>
        )
    }
}
export default App
