import React, { useState } from 'react';
import './SignIn.css';
import { FaGoogle, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../ScriptsFolder/AuthContext';
import Axios from "axios";
import picture from '../assets/backgrounds/background_signin.png';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { login } = useAuth(); 
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        Axios.post("http://localhost:5000/sign-in", {  
            email: email,
            password: password,
        })
        .then((response) => {
            console.log("Backend response:", response.data);
            
            if(response.data.message) {
                setError(response.data.message);
                console.log("Giriş başarısız:", response.data.message);
            } else if(response.data.user && response.data.token) {
                console.log("Giriş başarılı!");
                
                login(response.data.user, response.data.token);
                
                navigate("/");
            } else {
                setError("Beklenmeyen sunucu yanıtı");
            }
        })
        .catch((error) => {
            console.error("Login error:", error);
            if (error.response) {
                setError(error.response.data.message || "Sunucu hatası");
            } else if (error.request) {
                setError("Sunucuya bağlanılamıyor. Lütfen tekrar deneyin.");
            } else {
                setError("Bir hata oluştu. Lütfen tekrar deneyin.");
            }
        })
        .finally(() => {
            setLoading(false);
        });
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
                        <div className='signin-form-container p-4'>
                            <h1 className="signin-title">Sign In Page</h1>
                            {error && (
                                <div className="alert alert-danger" role="alert" style={{
                                    color: '#721c24',
                                    backgroundColor: '#f8d7da',
                                    border: '1px solid #f5c6cb',
                                    padding: '10px',
                                    borderRadius: '4px',
                                    marginBottom: '15px'
                                }}>
                                    {error}
                                </div>
                            )}
                            
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
                            
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <div className="forgot-password-container">
                                    <Link to="#" className="forgot-password-link">Forget your password</Link>
                                </div>
                                <button 
                                    type="submit" 
                                    className="signin-btn"
                                    disabled={loading}
                                >
                                    {loading ? "Signing In..." : "Sign In"}
                                </button>
                            </form>
                            
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