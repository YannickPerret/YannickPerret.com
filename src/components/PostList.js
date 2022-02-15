import React,{ useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from '../redux/reducer/BlogListPosts';

const PostList = () => {

    const postsList = useSelector((state) => state.posts)

    const dispatch = useDispatch()

    useEffect(()=> {
        if(postsList.length === 0){
            dispatch(getAllPosts())
        }
    }, [])
 

    //const createDate = new Date(posts.dateCreated).toLocaleString()   

    return (
        postsList.map((element) => {
            return(
                <article className="cards" key={element.id}>
                    <header className="cards__header">
                        <div className="cards__title">
                            <h2 className="cards__title">{element.title}</h2>
                            <img src={"./images/"+element.image} alt={element.imageTitle} />
                        </div>
                        <div className="cards__subtitle">
                            <p><FontAwesomeIcon icon={faClock} /> Lecture : {element.timeRead < 60 ? element.timeRead+ " minutes" : (element.timeRead / 60) + " heures"}</p>
                            <p><span><a href="#">#Webpack</a></span>  <span><a href="#">#nodeJS</a></span>  <span><a href="#">#Javascript</a></span>   <span><a href="#">#Web</a></span></p> 
                        </div>
                    </header>
                    <div className="cards__body">
                        <p>
                        {element.description + "... "}
                        <a href={"./"+ element.slug} title="webpack une fois, webpack toujours">lire la suite</a>
                        </p>
                    </div>
                    <footer className="cards__footer">
                        <p>Créer le {element.dateCreated}</p>
                    </footer>
                </article>
            )
        })
    
    );
};

export default PostList;