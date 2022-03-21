import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Categorie = () => {

    const tagSelect = useSelector((state) => state.blogPost.tagSelect)
    const dispatch = useDispatch()

    const handleRemoveTag = (_tag) => {
        dispatch({
            type : "REMOVE_FILTER_BY_TAG",
            payload : _tag
        })

    }
    return (
        <div className='content_subCategorie'>
        {tagSelect.map((element, index) => {
            return(
                <div className='subCategorie__color--blue' onClick={() => handleRemoveTag(element)} key={index}>{element} X</div>
            )
        })}
         </div>
    );
};

export default Categorie;