import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="header__logo">
            <Link to="/" className='logo__text'>Yannick Perret</Link>
        </div>
    );
};

export default Logo;