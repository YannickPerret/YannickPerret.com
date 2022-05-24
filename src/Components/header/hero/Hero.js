import React from 'react';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero__container">
                <div className='hero__container__top'>
                    <span className='hero__container__title'>Yannick Perret</span>

                </div>

                <div className='hero__container__middle'>
                    <p>Développement Web fullstack, pour une nouvelle approche du digital</p>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JS React / Node</li>
                        <li>MySQL</li>
                    </ul>
                </div>

                <div className='hero__container__bottom'>
                    <ul>
                        <li><a href="#">Me contacter</a></li>
                        <li><a href="#">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
        
    );
};
 
export default Hero;