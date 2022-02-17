const URL = 'http://192.168.1.102:3000/api/';
const INITIAL_STATE = {
    posts : [],
    
}

const GETPOST = 'GET_POST'

const blogListPosts = (state = INITIAL_STATE, action) =>{

    switch(action.type){
        case GETPOST:
            return {
                ...state,
                posts : action.payload
            }

        default:
            return state
    }
}

export default blogListPosts;


export const getAllPosts = () => dispatch =>{
    fetch(URL+ 'get')
    .then(response => response.json())
    .then(data => {
        dispatch({
            type:GETPOST,
            payload : data
        })
    })
}
export const getPostBySearch = (word) => dispatch =>{
    fetch(URL + 'getFromSearch/'+word)
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: GETPOST,
            payload : data
        })
    })
}

export const getPostBySlug = (slug) => dispatch => {
    fetch(URL + 'getFromSlug/'+slug)
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: GETPOST,
            payload : data[0]
        })
    })
}
