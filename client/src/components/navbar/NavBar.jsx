import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Comp_Icon from "../../assets/images/coffeecup.png";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
// import { selectCartHidden } from "../../redux/cart/cart.selectors";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    menuActive: false
  };

  handleMenuClick = () => {
    this.setState({
      menuActive: (this.menuActive = !this.menuActive)
    });
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        // Still waiting
        // return waiting;
        return;
      case false:
        return (
          // due to Navlink being a virtual router it will not render the /auth/google route
          <li className="nav-li">
            <NavLink
              to={"/signin"}
              // className="btn-flat nav_link"
              className="li-navlink"
              activeStyle={{ color: "green", fontWeight: "bold" }}
            >
              Sign In
            </NavLink>
          </li>

          // <a href="/auth/google">Login</a>
        );
      default:
        console.log("In rendercontent " + JSON.stringify(this.props.auth));
        // return "already logged in";
        return (
          // due to Navlink being a virtual router it will not render the /api/logout route
          <li className="nav-li">
            {/* <NavLink
              to={"/api/logout"}
              className="li-navlink"
              activeStyle={{ color: "green", fontWeight: "bold" }}
            >
              Sign out
            </NavLink> */}
            <a className="li-navlink" href="/api/logout">Logout</a>
          </li>
        );
    }
  }

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
            </li>

            {/* Make this a prop coming from app */}
            {/* {this.state.currentUser ? (
              <li className="nav-li">
                <NavLink className="li-navlink" to="/auth/logout">
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <li className="nav-li">
                <NavLink className="li-navlink" to="/signin">
                  Sign In
                </NavLink>
              </li>
            )} */}
            {/* <li className="nav-li">{this.renderContent()}</li> */}
            {this.renderContent()}

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
  auth: state.auth,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(NavBar);
