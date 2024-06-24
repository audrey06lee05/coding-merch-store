// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Software Engineer Unisex Hoodie",
    price: 64.99,
  },
  {
    id: 2,
    name: "Front-end Back-end Developer Unisex Hoodie",
    price: 64.99,
  },
  {
    id: 3,
    name: "Software Engineer Unisex T-shirt",
    price: 44.99,
  },
  {
    id: 4,
    name: "Front-end Back-end Unisex T-shirt",
    price: 44.99,
  },
];

const HomePage = () => {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <a>
              <img src=""></img>
            </a>
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
            </Link>
            <p>USD{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
