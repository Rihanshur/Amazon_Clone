import React,{useState} from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "./firebase"

function Login() {
    const navigate  = useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const login = event => {
        event.preventDefault();//stops refresh 

        signInWithEmailAndPassword(auth,email,password)
            .then((auth) => {
                navigate("/");
            })
            .catch((e) => alert(e.message));
    }

    const register = event => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth,email,password)
            .then(auth =>{
                navigate("/");
            })
            .catch((e) => alert(e.message));
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo'
                src = 'https://companieslogo.com/img/orig/AMZN_BIG-accd00da.png?t=1632523695'
                alt = " "
            />    
        </Link> 
        <div className='login__container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type='email'/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} type="submit" className='login__continue'>Continue</button>
            </form>
            <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button onClick={register} className='login__register'>Create your Amazon Account</button>
        </div>
      
    </div>
  )
}

export default Login
