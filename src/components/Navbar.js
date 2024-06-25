// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // for hyper links to change pages

// links to pages
const Navbar = () => {
  return (
    <nav>
      <h1>My Store</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
