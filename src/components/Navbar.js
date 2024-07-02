// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // for hyper links to change pages
import "./Navbar.css";
import { IoCartOutline } from "react-icons/io5"; //cart icon

// links to pages
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/product" className="nav-link">
        Products
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link to="/cart" id="cart" className="nav-link">
        <IoCartOutline className="cart-icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
