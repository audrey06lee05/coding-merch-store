// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import product1Image from "../Img/SWE_black_hoodie.JPG";
import product2Image from "../Img/SWE_navy_hoodie.JPG";
import product3Image from "../Img/FEBE_black_hoodie_front.JPG";
import product4Image from "../Img/FEBE_grey_hoodie_front.JPG";
import product5Image from "../Img/FEBE_navy_hoodie_front.JPG";
import product6Image from "../Img/SWE_black_tshirt.JPG";
import product7Image from "../Img/FEBE_black_tshirt_front.JPG";
import "./HomePage.css";

const products = [
  {
    id: 1,
    name: "Black - Software Engineer Unisex Hoodie",
    price: 64.99,
    img: product1Image,
  },
  {
    id: 2,
    name: "Navy - Software Engineer Unisex Hoodie",
    price: 64.99,
    img: product2Image,
  },
  {
    id: 3,
    name: "Black - Front-end Back-end Developer Unisex Hoodie",
    price: 64.99,
    img: product3Image,
  },
  {
    id: 4,
    name: "Grey - Front-end Back-end Developer Unisex Hoodie",
    price: 64.99,
    img: product4Image,
  },
  {
    id: 5,
    name: "Navy - Front-end Back-end Developer Unisex Hoodie",
    price: 64.99,
    img: product5Image,
  },
  {
    id: 6,
    name: "Black - Software Engineer Unisex T-shirt",
    price: 44.99,
    img: product6Image,
  },
  {
    id: 7,
    name: "Black - Front-end Back-end Unisex T-shirt",
    price: 44.99,
    img: product7Image,
  },
];

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <p id="welcome-text">Welcome to Hubble In Orbit</p>
          <h1>Discover Coding Merchandise</h1>
          <p>Start your stylish merch store experience</p>
          <div className="header-content-btns">
            <Link to="/product">
              <button>Shop Now</button>
            </Link>
            <Link to="/about">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </header>
      <section className="featured-collection">
        <h2>Featured Collection</h2>
        <p>
          Explore our curated collections of trending merchandise. <br />
          Each piece is designed with style and professionalism.
        </p>
        <div className="product-cards">
          <ProductCard product={products[4]} />
          <ProductCard product={products[5]} />
          <ProductCard product={products[2]} />
        </div>
        <button className="featured-collection-btn">Shop Now</button>
      </section>
    </div>
  );
};

export default HomePage;
