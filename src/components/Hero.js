import React from 'react';
import paysage from '@videos/paysage.mp4'

const Hero = () => {
    return (
        <header className='hero' id="hero">
            <video autoPlay muted loop id="heroVideo">
                <source src={paysage} type="video/mp4"/>
            </video>

            <div className='hero__title'>
                <h1>La liberté du développement Web</h1>
            </div>
        </header>
    );
};

export default Hero;