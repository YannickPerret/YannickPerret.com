import React from 'react';
import Comments from './Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClock } from '@fortawesome/free-solid-svg-icons'

const Articles = (props) => {

    const handleBackToAllPost = () =>{
        props.onChangeSelectedItem(0)
    }

    let createDate = new Date(props.item.dateCreated).toLocaleString()
    let updateDate = props.item.dateUpdate ? new Date(props.item.dateUpdate).toLocaleString() : false

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
                        <p><FontAwesomeIcon icon={faClock} /> Lecture : {props.item.timeRead < 60 ? props.item.timeRead+ " minutes" : (props.item.timeRead / 60) + " heures"} </p>
                        <p><span><a href="#">#Webpack</a></span>  <span><a href="#">#nodeJS</a></span>  <span><a href="#">#Javascript</a></span>   <span><a href="#">#Web</a></span></p> 
                    </div>
                </header>
                <div className="article__body">
                    <p>{props.item.content}</p>
                </div>
                <footer className="article__footer">
                    <p>Créer le {createDate}</p> <p>{!updateDate ? null: "Dernière modification le "+updateDate}</p>
                </footer>

                <Comments />
            </article>
        </>
        
    );
};

export default Articles;