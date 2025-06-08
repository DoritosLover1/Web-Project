import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import Error from './ErrorPage/Error';
import SignIn from './SignInPage/SignIn';
import SignUp from './SignUpPage/SignUp';
import ProductPage from './ProductPage/ProductPage';

import MainHeader from '..//src/HeaderSide/MainHeader';
import ResetPass from '..//src/ResetPasswordPage/ResetPass';
import FooterCreate from '..//src/FooterSide/MainFooter';
import CheckEmailPage from './CheckEmailPage/CheckEmailPage';
import VerificationPage from './VerificationPage/VerificationPage';
import ChangePasswordPage from './ChangePasswordPage/ChangePasswordPage';
import EmptyCart from './EmptyCartPage/EmptyCart';
import OrderConfirmPage from './OrderConfirmPage/OrderConfirmPage';
import MainPage from './MainPage/Main';
import ContactPage from './ContactPage/Contact';
import CheckOut from './CheckOutPage/CheckOut';
import ContactDetails from './ContactDetailsPage/ContactDetails';
import AddAddressPage from './AddAddressPage/AddAddressPage';
import WishlistPage from './WishlistPage/WishlistPage';
import EmptyWishlistPage from './EmptyWishlistPage/EmptyWishlistPage';
import OrderPage from './OrdersPage/OrdersPage';
import OrderDetailsPage from './OrderDetailsPage/OrderDetailsPage';

function App() {
  return (
    <Router>
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <MainHeader></MainHeader>
          <main style={{flex: 1, display:'flex', flexDirection: 'column'}}>
              <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path="/sign-in" element={<SignIn/>}></Route>
                <Route path="/sign-up" element={<SignUp/>}></Route>
                <Route path="/404-error" element={<Error/>}></Route>
                <Route path='/reset-password' element={<ResetPass/>}></Route>
                <Route path='/check-email' element={<CheckEmailPage/>}></Route>
                <Route path='/code-verification' element={<VerificationPage/>}></Route>
                <Route path='/change-password' element={<ChangePasswordPage/>}></Route>
                <Route path='/empty-cart' element={<EmptyCart/>}></Route>
                <Route path='/confirm-order' element={<OrderConfirmPage/>}></Route>
                <Route path='/contact-us' element={<ContactPage/>}></Route>
                <Route path='/product-page' element={<ProductPage/>}></Route>
                <Route path='/checkout-page' element={<CheckOut/>}></Route>
                <Route path="/contact-details" element={<ContactDetails></ContactDetails>}></Route>
                <Route path="/add-address" element={<AddAddressPage/>}></Route>
                <Route path='/wishlist' element={<WishlistPage></WishlistPage>}></Route>
                <Route path='/empty-wishlist' element={<EmptyWishlistPage></EmptyWishlistPage>}></Route>
                <Route path="/order-page" element={<OrderPage></OrderPage>}></Route>
                <Route path="/order-details" element={<OrderDetailsPage></OrderDetailsPage>}></Route>
              </Routes>
          </main>
        <FooterCreate></FooterCreate>
      </div>
    </Router>
);
}

export default App;