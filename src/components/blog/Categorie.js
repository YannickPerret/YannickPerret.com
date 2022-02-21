import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Categorie = () => {

    const tag = useSelector((state) => state.filterCategorie)
    const dispatch = useDispatch()

    const handleRemoveTag = (_tag) => {
        dispatch({
            type : "REMOVE_FILTER_CATEGORIE",
            payload : _tag
        })

    }

    return (
        <div className='content_subCategorie'>
        {tag.map((element, index) => {
            return(
                <div className='subCategorie__color--blue' onClick={() => handleRemoveTag(element)} key={index}>{element} X</div>
            )
        })}
         </div>
    );
};

export default Categorie;