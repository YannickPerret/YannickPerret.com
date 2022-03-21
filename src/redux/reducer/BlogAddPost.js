const URL = 'http://192.168.1.102:3000/api/';
const INITIAL_STATE = {
    tag : []
}

const GET_TAG = 'GET_TAG'


const blogPostArticle = (state = INITIAL_STATE, action) =>{

    switch(action.type){

        case GET_TAG:
            return{
                ...state,
                tag: action.payload
            }

    }
    return state

}

export default blogPostArticle;

export const getAllTag = () => dispatch =>{
    fetch(URL+ 'getTag')
    .then(response => response.json())
    .then(data => {
        dispatch({
            type:GET_TAG,
            payload : data
        })
    })
}