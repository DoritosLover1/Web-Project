import React, { useState } from 'react';
import './SignUp.css';
import { FaGoogle, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

import picture from '../assets/backgrounds/background_signup.png';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    
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
                        <div className='signup-form-container p-4'>
                            <h1 className="signup-title">Sign Up</h1>
                            <p className="signup-subtitle">Create your account to get started</p>
                            
                            <button className="social-signup-btn google-btn">
                                <FaGoogle className="social-icon" />
                                Continue With Google
                            </button>
                            <button className="social-signup-btn twitter-btn">
                                <FaTwitter className="social-icon" />
                                Continue With Twitter
                            </button>
                            
                            <div className="divider">
                                <span className="divider-line"></span>
                                <span className="divider-text">OR</span>
                                <span className="divider-line"></span>
                            </div>
                            
                            <form>
                                <div className="form-group">
                                    <label htmlFor="firstName">First name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        className="form-control"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="lastName">Last name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        className="form-control"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                
                                <div className="form-group password-group">
                                    <div className="password-label-container">
                                        <label htmlFor="password">Password</label>
                                        <span 
                                            className="password-toggle" 
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />} 
                                            {showPassword ? "Hide" : "Show"}
                                        </span>
                                    </div>
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        id="password" 
                                        className="form-control"
                                        placeholder="Create a password"
                                    />
                                </div>
                                
                                <div className="form-group password-group">
                                    <div className="password-label-container">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <span 
                                            className="password-toggle" 
                                            onClick={toggleConfirmPasswordVisibility}
                                        >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />} 
                                            {showConfirmPassword ? "Hide" : "Show"}
                                        </span>
                                    </div>
                                    <input 
                                        type={showConfirmPassword ? "text" : "password"} 
                                        id="confirmPassword" 
                                        className="form-control"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                                
                                <div className="checkbox-group">
                                    <input 
                                        type="checkbox" 
                                        id="terms" 
                                        className="form-check-input"
                                    />
                                    <label htmlFor="terms" className="checkbox-label">
                                        I agree to the <Link to="#" className="terms-link">Terms of Service</Link> and <Link to="#" className="terms-link">Privacy Policy</Link>
                                    </label>
                                </div>
                                
                                <button type="submit" className="signup-btn">
                                    Create Account
                                </button>
                            </form>
                            
                            <div className="signin-prompt">
                                Already have an account? <Link to="/sign-in" className="signin-link">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

