import React, {useEffect} from "react";
import SubMenu from "./components/blog/SubMenu.js";
import SearchBar from "./components/blog/SearchBar.js";
import PostList from "./components/blog/PostList.js";

import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from './redux/reducer/BlogReducer';
import Categorie from "./components/blog/Categorie.js";



const Blog = () => {

    const postsList = useSelector((state) => state.posts)
    const filterCategorie = useSelector((state) => state.filterCategorie)

    const dispatch = useDispatch()



    useEffect(()=> {
        if(postsList.length === 0){
            dispatch(getAllPosts())
        }
    }, [postsList])
    
    return(
        
        <>
            <section className="content" id="blog">
                
                <SearchBar />    

                <Categorie />

                {filterCategorie.length >= 1 ?
                    postsList.sort((a, b) => b.dateCreated - a.dateCreated)
                    .map((element, index) => {
                        return(
                            filterCategorie.map((categorie) => {
                            if(element.tag.toLowerCase().includes(categorie.toLowerCase())){
                                return(<PostList posts={element} key={index} />)
                            }
                        })
                        )
                    })
                :
                postsList.sort((a, b) =>  b.dateCreated - a.dateCreated).map((element, index) => {
                    return(
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