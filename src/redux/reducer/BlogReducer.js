const URL = 'http://192.168.1.102:3000/api/';
const INITIAL_STATE = {
    posts : [],
    selectedPost : [],
    filterCategorie:[]
}

const GETPOST = 'GET_POST'
const GET_SELECTED_POST = 'GET_SELECTED_POST'
const ADD_FILTER_CATEGORIE = 'ADD_FILTER_CATEGORIE'
const REMOVE_FILTER_CATEGORIE = 'REMOVE_FILTER_CATEGORIE'

const blogListPosts = (state = INITIAL_STATE, action) =>{

    switch(action.type){
        case GETPOST:
            return {
                ...state,
                posts : action.payload
            }


        case GET_SELECTED_POST:
            return {
                ...state,
                selectedPost : action.payload
            }

        case ADD_FILTER_CATEGORIE:

                if (!state.filterCategorie.includes(action.payload)){
                    return {
                        ...state,
                        filterCategorie : [...state.filterCategorie, action.payload]
                    }
                }
                return {
                    ...state
                }
           
        
            case REMOVE_FILTER_CATEGORIE:
                console.log(action.payload)
                return{
                    ...state,
                    filterCategorie: state.filterCategorie.filter(element => element !== action.payload)
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
            type: GET_SELECTED_POST,
            payload : data[0]
        })
    })
}
