import React, { Component } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "./pages/layout/Layout";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import LandingPage from "./pages/landingpage/LandingPage";
import HomePage from "./pages/home/HomePage";
import Product from "./pages/product/Product";
import SignIn from "./pages/sign-in/SignIn";
import Footer from "./components/footer/Footer";
import CheckoutPage from './pages/checkout/checkout.component';
import { connect } from "react-redux";
import * as actions from "./redux/user/actions";
// import { setCurrentUser } from "./redux/user/user.actions";
// import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  componentDidMount() {
    // const { setCurrentUser } = this.props;

    // Get currentuser
    this.props.fetchUser();
  }

  render() {
    
    return (
      <Layout>
        <Router>
          <Row>
            <NavBar></NavBar>
            <Col xs={12} md={4}>
              <SideBar className="sidebar"></SideBar>
            </Col>
            {/* <Col xs={12} md={8}> */}
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/landingpage" component={LandingPage} />
              <Col xs={12} md={8}>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                  exact
                  path="/signin"
                  render={() =>
                    this.props.currentUser ? (
                      <Redirect to="/home" />
                    ) : (
                      <SignIn />
                    )
                  }
                />
              </Col>
            </Switch>
            {/* </Col> */}
            <Footer></Footer>
          </Row>
        </Router>
      </Layout>
    );
  }
}


// const mapDispatchToProps = dispatch => ({
  // setCurrentUser is the action
  // setCurrentUser: user => dispatch(setCurrentUser(user))
// });

// Actions are assigned to app as props
export default connect(null, actions)(App);
