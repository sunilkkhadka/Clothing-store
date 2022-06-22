import React from "react";
import "./AllProducts.scss";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const allProducts = useSelector((state) => state.clothes.clothe);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <div className="product-component">
      <h1>Just For You</h1>
      <Slider {...settings}>
        {allProducts.map((product) => {
          return (
            <Link to={"/"} className="product-card">
              <div className="product-img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-description">
                <h5>{product.category}</h5>
                <h1>{product.title.substr(0, 40)}</h1>
                <h2>Rs. {product.price}</h2>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default AllProducts;
