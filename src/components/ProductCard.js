// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-cards">
      <img
        src={product.img}
        alt={product.name}
        style={{ width: "200px", height: "auto" }}
      />
    </Link>
  );
};

export default ProductCard;
