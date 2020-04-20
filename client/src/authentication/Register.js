import React from "react";
import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logIn, loggedIn } from "../actions/authenticationActions.js";
import { useForm } from 'react-hook-form';
import "./loginAndRegister.scss";

function Register(props) {

	const { register, errors, handleSubmit } = useForm();
  const formSubmit = user => {

      user.type = "parent";
      props.logIn(user, props.history);
  };

  if (props.state.authenticationReducer.user.authenticated) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      
          <div className="form-container">
            <h1>Sign Up with The Garden of Knowledge</h1>
            <form onSubmit={handleSubmit(formSubmit)}>
              
              <fieldset>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" ref={register({required: true, minLength: 1})} />
                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={register({required: true, minLength: 1})} />

                <label htmlFor="username">Username</label>
                <input type="text" name="username" ref={register({required: true, minLength: 1})} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" ref={register({required: true, minLength: 1})} />

                <button type="submit" className={errors.name ? "disabled" : ""}>
                  Register
                </button>
              </fieldset>
              
              <div className="register-errors">
                {(errors.name || errors.email || errors.username || errors.password) && <p>All fields are required.</p>}
              </div>
            </form>
          </div>

    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default withRouter(connect( mapStateToProps, { logIn, loggedIn } )(Register));
