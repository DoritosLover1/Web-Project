import './MainFooter.css';
import { Link } from "react-router-dom";

const FooterCreate = () => {
  return (
    <footer className="footer footer-sticky">
      <div className="container">
        <div className="d-flex justify-content-between align-content-center">
          <div className="col-md-6">
            <h5>CerrahVINLY</h5>
            <p>Since 1890, part of your family</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className="custom-link" to="/">Main Page</Link></li>
              <li><Link className="custom-link" to="/404-error">About Us</Link></li>
              <li><Link className="custom-link" to="/404-error">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <address>
              <p>Istanbul University<br/>
              Istanbul/Turkey<br/>
              Phone: (123) 456-789</p>
            </address>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>© {new Date().getFullYear()} CerrahVINLY. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCreate;