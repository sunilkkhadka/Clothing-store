import React from "react";
import "./ProductDesc.scss";

import { useSelector } from "react-redux";

const ProductDesc = () => {
  const product = useSelector((state) => state.clothes.productById);
  console.log(product);

  return (
    <div className="product-desc-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <h3>{product.description}</h3>
      </div>
    </div>
  );
};

export default ProductDesc;
