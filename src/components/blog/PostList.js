import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const PostList = (posts) => {

    let item = posts.posts
    const createDate = new Date(item.dateCreated).toLocaleDateString("fr-FR")
    

    return (
            <article className="cards" data-date={"Publié le "+createDate} data-color={item.color} id="cards">
                <Link to={"../blog/"+item.slug}>
                    <header className="cards__header">
                        <div className="cards__title">
                            <h2 className="cards__title">{item.title}</h2>
                            <img src={"./images/blog/"+item.image} alt={item.imageTitle} />
                        </div>
                        <div className="cards__subtitle">
                            <p><FontAwesomeIcon icon={faClock} /> Lecture : {item.timeRead < 60 ? item.timeRead+ " minutes" : (item.timeRead / 60) + " heures"}</p>
                            <p><span><Link to="#">#Webpack</Link></span>  <span><Link to="#">#nodeJS</Link></span>  <span><Link to="#">#Javascript</Link></span>   <span><Link to="#">#Web</Link></span></p> 
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