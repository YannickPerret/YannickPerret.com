import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SubMenu = () =>{
    const dispatch = useDispatch()

    const handleChangeCategorie = (_categories) => {
        
        if(_categories !== ""){
            dispatch({
                type : "ADD_FILTER_CATEGORIE",
                payload : _categories
            })
        }

    }


    return(
        <div className="submenu">
            <div className="submenu__category">
                Par Catégories
                <ul>
                    <li><span onClick={(() => handleChangeCategorie("reactJs"))}>ReactJs</span></li>
                    <li><span onClick={(() => handleChangeCategorie("webpack"))}>Webpack</span></li>
                    <li><span onClick={(() => handleChangeCategorie("nodeJs"))}>nodeJs</span></li>
                    <li><span onClick={(() => handleChangeCategorie("Web"))}>web</span></li>
                    <li><span onClick={(() => handleChangeCategorie("mobile"))}>Mobile</span></li>
                </ul>
            </div>
            <div className="submenu__years">
                Par années
                <ul>
                    <li><Link to="?categories=2021">2022 </Link></li>
                    <li><Link to="?categories=2022">2021 </Link></li>
                    <li><Link to="?categories=2022">2020 </Link></li>
                </ul>
            </div>
                
        </div>
    )
}

export default SubMenu;