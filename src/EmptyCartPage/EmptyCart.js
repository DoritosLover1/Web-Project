import './EmptyCart.css';
import picture from "..//assets/backgrounds/background_emptycart.png";

export default function EmptyCart(){
    return(
        <div>
            <div className='d-flex justify-content-center align-items-center flex-grow-1 body-of-emptycart-wrapper'>
                <div className='text-center image-container'>
                    <img src={picture} alt="Error Icon"/>
                    <h1>Your cart is empty and sad :&#40;</h1>
                    <p style={{color: "#807D7E"}}>Add something to make it happy!</p>
                    <button type='button' className='btn btn-danger my-2 continue-btn' style={{fontSize: 20}}>Continue Shopping</button>
                </div>
            </div>
        </div>
    );
}