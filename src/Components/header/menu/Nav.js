import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    let activeItem = undefined
    let indicator = document.createElement('span')

    useEffect(() => {
        const menu = document.querySelector('.nav_main')
        const menuItems = Array.from(menu.querySelectorAll('a'))

        activeItem = menu.querySelector('[aria-selected]')

        indicator.classList.add('indicator')

        menu.appendChild(indicator)

        if(activeItem){
            indicator.style.setProperty('transform', getTransform(activeItem))
        }

        menuItems.forEach(item => {
            item.addEventListener('mouseover', onItemClick)

        })
    })

    const getTransform = (element) =>{
        const transform = {
            x: element.offsetLeft,
            scaleX: element.offsetWidth / 100,
        }
        return `translateX(${transform.x}px) scaleX(${transform.scaleX})`
    }

    const onItemClick = (e) => {
        if(e.currentTarget === activeItem){
            return;
        }
        activeItem?.removeAttribute('aria-selected')
        e.currentTarget.setAttribute('aria-selected', 'true')

        indicator.animate([
            {transform: getTransform(e.currentTarget)}
        ],{
            fill:'both',
            duration: 600,
            easing : 'cubic-bezier(.48,1.55,.28,1)'
        })
        activeItem = e.currentTarget
    }
    

    return (
        <nav className="nav_main">
            <ul className='nav__List'>
                <li><Link to="/" aria-selected="true">Qui suis-je</Link></li>
                <li><Link to="/">Mon expertise</Link></li>
                <li><Link to="/">Mes expériences</Link></li>
                <li><Link to="/">Derniers projets</Link></li>
                <li><Link to="/">Me contacter</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;