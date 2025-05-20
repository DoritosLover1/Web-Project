import React, { useState } from 'react';
import './ResetPass.css';
import { Link } from "react-router-dom";

import picture from '../assets/backgrounds/background_resetpassw.png';

export default function ResetPass() {
    /*
        Buranın amacı veritabanı ile etkileşime girip geçerli email
        değilse buradan o tam email butonunun altına yazım yapılacak.
    */
    const[validEmail, setValidEmail] = useState(false);

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
                        <div className='reset-password-container d-flex justify-content-center p-5'>
                            <h1>Reset Your Password</h1>
                            <p className='text-color'>Enter your email and we'll send you a link to your password. Please check it.</p>
                            <div className="form-group py-3-0">
                                <label htmlFor="username">Email</label>
                                <input 
                                    type="email" 
                                    id="username" 
                                    className="form-control"
                                />
                            </div>
                            {/*Buraya bu yazı gelecek. Olay veritabanı ile etkileşim olacaktır.*/}
                            <button type='button' className='btn reset-btn'>
                                Send
                            </button>
                            <div className='pt-2' style={{fontSize: 14, color: '#3C4242'}}>
                                <Link href="#" className='login-link'>Back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}