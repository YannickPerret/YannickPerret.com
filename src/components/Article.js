import React, { useEffect } from 'react';
import Comments from './Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClock } from '@fortawesome/free-solid-svg-icons'
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getPostBySlug } from '../redux/reducer/BlogReducer';

const Article = () => { 

    const dispatch = useDispatch()
    const slug = useParams().slug

    const item = useSelector((state) => state.posts)

    useEffect(()=> {
        if(slug.length > 0){
            dispatch(getPostBySlug(slug))
        }

        
    }, [])

    const dateCreated = new Date(item.dateCreated).toLocaleString()
    const dateUpdate = new Date(item.dateUpdate).toLocaleString()
    return (
            <section className="article" id="blog">
                <article className="article">
                    <header className="article__header">
                        <div className="article__title">
                            <img src={"../images/"+item.image} alt={item.imageTitle} />
                            <span  className="article_backList"><Link to="../blog"><FontAwesomeIcon icon={faArrowLeft} />Retour à la liste des articles</Link></span><br />
                            <h2>{item.title}</h2>
                        
                        </div>
                        <div className="article__subtitle">
                            <p><FontAwesomeIcon icon={faClock} /> Lecture : {item.timeRead < 60 ? item.timeRead+ " minutes" : (item.timeRead / 60) + " heures"} </p>
                            <p><span><Link to="#">#Webpack</Link></span>  <span><Link to="#">#nodeJS</Link></span>  <span><Link to="#">#Javascript</Link></span>   <span><Link to="#">#Web</Link></span></p> 
                        </div>
                    </header>
                    <div className="article__body">
                        <p>{item.content}</p>
                    </div>
                    <footer className="article__footer">
                        <p>Créer le {dateCreated}</p> <p>{!dateUpdate ? null: "Dernière modification le "+dateUpdate}</p>
                    </footer>

                    <Comments />
             </article>
            </section>
    );
    
    
};

export default Article;