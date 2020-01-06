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
          <h1 className="text-dark">User Sign-in</h1>
          <Row>
            <form className="form" autoComplete="on">
              <div className="form-group">
              <fieldset>
                <Row>
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    maxLength="35"
                    required
                  ></input>
                </Row>
                <Row>
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    maxLength="35"
                    required
                  ></input>
                </Row>
                <Row className="mt-2">
                  <button className="btn btn-success m-auto" type="submit" value="submit">Sign In</button>
                </Row>
              </fieldset>
              </div>
            </form>
          </Row>
          <Row>

          </Row>
            <h4 className="m-auto d-block">OR</h4>
          <Row>
            <a
              // href="http://localhost:5000/auth/google"
              href="/auth/google"
              className="signin-button signin-a"
            >
              <div>                
                <span className="svgIcon t-popup-svg">
                  <svg
                    className="svgIcon-use"
                    width="25"
                    height="37"
                    viewBox="0 0 25 25"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                        fill="#34A853"
                      />
                      <path
                        d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                        fill="#EA4335"
                      />
                    </g>
                  </svg>
                </span>                
                <span className="button-label">Sign in with Google</span>
              </div>
            </a>
          </Row>

          
        </div>
      </Fragment>
    );
  }
}

export default SignIn;
