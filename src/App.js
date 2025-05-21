import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import Error from './ErrorPage/Error';
import SignIn from './SignInPage/SignIn';

import MainHeader from '..//src/HeaderSide/MainHeader';
import ResetPass from '..//src/ResetPasswordPage/ResetPass';
import FooterCreate from '..//src/FooterSide/MainFooter';
import CheckEmailPage from './CheckEmailPage/CheckEmailPage';
import VerificationPage from './VerificationPage/VerificationPage';
import ChangePasswordPage from './ChangePasswordPage/ChangePasswordPage';

function App() {
  return (
    <Router>
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <MainHeader></MainHeader>
          <main style={{flex: 1, display:'flex', flexDirection: 'column'}}>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/sign-in" element={<SignIn/>}></Route>
                <Route path="/404-error" element={<Error/>}></Route>
                <Route path='/reset-password' element={<ResetPass/>}></Route>
                <Route path='/check-email' element={<CheckEmailPage/>}></Route>
                <Route path='/code-verification' element={<VerificationPage/>}></Route>
                <Route path='/change-password' element={<ChangePasswordPage/>}></Route>
              </Routes>
          </main>
        <FooterCreate></FooterCreate>
      </div>
    </Router>
);
}

export default App;

