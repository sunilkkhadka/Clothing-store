import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

//IMPORTING PAGES
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

const RouteSection = () => {
  return (
    <div className="routes">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productID" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSection;
