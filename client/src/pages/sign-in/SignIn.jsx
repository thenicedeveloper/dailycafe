import React, { Component, Fragment } from "react";
import "./SignIn.css";
import Row from "react-bootstrap/Row";
import "react-bootstrap";
// import queryString from "query-string";

class SignIn extends Component {
  componentWillMount() {
    // var query = queryString.parse(this.props.location.search);
    // if (query.token) {
    //   window.localStorage.setItem("jwt", query.token);
    //   this.props.history.push("/");
    // }
  }

  render() {
    return (
      <Fragment>
        <div className="signin-container">
          <form className="form-container" action="/action_page.php">
            <h1 className="form-title">Sign-In</h1>
            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Username"
                name="usrnm"
              />
            </div>

            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>

            <div className="input-container">
              <i className="fa fa-key icon"></i>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="psw"
              />
            </div>
            <div className="input-container">
              <button className="btn-signin signin-button" type="submit" >
                Sign in
              </button>
            </div>
            <div className="input-container">
              <a className="google btn-signin" href="/auth/google" >
                <i className="fa fa-google fa-fw"></i> Sign in with Google
              </a>
            </div>
          </form>
        </div> 
         

          
       
      </Fragment>
    );
  }
}

export default SignIn;
