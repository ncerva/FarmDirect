import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import AuthContext from "../../utils/AuthContext";


function Navbar() {
  return (
    <AuthContext.Consumer>{(context) => {
      const { isAuthorized, token, isFarmer, currentUser, setAuthState } = context;

      const handleLogout = (e) => {
        e.preventDefault;
        setAuthState('', false, false, '');
      }
      if (isAuthorized && isFarmer) {
        // navbar start
        return (
          <nav className="navbar navbar-expand-lg navbar-light">
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/results"
                    className={window.location.pathname === "/results" ? "nav-link active" : "nav-link"}
                  >
                    Search Results
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                  >
                    Sign In/ Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/cart"
                    className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}
                  >
                    <FaShoppingCart />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/farmerportal"
                    className={window.location.pathname === "/farmerportal" ? "nav-link active" : "nav-link"}
                  >
                    Farmer Portal
                  </Link>
                </li>
                <li className="nav-item">
                  <p>logged in as {currentUser}</p>
                </li>
                <li>
                  <button className="button is-danger is-light" onClick={handleLogout}>Sign Out</button>
                </li>
              </ul>
            </div>
          </nav>
        )
      } else {
        return (
          <nav className="navbar navbar-expand-lg navbar-light">
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/results"
                    className={window.location.pathname === "/results" ? "nav-link active" : "nav-link"}
                  >
                    Search Results
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                  >
                    Sign In/ Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/cart"
                    className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}
                  >
                    <FaShoppingCart />
                  </Link>
                </li>


                
                <li className="nav-item">
                  <p className="notLogged">{currentUser}</p>
                  {/* <p>NOT AUTHORIZED</p> */}
                </li>
              </ul>
            </div>
          </nav>
        )
      }


    }}
    </AuthContext.Consumer>
  );
}

export default Navbar;
