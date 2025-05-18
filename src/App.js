import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from './HomePage/Home';
//import Error from './ErrorPage/Error';
import SignIn from './SignInPage/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}>
        </Route>
      </Routes>
    </Router>
);
}

export default App;

