import React from "react";
import SideBar from "./components/SideBar";
import Home from "./Home";
import Blog from "./blog";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import PostList from "./components/PostList";

import '@css/_settings.scss'


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
                    <Route path="blog/:slug" element={<Articles />} />      
                </Routes>
            </>
        )
    }
}
export default App
