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
      <div className="container-fluid bg-white">
        <ul className="nav bg-white row">
          <li className="nav-item col-md col-sm col text-center padding-remover">
            <Link className="nav-link link-color" to="#">FORMATS</Link>
          </li>
          <li className="nav-item col-md col-sm col text-center">
            <Link className="nav-link link-color" to="#">GENRE</Link>
          </li>
          <li className="nav-item col-md col-sm col text-center">
            <Link className="nav-link link-color" to="#">ARTISTS</Link>
          </li>
          <li className="nav-item col-md col-sm col text-center">
              <Link className="nav-link link-color" to="#">SALE</Link>
          </li>
          <li className="nav-item col-md col-sm col text-center">
              <Link className="nav-link link-color" to="#">NEW ARRIVAL</Link>
          </li>
          <li className="nav-itemcol-md col-sm col text-center">
              <Link className="nav-link link-color" to="#">TOP SELLERS</Link>
          </li>
          <li className="nav-item col-md col-sm col text-center">
            <Link className="nav-link link-color" to="#">GUIDES</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}