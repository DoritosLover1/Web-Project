import React, { use, useState } from 'react';
import './VerificationPage.css';
import { Link } from "react-router-dom";

import picture from '../assets/backgrounds/background_verification.png';

export default function VerificationPage(){

    const [input, setInput] = useState('');

    const handleWithInput = (e) =>{
        const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
        setInput(onlyNumbers);
    }

    return (
        <div>
            <div className='container-fluid p-0'>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <div className='img-container'>
                            <img className='img-fluid w-100 h-100' src={picture} alt="Picture"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='verification-code-container d-flex justify-content-center p-5'>
                            <h1>Verification</h1>
                            <p className='text-color'>
                                Verify your code.
                            </p>
                            <div className='py-3'>
                                <p>Verification Code</p>
                                {/*Burada yapılan şey sadece bu sayfadan alınan verinin düzgünleştirlmesiyle alkalı
                                .Lakin Backend kısmında ekstradan bunu dizayn edeceğiz.*/}
                                <form>
                                    <div className='mb-3'>
                                        <input id='verify-code-place' className='form-control' type='text' value={input} onChange={handleWithInput}/>
                                    </div>
                                </form>
                            </div>
                            <button type='button' className='btn verify-btn'>
                                Verfiy Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}