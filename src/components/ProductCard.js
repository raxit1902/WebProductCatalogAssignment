
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <input type="number" placeholder="Quantity" />
    </div>
  );
};

export default ProductCard;
    