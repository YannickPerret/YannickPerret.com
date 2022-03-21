import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = () =>{
        const data = {username : username, password : password}
        fetch ("http://127.0.0.1:3000/auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(data),
        })
        .then(response => console.log(response))
    }
    
    return (
        <div>
            <form className='form_login' onSubmit={login} action="">
                <input type="text" name="username" id="username" required onChange={((e) => {setUsername(e.target.value)})}/>
                <input type="password" name='password' id="password" required onChange={((e) => {setPassword(e.target.value)})} />

                <input type="submit" value="Se connecter" />
            </form>
        </div>
    );
}

export default Login;