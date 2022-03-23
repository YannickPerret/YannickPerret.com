import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/Actions/Auth';
import { reduxLogin } from '../redux/reducer/UsersAuth'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    const dispatch = useDispatch()

    const login = (event) =>{

        event.preventDefault();
        
        let user = {
            username : username, 
            password : password
        }

        loginUser(user).then((result) => {
            dispatch(reduxLogin(result))
        })


       /* try{
            let result = await fetch("http://127.0.0.1:3000/auth/login", {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify({
                    username:user.username,
                    password:user.password
                })
            });
    
            result = await result.json()


            sessionStorage.setItem('token', result.token)
           // console.log(result)
        }catch(e){
            console.log(e)
        }*/
    }
    
    return (
        <div className='login'>
            <h2>Se connecter</h2>
            <form className='form_login' onSubmit={login}>
                <div>
                    <label>Nom d'utilisateur </label><input type="text" name="username" id="username" required onChange={((e) => {setUsername(e.target.value)})}/>
                </div>
                <div>
                    <label>Mot de passe </label> <input type="password" name='password' id="password" required onChange={((e) => {setPassword(e.target.value)})} />
                </div>
                <div>
                    <button type="submit">Se connecter</button>
                </div>
            </form>
        </div>
    );
}

export default Login;