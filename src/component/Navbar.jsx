import React from "react";
import logo from "../assets/hamburgerlogo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid nav-bar">
        <Link className="navbar-brand leftSide" to="/">
          <img src={logo} alt="logo" width={80} />
          <h1>BURGERCİ</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link navlink" to="/">
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link navlink" to="/menu">
                Menü
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link navlink" to="/about">
                Hakkımızda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link navlink" to="/contact">
                İletişim
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
