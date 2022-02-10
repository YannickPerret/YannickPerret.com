import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const Cards = ({item : {id, title, imageTitle, image, timeRead, description, slug, dateCreated, dateUpdate}, index, onChangeElement}) => {

    const handleChange = (id) =>{
        console.log(id)
        onChangeElement(id)
    }

    return (
        <article className="cards" onClick={(() => handleChange(id))}>
            <header className="cards__header">
                <div className="cards__title">
                    <h2 className="cards__title">{title}</h2>
                    <img src={image} alt={imageTitle} />
                </div>
                <div className="cards__subtitle">
                    <p><FontAwesomeIcon icon={faClock} /> lecture : {timeRead} minutes</p>
                    <p><span><a href="#">#Webpack</a></span>  <span><a href="#">#nodeJS</a></span>  <span><a href="#">#Javascript</a></span>   <span><a href="#">#Web</a></span></p> 
                </div>
            </header>
            <div className="cards__body">
                <p>
                {description.substring(0, 699) + "... "}
                <a href={"./"+ slug} title="webpack une fois, webpack toujours">lire la suite</a>
                </p>
            </div>
            <footer className="cards__footer">
                <p>Créer le {dateCreated}</p> <p>Dernière modification le {dateUpdate}</p>
            </footer>
        </article>
    );
};

export default Cards;