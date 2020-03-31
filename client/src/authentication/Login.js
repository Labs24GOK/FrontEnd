import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logIn, loggedIn } from "../actions/authenticationActions.js";
import { useForm } from 'react-hook-form';
import LoginGroup from "../assets/LoginGroup.png";
import "./login.scss";

function Login(props) {

	const { register, errors, handleSubmit } = useForm();
  const formSubmit = user => {
      props.logIn(user, props.history);
  };

  if (props.state.authenticationReducer.user.authenticated) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <div className="login">
        <div className="login-body">
          <div className="img-container">
            <img src={LoginGroup} />
          </div>
          <div className="form-container">
            <h1>Welcome back!</h1>
            <form onSubmit={handleSubmit(formSubmit)}>
              
              <fieldset>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" ref={register({required: true, minLength: 1})} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" ref={register({required: true, minLength: 1})} />

                <button type="submit" className={(errors.username || errors.password || props.state.authenticationReducer.logIn.error) ? "disabled" : ""}>
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
                {(errors.username || errors.password) && <p>Username and Password are required.</p> && console.log(errors)}
                {props.state.authenticationReducer.logIn.error && <p>Login credentials incorrect.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default withRouter(connect( mapStateToProps, { logIn, loggedIn } )(Login));
