import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./Slide.scss";

const Slide = () => {
  const slider_data = useSelector((state) => state.clothes.slider);
  console.log(slider_data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slider_data.map((data, index) => {
          return (
            <div className="slider-card-container" key={index}>
              <div className="slider-info">
                <div className="slider-product-desc">
                  <h1>{data.title}</h1>
                  <h3>{data.description}</h3>
                  <button>Buy Now</button>
                </div>
                <img src={data.image} alt={data.title} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide;
