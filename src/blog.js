import React, { useEffect } from "react";
import SubMenu from "./components/SubMenu.js";
import SearchBar from "./components/SearchBar.js";
import PostList from "./components/PostList.js";
import { useSelector } from "react-redux";



const Blog = () => {
    
    return(
        <>
            <section className="content" id="blog">
                
                <SearchBar />    
                
                <PostList />
                

            </section>

            <SubMenu />
        </>
        
    )
}
export default Blog