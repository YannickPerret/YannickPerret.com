import React from 'react';
import { HashLink } from 'react-router-hash-link';


const Navigation = () => {
        const handleScrollTo = (id) =>{
            id.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
        }
    return (
        <>
            <nav className="navigation">
                <ul className="navigation__body">
                    <HashLink to="/" scroll={(el) => handleScrollTo(el)}><li className="navigation__link">Accueil</li></HashLink>
                    <HashLink to="/#projets" scroll={(el) => handleScrollTo(el)}><li className="navigation__link">Réalisations</li></HashLink>
                    <HashLink to="/#services" scroll={(el) => handleScrollTo(el)}><li className="navigation__link">Services</li></HashLink>
                    <HashLink to="/#blog" scroll={(el) => handleScrollTo(el)}><li className="navigation__link">Blog</li></HashLink>
                </ul>
            </nav>
        </>
        
    );
};

export default Navigation;