// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-content">
      <div className="footer-links">
        <h3>
          <Link to="/about">About</Link>
        </h3>
        <h3>
          <Link to="/contact">Contact</Link>
        </h3>
      </div>
      <p id="copyright">© Hubble in Orbit 2024, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
