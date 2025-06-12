import React, { useState } from 'react';
import './SignUp.css';
import { FaGoogle, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

import  Axios from "axios";

import picture from '../assets/backgrounds/background_signup.png';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [phonenum, setPhoneNum] = useState("");
    const [address, setAddresses] = useState("");

    const navigate = useNavigate();
    
    const register = (e) => {
    e.preventDefault();
    if (
        !firstName.trim() ||
        !lastName.trim() ||
        !email.trim() ||
        !password.trim() ||
        !birthdate.trim() ||
        !gender.trim() ||
        !phonenum.trim() ||
        !address.trim()
    ) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    Axios.post("http://localhost:5000/sign-up", {  
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        birth_date: birthdate,
        gender: gender,
        phone_number: phonenum,
        customer_address: address
    })
    .then((response) => {
        console.log(response);
        if(response.data.message){
            alert("Kayıt başarısız: " + response.data.message);
        } else {
            alert("Kayıt başarılı!");
            navigate("/sign-in");
        }
    })
    .catch(err => {
        console.error("Hata:", err);
        alert("Sunucu hatası.");
    });
    };

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
                        <div className='signup-form-container'>
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
                                        name="firstName"
                                        className="form-control"
                                        placeholder="Enter your first name"
                                        onChange={(e) => {setFirstName(e.target.value)}}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="lastName">Last name</label>
                                    <input 
                                        type="text" 
                                        id="lastName"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Enter your last name"
                                        onChange={(e) => {setLastName(e.target.value)}}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        onChange={(e) => {setEmail(e.target.value)}}
                                        required
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
                                        name="password"
                                        className="form-control"
                                        placeholder="Create a password"
                                        onChange={(e) => {setPassword(e.target.value)}}
                                        required
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
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="birthdate">Birth Date</label>
                                    <input 
                                        type="date" 
                                        id="date"
                                        name="date"
                                        className="form-control"
                                        onChange={(e) => {setBirthDate(e.target.value)}}
                                        required
                                    />
                                </div>   

                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <input 
                                        type="text" 
                                        id="gender"
                                        name="gender"
                                        className="form-control"
                                        placeholder="M or F"
                                        pattern="[MF]"  // sadece M ya da F kabul edilir
                                        title="Please enter only 'M' or 'F'"
                                        onChange={(e) => { setGender(e.target.value) }}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phonenum">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="tel"
                                        name="tel"
                                        className="form-control"
                                        placeholder='123-45-678'
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        onChange={(e) => {setPhoneNum(e.target.value)}}
                                        required
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='address'>Address</label>
                                    <input
                                        type='text'
                                        id="address"
                                        name="address"
                                        className='form-control'
                                        placeholder='Enter your home address'
                                        onChange={(e) =>{setAddresses(e.target.value)}}
                                        required
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
                                
                                <button type="submit" className="signup-btn" onClick={register}>
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