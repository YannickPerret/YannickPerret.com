import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Content = () => {
    const navigate = useNavigate()

    return (
        <div className='hero__container'>
            <div className='hero__content'>
                <div className='hero__content__title'>
                    <h1><span className="hero__title__developpement">Développeur Web</span> Fullstack en Suisse</h1>
                </div>
                <div className='hero__content__subtitle'>
                    <p>
                        <mark>Obtenez ce qu'il y a de meilleurs pour votre site web. Dès aujourd'hui je me ferais une joie de discuter de votre projet et trouver une solution adaptée à votre demande.</mark>
                    </p>
                    <p>
                    <mark>Votre présence web est essentielle pour booster votre business, offrez-vous dès maintenant mes services professionnels !</mark>
                    </p>
                </div>
                <div className='hero__content__action'>
                    <button className='hero__content__action__button' onClick={() => navigate("/mes-projets")}>Voir mes projets</button>
                    <button className='hero__content__action__button' onClick={() => navigate("/me-contacter")}>J'ai un projet !</button>
                </div>
            </div>
        </div>
    );
};

export default Content;