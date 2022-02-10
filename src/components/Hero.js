import React from 'react';
import paysage from '@videos/paysage.mp4'

const Hero = () => {
    return (
        <header className='hero' id="hero">
            <video autoPlay muted loop id="heroVideo">
                <source src={paysage} type="video/mp4"/>
            </video>
        </header>
    );
};

export default Hero;