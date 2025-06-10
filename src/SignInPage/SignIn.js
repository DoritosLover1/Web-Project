import React, { useState } from 'react';
import './SignIn.css';
import { FaGoogle, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

import  Axios from "axios";

import picture from '../assets/backgrounds/background_signin.png';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        // Axios ile React tarafında server'a ulaşılır
        // Axios, HTTP istemcisi olarak kullanılır.
        //Axios, API istekleri yapmanıza olanak tanıyan bir HTTP istemcisidir.
        Axios.post("http://localhost:5000/sign-in", {  
            email: email,
            password: password,
        })
        .then((response) => {
            console.log(response);
            if(response.data.message){
                console.log("OLMADI");
            }else{
                console.log("OLDU");
                navigate("/");
            }

        })
    }

    return(
        <div>
            <div className='container-fluid p-0'>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <div className='img-container'>
                            <img
                                src={picture} 
                                alt="Picture" 
                                className='img-fluid w-100 h-100'
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='signin-form-container p-4'>
                            <h1 className="signin-title">Sign In Page</h1>
                            <button className="social-signin-btn google-btn">
                                <FaGoogle className="social-icon" />
                                Continue With Google
                            </button>
                            <button className="social-signin-btn twitter-btn">
                                <FaTwitter className="social-icon" />
                                Continue With Twitter
                            </button>
                            <div className="divider">
                                <span className="divider-line"></span>
                                <span className="divider-text">OR</span>
                                <span className="divider-line"></span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input 
                                    type="text" 
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group password-group">
                                <div className="password-label-container">
                                    <label htmlFor="password">Password</label>
                                    <span 
                                        className="password-toggle" 
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />} Hide
                                    </span>
                                </div>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    id="password" 
                                    className="form-control"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="forgot-password-container">
                                <Link href="#" className="forgot-password-link">Forget your password</Link>
                            </div>
                            <button type="submit" className="signin-btn" onClick={login}>
                                Sign In
                            </button>
                            <div className="signup-prompt">
                                Don't have an account? <Link to="/sign-up" className="signup-link"> Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}