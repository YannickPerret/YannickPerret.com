import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    useEffect(() => {
        moveHeroSidebare()
    })


    const moveHeroSidebare = () =>{

        //https://devdojo.com/tnylea/how-to-drag-an-element-using-javascript

        let sidebar = document.querySelector('.hero__sidebar');
        let titleChangeColor = document.querySelector('.hero__title__developpement')
        let titleChangeColorRect =  undefined//titleChangeColor.getBoundingClientRect()
        let isDragged = false
        let deltaX = 0
        let rect = sidebar.getBoundingClientRect()

        sidebar.addEventListener('mousedown', () =>{
            isDragged = true
        })

        window.addEventListener('mouseup', () => {
            
            isDragged = false
        })
    
        sidebar.addEventListener('mousemove', (event) => {
            event.preventDefault()

            if(isDragged){
                deltaX = event.movementX;
                rect = sidebar.getBoundingClientRect()
                titleChangeColorRect = titleChangeColor.getBoundingClientRect()

                if((rect.x +deltaX) <= (window.innerWidth - sidebar.clientWidth) && (rect.x + deltaX) >= 0){
                    sidebar.style.left = rect.x +deltaX+ 'px'
                }

                if((((rect.x +deltaX) >= titleChangeColorRect.left && (rect.x +deltaX) <= (titleChangeColorRect.left + titleChangeColorRect.width))) || ((rect.x +deltaX + rect.width) <= titleChangeColorRect.right))
                {
                    titleChangeColor.style.color = '#fff';
                }
                else{
                    titleChangeColor.style.color = 'rgb(234, 237, 56)';
                }
            }
        })
    }

    return (
        <div className="hero__sidebar">
            <div className='hero__sidebar__content'>
                <div className='hero__sidebar__top'>
                    <span className='hero__sidebar__title'>Yannick Perret</span>
                </div>
                <div className='hero__sidebar__middle'>
                    <p>Développement Web fullstack, pour une nouvelle approche du digital</p>
                    <ul className='hero__competence'>
                        <li className='hero__competence__items'>HTML</li>
                        <li className='hero__competence__items'>CSS</li>
                        <li className='hero__competence__items'>ReactJs</li>
                        <li className='hero__competence__items'>NodeJs</li>
                        <li className='hero__competence__items'>MySQL</li>
                        <li className='hero__competence__items'>React Native</li>
                        <li className='hero__competence__items'>lua</li>
                        <li className='hero__competence__items'>Shopify</li>
                        <li className='hero__competence__items'>WordPress</li>
                    </ul>
                    <Link to="/mes-competences" className='hero__competence__link'>Plus de compétences</Link>
                </div>
                <div className='hero__sidebar__bottom'>
                    <ul>
                        <li><a href="mailto:contact@yannickperret.com">Me contacter</a></li>
                        <li><a href="https://github.com/tchoune">Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;