import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  const menu_data = useSelector((state) => state.clothes.categories);

  let renderMenu = "";
  renderMenu =
    menu_data.length === 0 ? (
      <div>Menu Loading...</div>
    ) : (
      <div className="menu-list">
        {menu_data.map((menu, index) => {
          return (
            <Link to={"/"} key={index} className="menu-links">
              {menu}
            </Link>
          );
        })}
      </div>
    );

  return <div className="menu">{renderMenu}</div>;
};

export default Menu;
