import React from 'react';
import Comments from './Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClock } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom";
import { getDataFromSlug } from '../API/db';

const Articles = () => { 
    
    let item = []

    const getPostViaSlug = () =>{
        return getDataFromSlug(useParams().slug).then((data)=>{
            if(data.length > 0){
                 return (data[0])
            }
        })
    }

    const handleBackToAllPost = () =>{
        props.onChangeSelectedItem(0)
    }

    //createDate = new Date(posts.dateCreated).toLocaleString()
    //updateDate = posts.dateUpdate ? new Date(posts.dateUpdate).toLocaleString() : false

    console.log(getPostViaSlug())   

    return (
        <>
            
            {/*<span  className="content__backList"> <FontAwesomeIcon icon={faArrowLeft} />Revenir à la liste</span><br />
            <article className="article">
                <header className="article__header">
                    <div className="article__title">
                        <img src={"../images/"+item.image} alt={item.imageTitle} />
                        <h2>{item.title}</h2>
                    
                    </div>
                    <div className="article__subtitle">
                        <p><FontAwesomeIcon icon={faClock} /> Lecture : {posts.timeRead < 60 ? posts.timeRead+ " minutes" : (posts.timeRead / 60) + " heures"} </p>
                        <p><span><a href="#">#Webpack</a></span>  <span><a href="#">#nodeJS</a></span>  <span><a href="#">#Javascript</a></span>   <span><a href="#">#Web</a></span></p> 
                    </div>
                </header>
                <div className="article__body">
                    <p>{posts.content}</p>
                </div>
                <footer className="article__footer">
                    <p>Créer le {createDate}</p> <p>{!updateDate ? null: "Dernière modification le "+updateDate}</p>
                </footer>

                <Comments />
        </article>*/}
        </>
        
    );
    
    
};

export default Articles;