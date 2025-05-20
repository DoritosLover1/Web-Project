import './CheckEmailPage.css';
import { Link } from "react-router-dom";

import picture from '../assets/backgrounds/background_checkemail.png';

export default function CheckEmailPage(){
    return(
        <div>
            <div className='container-fluid p-0'>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <div className='img-container'>
                            <img className='img-fluid w-100 h-100' src={picture} alt="Picture"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='check-email-container d-flex justify-content-center p-5'>
                            <h1>Check Email</h1>
                            <p className='text-color'>Please check your email inbox and click on the provided link to reset your
                                password.<br></br> If you don't receive email, <Link href='#' className='resend-link'style={{fontSize: 14, color: '#e53935'}}>Click here to resend</Link>
                            </p>
                            {/*Buraya Login Page'e yönlendirme yapacağız yani SignInPage*/}
                            <div className='pt-2' style={{fontSize: 14, color: '#3C4242'}}>
                               &lt;<Link href="#" className='login-link'> Back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}