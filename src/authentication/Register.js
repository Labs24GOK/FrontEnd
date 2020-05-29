import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logIn } from "../actions/authenticationActions.js";
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
  };

    return (
      
          <div className="form-container">
            <h1>Sign Up with The Garden of Knowledge</h1>
            <form onSubmit={handleSubmit(formSubmit)}>
              
              <fieldset>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" ref={register({required: true, minLength: 1})}/>
                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={register({required: true, minLength: 1})}/>

                {/* <label htmlFor="username">Username</label>
                <input type="text" name="username" ref={register({required: true, minLength: 1})}/> */}

                <label htmlFor="password">Password</label>
                <input type="password" name="password" ref={register({required: true, minLength: 1})}/>

                {/* add confirm password input w/ logic */}

                <button type="submit" className={errors.name ? "disabled" : ""}>
                  Register
                </button>
              </fieldset>
              
              <div className="register-errors">
                {(errors.name || errors.email || errors.password) && <p>All fields are required.</p>}

              {/* if the backend returned an error because the username or email already exists, display that error */}
              {props.state && props.state.registrationReducer && props.state.registrationReducer.familyRegister && props.state.registrationReducer.familyRegister.error && <p>{props.state.registrationReducer.familyRegister.error}</p>}

              </div>
            </form>
          </div>

    );
  }

const mapStateToProps = state => {
  return { state: state };
};

export default withRouter(connect( mapStateToProps, { logIn, familyRegister } )(Register));
