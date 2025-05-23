import './OrderConfirmPage.css';
import picture from "..//assets/backgrounds/background_orderconfirmed.png";

export default function OrderConfirmPage(){
    return(
        <div>
            <div className='d-flex justify-content-center align-items-center flex-grow-1 body-of-confirm-wrapper'>
                <div className='text-center'>
                    <div className='image-container'>
                        <img src={picture} alt="Confirm background"/>
                        <div>
                            <button type='button' className='btn btn-danger my-2 back-to-btn'>Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}