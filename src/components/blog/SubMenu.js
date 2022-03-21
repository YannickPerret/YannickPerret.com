import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SubMenu = () =>{
    const tagList = useSelector((state) => state.blogPost.tagList)

    const dispatch = useDispatch()

    const handleChangeCategorie = (_categories) => {
        console.log(_categories)
        dispatch({
            type : "FILTER_BY_TAG",
            payload : _categories
        })
    }


    return(
        <div className="submenu">
            <div className="submenu__category">
                Par Catégories
                <ul>
                    {tagList.map((element) => {
                        return(
                            <li key={element.id}><span onClick={(() => handleChangeCategorie(element))}>{element.name}</span></li>
                        )
                    })}
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