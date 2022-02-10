import React from "react";

const SubMenu = () =>{
    return(
        <div className="submenu">
            <div className="submenu__category">
                Par Catégorie
                <ul>
                    <li><a href="category=reactJs">ReactJs</a></li>
                    <li><a href="category=htmlcss">HTML/CSS</a></li>
                    <li><a href="category=Windows">windows</a></li>
                </ul>
            </div>
            <div className="submenu__years">
                Par année
                <ul>
                    <li><a href="category=2021">2022 </a></li>
                    <li><a href="category=2022">2021 </a></li>
                    <li><a href="category=2022">2020 </a></li>
                </ul>
            </div>
                
        </div>
    )
}

export default SubMenu;