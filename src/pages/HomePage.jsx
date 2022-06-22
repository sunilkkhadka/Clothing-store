import React from "react";
import AllProducts from "../components/AllProducts/AllProducts";
import Menu from "../components/Menu/Menu";
import Slide from "../components/Slider/Slide";

const HomePage = () => {
  return (
    <div className="home-container">
      <Menu />
      <Slide />
      <AllProducts />
    </div>
  );
};

export default HomePage;
