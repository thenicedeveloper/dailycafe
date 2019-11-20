import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Comp_Icon from "../../assets/images/coffeecup.png";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    menuActive: false
  };

  handleMenuClick = () => {
    this.setState({
      menuActive: (this.menuActive = !this.menuActive),
      currentUser: null
    });
  };

  render() {
    return (
      <header className="header-container">
        <h2 className="logo">
          <img className="h2-image" src={Comp_Icon} alt="Logo" />
        </h2>

        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle "
          onClick={this.handleMenuClick}
        />
        <nav>
          <ul className="nav-ul">
            <li className="nav-li">
              <NavLink
                className="li-navlink"
                to="/home"
                // activeStyle={{ color: "green", fontWeight: "bold" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                className="li-navlink"
                to="/home"
                // activeStyle={{ color: "green", fontWeight: "bold" }}
              >
                Menu
              </NavLink>
              <ul className="menu-dropdown dropdown">
                <li className="nav-li">
                  <NavLink className="li-navlink" to="/home">
                    Hot Coffee
                  </NavLink>
                </li>
                <li className="nav-li">
                  <NavLink className="li-navlink" to="/home">
                    Hot Tea
                  </NavLink>
                </li>
                <li className="nav-li">
                  <NavLink className="li-navlink" to="/home">
                    Hot Chocolate
                  </NavLink>
                </li>
                <li className="nav-li">
                  <NavLink className="li-navlink" to="/home">
                    Iced Coffee
                  </NavLink>
                </li>
                <li className="nav-li">
                  <NavLink className="li-navlink" to="/home">
                    Iced Teas
                  </NavLink>
                </li>
                <li className="nav-li">
                  <NavLink className="li-navlink" to="/home">
                    Juices
                  </NavLink>
                </li>
                <li className="nav-li">
                  <NavLink className="li-navlink" to="/home">
                    Bakery
                  </NavLink>
                </li>
              </ul>

              {/* 
              coffee
              <div className="dropdown-hot-coffee-content">
                <a href="#">American Coffee</a>
                <a href="#">Cappuccino</a>
                <a href="#">Esspresso</a>
                <a href="#">Latte</a>
              </div> */}
            </li>

            {/* <li>
              <NavLink
                to="#"
                // className="btn-flat nav_link"
                activeStyle={{ color: "green", fontWeight: "bold" }}
                
              >
                Hot Tea
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                // className="btn-flat nav_link"
                activeStyle={{ color: "green", fontWeight: "bold" }}
              >
                Cold Drinks
              </NavLink>
            </li> */}

            {this.state.currentUser ? (
              <li className="nav-li">
                <NavLink
                  className="li-navlink"
                  to="/signin"
                  // activeStyle={{ color: "green", fontWeight: "bold" }}
                >
                  Sign In
                </NavLink>
              </li>
            ) : (
              <li className="nav-li">
                <NavLink className="li-navlink" to="/auth/logout">
                  Sign Out
                </NavLink>
              </li>
            )}

            <li className="nav-li">
              <CartIcon></CartIcon>
            </li>
          </ul>
          {this.props.hidden ? null : <CartDropdown />}
        </nav>

        <label
          htmlFor="nav-toggle"
          className={
            "nav-toggle-label " + (this.state.menuActive ? "active" : "")
          }
        >
          <span></span>
        </label>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(NavBar);
