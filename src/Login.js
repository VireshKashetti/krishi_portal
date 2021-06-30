import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import Logo from "./images/ecology.png"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={Logo} 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form method = "post">
                    <h5>E-mail</h5>
                    <input type='text' onChange={e => setEmail(e.target.value)} placeholder = "email" />

                    <h5>Password</h5>
                    <input type='password' onChange={e => setPassword(e.target.value)} placeholder = "password" />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Krishi Portal <a href ="./">Conditions of Use & Sale</a>. Please
                    see our Privacy Notice and our Cookies Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Sign Up</button>
            </div>
        </div>
    )
}

export default Login
