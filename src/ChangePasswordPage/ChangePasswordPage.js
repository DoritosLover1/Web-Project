import './ChangePasswordPage.css';
import picture from '../assets/backgrounds/background_changepassw.png';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function ChangePasswordPage(){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
        
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setPasswordsMatch(value === password || value === '');
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
                                className='img img-fluid w-100 h-100 object-fit-cover'
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='change-passw-form-container d-flex flex-column justify-content-center p-4 p-md-5'>
                            <h1>Create New Password</h1>
                            <p className='text-secondary'>Your new password must be different from previous used passwords.</p>
                            
                            {/* Password Field */}
                            <div className="my-3">
                                <label htmlFor="password" className="d-block mb-2 text-dark">Password</label>
                                <div className="position-relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password" 
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span 
                                        className="password-toggle" 
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <small className="form-text text-muted">Must be at least 8 characters.</small>
                            </div>
                            
                            {/* Confirm Password Field */}
                            <div className="my-3">
                                <label htmlFor="confirmPassword" className="d-block mb-2 text-dark">Confirm Password</label>
                                <div className="position-relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword" 
                                        className="form-control"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                    <span 
                                        className="password-toggle" 
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                {!passwordsMatch && (
                                    <small className="form-text text-danger">
                                        New password and confirm new password do not match
                                    </small>
                                )}
                            </div>
                            
                            <div className="mt-4">
                                <button className="btn btn-danger px-4 py-2" style={{fontWeight: 500}}>Reset Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}