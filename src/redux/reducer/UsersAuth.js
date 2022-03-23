const initalState = {
    authChecked : false,
    loggedIn : false,
    currentUser: {}
}

const AUTHENTICATED = 'AUTHENTICATED'
const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED' 

export default function Authorization (state = initalState, action){
    switch(action.type){
        case AUTHENTICATED:
            return{
                authChecked: true,
                loggedIn : true,
                currentUser: action.payload
            }
        case NOT_AUTHENTICATED:
            return{
                authChecked : true,
                loggedIn : false,
                currentUser : {}
            }

        default :
            return state;
    }
}

export const reduxLogin = (data) => dispatch =>{
    dispatch({type : AUTHENTICATED, payload : data});
}