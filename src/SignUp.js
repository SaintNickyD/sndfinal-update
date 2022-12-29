import React, { useState } from 'react';
import './SignUp.css'
import { Link, useHistory } from "react-router-dom"
import { auth } from "./firebase";


function SignUp() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [address, setAddress] = useState('');
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword( email, password )
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='signUp'>
            <Link to='/'>
                <img
                    className="signUp__logo"
                    src='https://cdn.discordapp.com/attachments/869604147291357278/882379338484441118/163044595391699064.png'
                />
            </Link>

            <div className='signUp__container'>
                <h1>Sign-Up</h1>

                <form >
                    <h5>Display name</h5>
                    <input type='text' value={displayName} onChange={e => setDisplayName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>Delivery Address</h5>
                    <input type='text' value={address} onChange={e => setAddress(e.target.value)} />

                    <button type='submit'
                        onClick={register}
                        className='signUp__createAccountButton'>Create Account</button>
                </form>

            </div>
            <Link to="/login">
                <button type='submit'
                    className='signUp__signInButton'>Already have an Account?Sign In</button>
            </Link>
        </div>
    )
}

export default SignUp