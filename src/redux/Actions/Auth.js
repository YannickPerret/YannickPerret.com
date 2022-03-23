
const setToken = (token) =>{
    localStorage.setItem("token", token)
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
}

const deleteToken = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("lastLoginTime")
}

export const getToken = () =>{
    const now = new Date(Date.now()).getTime()
    const timeAllowed = 1000*60 *30
    const timeSinceLastLogin = now -localStorage.getItem("lastLoginTime")
    if (timeSinceLastLogin < timeAllowed){
        return localStorage.getItem("token")
    }
}

export const loginUser = (user) =>{

    return fetch("http://127.0.0.1:3000/auth/login", {
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            username:user.username,
            password:user.password
        })
    })
    .then(response => response.json())
    .then(data => {
        setToken(data.token)
        return data
    })

    .catch(error => {
        console.log(error)
        return error
    });
    
}


export const logoutUser = () =>{
    
    fetch("http://127.0.0.1:3000/auth/logout", {
            method: "DELETE",
            headers : {
                'Accept': "application/json",
                'Content-type': 'application/json',
                Authorization : getToken(),
            },
        }).then((res) => {
            deleteToken()
            if(res.ok){
                return res.json()
                .then(() => useDispatch({type: NOT_AUTHENTICATED}))
            }else {
                return res.json().then((error) => {
                    useDispatch({type : NOT_AUTHENTICATED})
                })
            }
        })
}

export const checkAuth = () => {
    return (dispatch) => {
        return fetch("http://127.0.0.1/auth/current_user", {
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: getToken()
            },
        }).then((res) => {
            if(res.ok){
                return res
                .json()
                .then(user => {
                    user.data ? dispatch({type : AUTHENTICATED, payload : user}) : dispatch({type: NOT_AUTHENTICATED})})
            }else{
                return Promise.reject(dispatch({type: NOT_AUTHENTICATED}))
            }
        })
    }
}