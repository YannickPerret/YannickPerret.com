const URL = 'http://192.168.1.102:3000/api/';
const INITIAL_STATE = {
    posts : []
}

const blogListPosts = (state = INITIAL_STATE, action) =>{

    switch(action.type){
        case 'LOADALLPOST':{
            return {
                ...state,
                posts : action.payload
            }
        }
    }

    return state

}

export default blogListPosts;


export const getAllPosts = () => dispatch =>{
    fetch(URL+ 'get')
    .then(response => response.json())
    .then(data => {
        dispatch({
            type:"LOADALLPOST",
            payload : data
        })
    })
}
