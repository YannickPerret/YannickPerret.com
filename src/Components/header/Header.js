import React from 'react';
import Logo from './logo/Logo';
import Nav from './menu/Nav';

const Header = () => {

    return (
        <header>
            <div className="header__content">
                <div className='header__top'>
                    <Logo />
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;