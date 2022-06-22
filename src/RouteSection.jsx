import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

//IMPORTING PAGES
import HomePage from "./pages/HomePage";

const RouteSection = () => {
  return (
    <div className="routes">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSection;
