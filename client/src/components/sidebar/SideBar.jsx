import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <h3>Products</h3>
      <ul className="sidebar-ul">
        <li className="sidebar-li">
          <NavLink className="fancy-link" to="/product">
            Hot Coffee
          </NavLink>
        </li>
        <li className="sidebar-li">
          <NavLink className="fancy-link" to="/product">
            Hot Tea
          </NavLink>
        </li>
        <li className="sidebar-li">
          <NavLink className="fancy-link" to="/product">
            Hot Chocolate
          </NavLink>
        </li>
        <li className="sidebar-li">
          <NavLink className="fancy-link" to="/product">
            Iced Coffee
          </NavLink>
        </li>
        <li className="sidebar-li">
          <NavLink className="fancy-link" to="/product">
            Iced Teas
          </NavLink>
        </li>
        <li className="sidebar-li">
          <NavLink className="fancy-link" to="/product">
            Juices
          </NavLink>
        </li>
        <li className="sidebar-li">
          <NavLink className="fancy-link" to="/product">
            Bakery
          </NavLink>
        </li>
        <li className="sidebar-li">
          <NavLink className="fancy-link" to="/product">
            Snacks & Sweets
          </NavLink>
        </li>
        <li className="sidebar-li">
          <NavLink className="fancy-link" to="/product">
            Yogurt & Custard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;