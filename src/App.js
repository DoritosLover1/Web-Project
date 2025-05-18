import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from './HomePage/Home';
import Error from './ErrorPage/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Error/>}>
        </Route>
      </Routes>
    </Router>
);
}

export default App;

