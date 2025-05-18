import React, { useState } from 'react';
import './SignIn.css';
import { FaGoogle, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

import picture from '../assets/backgrounds/background_signin.png';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    return(
        <div className='signin-page'>
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
                                <label htmlFor="username">User name or email address</label>
                                <input 
                                    type="text" 
                                    id="username" 
                                    className="form-control"
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
                                />
                            </div>
                            <div className="forgot-password-container">
                                <Link href="#" className="forgot-password-link">Forget your password</Link>
                            </div>
                            <button type="submit" className="signin-btn">
                                Sign In
                            </button>
                            <div className="signup-prompt">
                                Don't have an account? <Link href="#" className="signup-link">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}