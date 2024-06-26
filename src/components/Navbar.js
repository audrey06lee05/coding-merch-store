// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // for hyper links to change pages
import "./Navbar.css";
import { IoCartOutline } from "react-icons/io5"; //cart icon

// links to pages
const Navbar = () => {
  return (
    <nav className="navbar">
      <a>
        <Link to="/">Home</Link>
      </a>

      <a>
        <Link to="/product">Products</Link>
      </a>

      <a>
        <Link to="/about">About</Link>
      </a>

      <a>
        <Link to="/contact">Contact</Link>
      </a>

      <Link to="/cart" id="cart">
        <IoCartOutline className="cart-icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
