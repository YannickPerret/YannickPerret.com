import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const PostList = (posts) => {

    const [item, setItem] = useState(posts.posts)
    const createDate = new Date(item.dateCreated).toLocaleDateString("fr-FR")
    let tag = []

   /* if(item.tag !== null){

        tag = item.tag.split(",")
        console.log(item)
    }*/
    
    const timeforRead = (minutes) => 
    {
        let heure = parseInt(minutes / 60);
        let minutesRestante = (minutes % 60);

        if(heure < 1) return minutes + " minutes";

        if(minutesRestante === 0){
            return heure + " heure"}
        else{
            return heure + " heure " + minutesRestante + " minutes";
        } 
    }

    return (
            <article className="cards" data-date={"Publié le "+createDate} data-color={item.color} id="cards">
                <Link to={"../blog/"+item.slug}>
                    <header className="cards__header">
                        <div className="cards__title">
                            <h2 className="cards__title">{item.title}</h2>
                            <img src={"../images/blog/"+item.image} alt={item.imageTitle} />
                        </div>
                        <div className="cards__subtitle">
                            <p><FontAwesomeIcon icon={faClock} /> Lecture : {timeforRead(item.timeRead)}</p>
                            <p>{/*tag.map((element) => {
                                return(<span key={element.id}>{element}</span>)
                            })*/}
                            </p> 
                        </div>
                    </header>
                    <div className="cards__body">
                        <p>
                        {item.description + "... "}
                        <Link to={"../blog/"+ item.slug} title="webpack une fois, webpack toujours">lire la suite</Link>
                        </p>
                    </div>
 
                </Link>
            </article>
        )
};

export default PostList;