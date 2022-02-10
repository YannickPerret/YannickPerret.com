import React from "react"
import Yannick from "@images/YannickPerret"
import Navigation from "./Navigation"


const SideBar = () => {
    return (
        <div className="presentation">
            <div className="presentation__header">
                <img src={Yannick} title="Yannick Perret portait beau gosse" className="presentation__portait"/>
                <ul className="presentation__body">
                    <li>Yannick Perret</li>
                    <li>Développeur Back End option Front-end</li>
                    <li>26 ans</li>
                    <li>Suisse</li>
                    <li><a href="https://github.com/tchoune">Github</a></li>
                </ul>
                
            </div>
            
            <Navigation />
            
            <div className="presentation__footer">
                <p><a href="mailto:contact@yannickperret.com">Me contacter</a></p>
                <p>Créer via Webpack, ReactJs et NodeJs, le 04/02/2022</p>
            </div>
        </div>
    )
}
export default SideBar;
