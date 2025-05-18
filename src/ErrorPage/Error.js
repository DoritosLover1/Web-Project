import './Error.css';
import MainHeader from '../HeaderSide/MainHeader';
import FooterCreate from '../FooterSide/MainFooter';
import error404 from "..//assets/backgrounds/background_404.png";
export default function Error() {
    return(
        <div>
            <MainHeader></MainHeader>
            <div className='d-flex justify-content-center align-items-center flex-grow-1 body-of-error-wrapper'>
                <div className='text-center'>
                    <img src={error404} alt="Error Icon"/>
                    <h1>Oops! Page not found</h1>
                    <p className='body-of-error-text'>The page you are looking for might have been removed or temporarily unavailable.</p>
                    <button type='button' className='btn btn-danger my-2' style={{fontSize: 20}}>Back to HomePage</button>
                </div>
            </div>
            <FooterCreate></FooterCreate>
        </div>
    );
}