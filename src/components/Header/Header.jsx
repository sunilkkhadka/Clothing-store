import React from "react";
import "./Header.scss";
import { useEffect } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux/es/exports";

import {
  getAllProducts,
  getAllCategories,
  getSliderProducts,
} from "../../features/clotheStore/ClotheStore";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    dispatch(getSliderProducts());
  }, []);

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <Link to={"/"}>My store</Link>
        </div>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search..." />
            <button>
              <FaSearch className="search-btn" />
            </button>
          </form>
        </div>
        <div className="user-actions">
          <div className="user-cart">
            <FaShoppingCart /> Cart
          </div>
          <div className="user-login-logout">
            <FaUser className="user-icon" /> Login
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
