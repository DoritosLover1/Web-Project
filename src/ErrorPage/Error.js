import './Error.css';
import error404 from "..//assets/backgrounds/background_404.png";
export default function Error() {
    return(
        <div>
            <div className='d-flex justify-content-center align-items-center flex-grow-1 body-of-error-wrapper'>
                <div className='text-center'>
                    <div className='img-container'>
                        <img src={error404} alt="Error Icon"/>
                    </div>
                    <h1>Oops! Page not found</h1>
                    <p className='body-of-error-text' style={{color: "#807D7E"}}>The page you are looking for might have been removed or temporarily unavailable.</p>
                    <button type='button' className='btn btn-danger my-2 back-to-btn' style={{fontSize: 20}}>Back to HomePage</button>
                </div>
            </div>
        </div>
    );
}