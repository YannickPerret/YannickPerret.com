import React,{ useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from '../redux/reducer/BlogReducer';
import { Link } from 'react-router-dom';

const PostList = () => {

    const postsList = useSelector((state) => state.posts)
    

    const dispatch = useDispatch()

    useEffect(()=> {
        if(postsList.length <= 1){
            dispatch(getAllPosts())
        }
    }, [])

    return (
        postsList.map((element, index) => {
           const createDate = new Date(element.dateCreated).toLocaleString() 
            return(
                <article className="cards" key={index}>
                    <Link to={"../blog/"+element.slug} >
                        <header className="cards__header">
                            <div className="cards__title">
                                <h2 className="cards__title">{element.title}</h2>
                                <img src={"./images/"+element.image} alt={element.imageTitle} />
                            </div>
                            <div className="cards__subtitle">
                                <p><FontAwesomeIcon icon={faClock} /> Lecture : {element.timeRead < 60 ? element.timeRead+ " minutes" : (element.timeRead / 60) + " heures"}</p>
                                <p><span><Link to="#">#Webpack</Link></span>  <span><Link to="#">#nodeJS</Link></span>  <span><Link to="#">#Javascript</Link></span>   <span><Link to="#">#Web</Link></span></p> 
                            </div>
                        </header>
                        <div className="cards__body">
                            <p>
                            {element.description + "... "}
                            <Link to={"./"+ element.slug} title="webpack une fois, webpack toujours">lire la suite</Link>
                            </p>
                        </div>
                        <footer className="cards__footer">
                            <p>Créer le {createDate}</p>
                        </footer>
                    </Link>
                </article>
            )
        })
    
    );
};

export default PostList;