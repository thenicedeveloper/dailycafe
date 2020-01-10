import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../redux/product/product.actions";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

class SideBar extends Component {

  render() {
    let getProducts = this.props.getProducts;

    return (
      <div className="sidebar-container">
        <h3>Products</h3>
        <ul className="sidebar-ul">
          <li className="sidebar-li" onClick={() => getProducts("Hot Coffees")}>
            <NavLink
              className="fancy-link"
              to="/product"
            >
              Hot Coffees
            </NavLink>
          </li>
          <li className="sidebar-li" onClick={() => getProducts("Hot Teas")}>
            <NavLink
              className="fancy-link"
              to="/product"
            >
              Hot Teas
            </NavLink>
          </li>
          <li className="sidebar-li" onClick={() => getProducts("Hot Drinks")}>
            <NavLink
              className="fancy-link"
              to="/product"
            >
              Hot Drinks
            </NavLink>
          </li>
          <li className="sidebar-li" onClick={() => getProducts("Cold Coffees")}>
            <NavLink
              className="fancy-link"
              to="/product"
            >
              Cold Coffees
            </NavLink>
          </li>
          <li className="sidebar-li" onClick={() => getProducts("Cold Drinks")}>
            <NavLink
              className="fancy-link"
              to="/product"
            >
              Cold Drinks
            </NavLink>
          </li>
          <li className="sidebar-li" onClick={() => getProducts("Juices")}>
            <NavLink
              className="fancy-link"
              to="/product"
            >
              Juices
            </NavLink>
          </li>
          <li className="sidebar-li" onClick={() => getProducts("Baked Goods")}>
            <NavLink
              className="fancy-link"
              to="/product"
            >
              Baked Goods
            </NavLink>
          </li>
          <li className="sidebar-li" onClick={() => getProducts("Snacks")}>
            <NavLink
              className="fancy-link"
              to="/product"
            >
              Snacks & Sweets
            </NavLink>
          </li>
          <li className="sidebar-li" onClick={() => getProducts("Yogurts")}>
            <NavLink
              className="fancy-link"
              to="/product"
            >
              Yogurt & Custard
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProducts: category => dispatch(getProducts(category))
})

export default connect(null, mapDispatchToProps)(SideBar);