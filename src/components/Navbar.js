// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // for hyper links to change pages

// links to pages
const Navbar = () => {
  return (
    <nav>
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <h3>
        <Link to="/product">Products</Link>
      </h3>
      <h3>
        <Link to="/about">About</Link>
      </h3>
      <h3>
        <Link to="/contact">Contact</Link>
      </h3>
      <h3>
        <Link to="/cart">Cart</Link>
      </h3>
    </nav>
  );
};

export default Navbar;
