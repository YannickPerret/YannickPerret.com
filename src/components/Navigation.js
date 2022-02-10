import React from 'react';


const Navigation = () => {
        const handleScrollTo = (id) =>{
            let element = document.getElementById(id)
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
        }

    return (
        <nav className="navigation">
                <ul className="navigation__body">
                    <a href="javascript:void()" onClick={(() => handleScrollTo("hero"))}><li className="navigation__link">Accueil</li></a>
                    <a href="javascript:void()" onClick={(() => handleScrollTo("projets"))}> <li  className="navigation__link">Réalisations</li></a>
                    <a href="javascript:void()" onClick={(() => handleScrollTo("services"))}> <li  className="navigation__link">Services</li></a>
                    <a href="javascript:void()" onClick={(() => handleScrollTo("blog"))}> <li  className="navigation__link">Blog</li></a>
                </ul>
            </nav>
    );
};

export default Navigation;