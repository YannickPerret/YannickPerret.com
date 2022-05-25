import React from 'react';
import Hero from './hero/hero';
import Logo from './logo/Logo';
import Nav from './menu/Nav';
import video from '../../Assets/videos/homepage'

const Header = () => {

    return (
        <header>
            <div className="header__content">
                <div className='header__top'>
                    <Logo />
                    <Nav />
                </div>
                <div className='header__hero'>
                    <Hero />
                </div>
            </div>
            <video autoPlay muted loop > 
                <source src={video} type="video/mp4" />
                    Votre navigateur ne prends pas en charge les vidéos
            </video>
        </header>
    );
};

export default Header;