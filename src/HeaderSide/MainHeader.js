import './MainHeader.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '..//assets/icon/brand_icon.png';

export default function MainHeader() {
  const [expanded, setExpanded] = useState(false);
  const [openBar, setOpenBar] = useState(false);

  return (
    <div>
      <nav className="head-bar navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo}alt="Logo" height="130" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarContent"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarContent">
            <div className={`flex-grow-1 collapse navbar-collapse ${openBar ? "show" : ""}`} id="searchBarContent">
              <form className="d-flex mx-auto" role="search">
                <input
                  className="form-control me-2"
                  name="searchBar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ minWidth: 0, maxWidth: 600 , width: 600}}
                />
              </form>
            </div>
            <ul className="d-flex navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="bi bi-person" style={{ fontSize: 25 }}></i>
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setOpenBar(!openBar)}>
                  <i className="bi bi-search" style={{ fontSize: 25 }}></i>
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="bi bi-cart" style={{ fontSize: 25 }}></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="text-center nav justify-content-between bg-white mx-3">
        <li className="nav-item">
          <Link className="nav-link" style={{color: '#4A494D'}} to="#">FORMATS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: '#4A494D'}} to="#">GENRE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: '#4A494D'}} to="#">ARTISTS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: '#4A494D'}} to="#">SALE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: '#4A494D'}} to="#">NEW ARRIVAL</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: '#4A494D'}} to="#">TOP SELLERS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: '#4A494D'}} to="#">GUIDES</Link>
        </li>
      </ul>
    </div>
  );
}