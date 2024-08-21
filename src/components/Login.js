import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './lol.css';
import email_icon from '../assets/email_black.png'
import pswd_icon from '../assets/lock_black.png'
import { GoogleLogin } from '@react-oauth/google';
import { Auth0Provider } from "@auth0/auth0-react";

const Login = () => {
    const navigate = useNavigate();

    const[input, setInput] = useState({
        // name: "",
        email: "",
        password: "",
    });

    const handleLogin = (e) =>{
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user")); 
        if(input.email === loggeduser.email && input.password === loggeduser.password){
            localStorage.setItem("loggedIn", true)
            navigate("/");
        } else{
            alert("Wrong Email or Password")
        }
    };

return (
    
    <div className="wrapper">
        <div className="form-box login">
            <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
                <input name="email" value={input.email} onChange={(e) =>setInput({...input,[e.target.name]: e.target.value,})} type="text" placeholder="Email Id" required />
                <img src={email_icon} className="icon"/>
            </div>
                <div className="input-box">
                    <input name="password" value={input.password} onChange={(e) =>setInput({...input,[e.target.name]: e.target.value,})} type="password" placeholder="Password" required/>
                    <img src={pswd_icon} className="icon"/> 
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#"> Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                {/* <div className="signup-link">
                    <p>Don't have an account? 
                        <a onClick={() => navigate('/signup')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                            Sign Up
                        </a></p>
                </div> */}
            </form>
        </div>
    </div>
)
}

export default Login