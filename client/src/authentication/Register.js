import React from "react";
import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logIn, loggedIn } from "../actions/authenticationActions.js";
import { familyRegister } from '../actions/registrationActions';
import { useForm } from 'react-hook-form';
import "./loginAndRegister.scss";

function Register(props) {

	const { register, errors, handleSubmit } = useForm();
  const formSubmit = async user => {

      // only parents will register through this form (no admin or staff)
      // can change "parent" to another category later
      user.user_type = "parent";
      
      // use old familyRegister action creator to register (for now)
      await props.familyRegister(user, props.history);

      // log in user
      await props.logIn({username: user.username, password: user.password}, props.history);

      // use logIn action creator to log in. Only send username and password data.
      // if (props.state.registrationReducer.familyRegister.success)
      //   {

      //     console.log("trying to log in with newly created account...")

      //     await props.logIn({username: user.username, password: user.password}, props.history);
      //   }

      // unfinished; allowed existing accounts to be accessed to log in
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
                <input type="text" name="name" ref={register({required: true, minLength: 1})} defaultValue="New User"/>
                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={register({required: true, minLength: 1})}  defaultValue={Date.now() + "@gmail.com"}/>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" ref={register({required: true, minLength: 1})}  defaultValue={Date.now()}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" ref={register({required: true, minLength: 1})} defaultValue="pass" />

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

export default withRouter(connect( mapStateToProps, { logIn, loggedIn, familyRegister } )(Register));
