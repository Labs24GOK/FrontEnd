import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logIn, loggedIn } from "../actions/authenticationActions.js";
// import NavBar from "../views/landingPage/components/header/NavBar";  -> labs18 comment
// import Footer from "../views/footer/Footer";  -> labs18 comment
import LoginGroup from "../assets/LoginGroup.png";
import "./login.scss";

function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [formValid, setFormValid] = useState(true);
  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState("");

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    e.target.focus();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.username.length && user.password.length) {
      props.logIn(user, props.history);

      setUser({
        username: "",
        password: ""
      });
    } else {
      setFormValid(false);
    }
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = e => {
    e.preventDefault();
    // Add logic to communicate with backend to send email -> labs18 comment
    setEmail("");
    setModal(false);
  };

  if (props.state.authenticationReducer.user.authenticated) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <div className="login">
        {/* <NavBar /> */}
        <div className="login-body">
          <div className="img-container">
            <img src={LoginGroup} />
          </div>
          <div className="form-container">
            <h1>Welcome back!</h1>
            <form onSubmit={handleSubmit} method="POST">
              <fieldset>
                <label htmlFor="email">Email</label>
                <input
                  style={{ marginBottom: "15px" }}
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  value={user.username}
                />
                <label htmlFor="password">Password</label>
                <input
                  style={{ marginBottom: "15px" }}
                  className="input-class"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={user.password}
                />

                {/* <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  Forgot password?
                </span>  -> labs18 comment */ }
                <button
                  type="submit"
                  style={{
                    background: `${
                      user.username.length && user.password.length
                        ? "#c73642"
                        : "#ffffff"
                    }`,
                    color: `${
                      user.username.length && user.password.length
                        ? "#ffffff"
                        : "#c73642"
                    }`
                  }}
                >
                  Sign in
                </button>
              </fieldset>
              <div className="register">
                <p>Don't have an account?</p>
                <Link className="reg-link" to="/register">
                  Register now.
                </Link>
              </div>
              <div>
                {!formValid && <p>Username and Password are required.</p>}
                {props.state.authenticationReducer.logIn.error && (
                  <p>Login credentials incorrect.</p>
                )}
              </div>
            </form>
            {modal ? (
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  onChange={handleEmailChange}
                  value={email}
                />
                <button>Submit</button>
              </form>
            ) : null}
          </div>
        </div>
        {/* <Footer />  -> labs18 comment */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logIn, loggedIn }
  )(Login)
);
