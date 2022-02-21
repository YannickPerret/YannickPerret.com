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
                    <li className="navigation__link--1"><HashLink to="../" scroll={(el) => handleScrollTo(el)} data-text="&nbsp;Accueil" >&nbsp;Accueil&nbsp;</HashLink></li>
                    <li className="navigation__link--2"><HashLink to="/#projets" scroll={(el) => handleScrollTo(el)} data-text="&nbsp;Réalisations">&nbsp;Réalisations&nbsp;</HashLink></li>
                    <li className="navigation__link--3"><HashLink to="/#services" scroll={(el) => handleScrollTo(el)} data-text="&nbsp;Services">&nbsp;Services&nbsp;</HashLink></li>
                    <li className="navigation__link--4"><HashLink to="/#blog" scroll={(el) => handleScrollTo(el)} data-text="&nbsp;Blog">&nbsp;Blog&nbsp;</HashLink></li>
                </ul>
            </nav>
        </>
        
    );
};

export default Navigation;