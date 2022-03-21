import React, {useEffect} from "react";
import SubMenu from "./components/blog/SubMenu.js";
import SearchBar from "./components/blog/SearchBar.js";
import PostList from "./components/blog/PostList.js";

import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, getAllTag} from './redux/reducer/BlogReducer';
import Categorie from "./components/blog/Categorie.js";



const Blog = () => {

    const postsList = useSelector((state) => state.blogPost.posts)
    const filterCategorie = useSelector((state) => state.blogPost.postsFilter)

    const dispatch = useDispatch()


    useEffect(()=> {
        
        if(postsList.length === 0){
            dispatch(getAllPosts())
            dispatch(getAllTag())
        }
        
    }, [postsList])
    
    return(
        
        <>
            <section className="content" id="blog">
                
                <SearchBar />    

                <Categorie />

                {filterCategorie.length !== 0 ?
                    [filterCategorie.map((element, index) => {
                       return(
                        <PostList posts={element} key={index} />
                       )
                    })]
                    :
                    postsList.map((element, index) => {
                        return(
                            console.log(element),
                            <PostList posts={element} key={index} />
                        )
                    })
                }      
                
            
            </section>

            <SubMenu />
        </>
        
    )
}
export default Blog