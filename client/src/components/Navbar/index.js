import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./style.css";


function Navbar() {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            Farm Direct
        </Link>
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
                to="/checkout"
                className={window.location.pathname === "/checkout" ? "nav-link active" : "nav-link"}
                >
                <FaShoppingCart />
                </Link>
            </li>
        </ul>
    </div>
    </nav>
);
}

export default Navbar;
