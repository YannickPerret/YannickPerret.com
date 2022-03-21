import regeneratorRuntime from "regenerator-runtime";


const URL = 'http://192.168.1.102:3000/api/';
const INITIAL_STATE = {
    posts : [],
    selectedPost : [],

    postsFilter:[],

    tagList : [],
    tagSelect : []
}

const LOAD_ALL_POST = 'LOAD_ALL_POST'
const LOAD_ALL_TAG = 'LOAD_ALL_TAG'
const FILTER_BY_SELECTED_POST = 'GET_SELECTED_POST'
const FILTER_BY_SEARCH = 'FILTER_BY_SEARCH'
const FILTER_BY_TAG = 'FILTER_BY_TAG'
const REMOVE_FILTER_BY_TAG = 'REMOVE_FILTER_BY_TAG'

const GET_TAG = 'GET_TAG'

const blogListPosts = (state = INITIAL_STATE, action) =>{

    switch(action.type){
        case LOAD_ALL_POST:
            return {
                ...state,
                posts : action.payload
            }
        case LOAD_ALL_TAG :
            return {
                ...state,
                tagList : action.payload
            }


        case FILTER_BY_SELECTED_POST:

            return {
                ...state,
                selectedPost : action.payload
            }

        case FILTER_BY_TAG:
            let postsFilterByTag = state.posts.filter((element) => {
                if(element.tag !== null){
                    return element.tag.toLowerCase().includes(action.payload.name.toLowerCase())
                }
            })

            let temparray = action.payload

            console.log(temparray)

            return {
                ...state,
                postsFilter : postsFilterByTag,
                tagSelect : [...state.tagSelect, action.payload.name]
            }
               
        
            
               
        
        case REMOVE_FILTER_BY_TAG:
            console.log(action.payload)
            return{
                ...state,
                tagSelect: state.tagSelect.filter(element => element !== action.payload)
                //postsFilter: state.filterCategorie.filter(element => element.tag !== action.payload)
                
            }

        case FILTER_BY_SEARCH:



        case GET_TAG:
            return{
                ...state,
                tag: action.payload
            }


        default:
            return state
    }
}

export default blogListPosts;


const callAPI = async(_request) => {

    const response = await fetch(URL + _request);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    
    return body;
}


export const getAllPosts = () => dispatch =>{
    callAPI("get")
    .then(data => {
        dispatch({
            type:LOAD_ALL_POST,
            payload : data
        })
    })
}
export const getPostBySearch = (word) => dispatch =>{
    callAPI('getFromSearch/'+word)
    .then(data => {
        dispatch({
            type: LOAD_ALL_POST,
            payload : data
        })
    })
}

export const getPostBySlug = (slug) => dispatch => {
    callAPI('getFromSlug/'+slug)
    .then(data => {
        data[0].tag = new Array(data[0].tag)
        dispatch({
            type: FILTER_BY_SELECTED_POST,
            payload : data[0]
        })
    })
}

export const getAllTag = () => dispatch =>{
    callAPI('getTag')
    .then(data => {
        dispatch({
            type:LOAD_ALL_TAG,
            payload : data
        })
    })
}