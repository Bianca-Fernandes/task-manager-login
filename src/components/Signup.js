import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './lol.css';
import user_icon from '../assets/user_black.png'
import email_icon from '../assets/email_black.png'
import pswd_icon from '../assets/lock_black.png'
import { Auth0Provider } from "@auth0/auth0-react";

const Signup = () => {
    const navigate = useNavigate();

    const[input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    // to store value
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("./login");
    };


return (
    <div className="wrapper">
        <div className="form-box signup">
            <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="input-box">
                <input name="name" value={input.name} onChange={(e) =>setInput({...input,[e.target.name]: e.target.value,})} type="text" placeholder="Username" required />
                <img src={user_icon} className="icon"/>
            </div>

            <div className="input-box">
                <input name="email" value={input.email} onChange={(e) =>setInput({...input,[e.target.name]: e.target.value,})} type="text" placeholder="Email Id" required />
                <img src={email_icon} className="icon"/>
            </div>

            <div className="input-box">
                <input name="password" value={input.password} onChange={(e) =>setInput({...input,[e.target.name]: e.target.value,})} type="password" placeholder="Password" required/>
                <img src={pswd_icon} className="icon"/> 
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" required/>I agree to the terms & conditions</label>
            </div>

            <button type="submit">Sign Up</button>

            </form>
        </div>
    </div>
)
}

export default Signup