import React from "react";
import { Link } from "react-router-dom";
import "./bg.css";

const Navbar = (prop) => {

  return (
    <div>
      <nav 
        className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
        
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${prop.mode==='light'?'dark':'light'}`} to="/about">
                  About
                </Link> 
              </li>
            </ul>
            <div className={`form-check form-switch text-${prop.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input mx-1"
                onClick={prop.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label mx-2"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Darkmode
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;