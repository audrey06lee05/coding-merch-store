// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import product1Image from "../Img/SWE_black_hoodie.JPG";
import product2Image from "../Img/SWE_navy_hoodie.JPG";
import product3Image from "../Img/FEBE_black_hoodie_front.JPG";
import product4Image from "../Img/FEBE_grey_hoodie_front.JPG";
import product5Image from "../Img/FEBE_navy_hoodie_front.JPG";
import product6Image from "../Img/SWE_black_tshirt.JPG";
import product7Image from "../Img/FEBE_black_tshirt_front.JPG";

// product list
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

// display products in homepage
const HomePage = () => {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.img}
                style={{ width: "200px", height: "auto" }}
              />
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
