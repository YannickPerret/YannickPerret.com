import React from "react"
import Yannick from "@images/YannickPerret"
import Github from '@images/github'
import Navigation from "./Navigation"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const SideBar = () => {
    return (
        <div className="presentation">
            <div className="presentation__header">
                <h2>Yannick Perret</h2>
                <Link to="../"><img src={Yannick} alt="Portrait de Yannick Perret en rond" className="presentation__portrait"/></Link>
                <ul className="informations">
                    <li>Développeur FullStack</li>
                    <li>26 ans &nbsp;| &nbsp;Suisse</li>
                    <li className="github"><a href="https://github.com/tchoune" alt="lien github pour voir les travaux de Yannick Perret"><img src={Github} />Github</a></li>
                </ul>
                
            </div>
            
            <Navigation />
            
            <div className="presentation__footer">
                <p><a href="mailto:contact@yannickperret.com" alt="Envoyer un email sur l'adresse de contact"><FontAwesomeIcon icon={faEnvelope}/>&nbsp;Me contacter</a></p>
               {//<p>Créer via Webpack, ReactJs et NodeJs, le 04/02/2022</p>
}
            </div>
        </div>
    )
}
export default SideBar;
