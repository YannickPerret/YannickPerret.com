import React from 'react';
import Comments from './Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClock } from '@fortawesome/free-solid-svg-icons'

const Articles = (props) => {

    const handleBackToAllPost = () =>{
        props.onChangeSelectedItem(0)
    }

    return (
        <>
            <span onClick={()=>handleBackToAllPost()} className="content__backList"> <FontAwesomeIcon icon={faArrowLeft} />Revenir à la liste</span><br />
            <article className="article">
                <header className="article__header">
                    <div className="article__title">
                        <img src={props.item.image} alt={props.item.imageTitle} />
                        <h2>{props.item.title}</h2>
                    
                    </div>
                    <div className="article__subtitle">
                        <p><FontAwesomeIcon icon={faClock} /> lecture : {props.item.timeRead} minutes</p>
                        <p><span><a href="#">#Webpack</a></span>  <span><a href="#">#nodeJS</a></span>  <span><a href="#">#Javascript</a></span>   <span><a href="#">#Web</a></span></p> 
                    </div>
                </header>
                <div className="article__body">
                    <p>{props.item.content}</p>
                </div>
                <footer className="article__footer">
                    <p>Créer le {props.item.dateCreated}</p> <p>Dernière modification le {props.item.dateUpdate}</p>
                </footer>

                <Comments />
            </article>
        </>
        
    );
};

export default Articles;