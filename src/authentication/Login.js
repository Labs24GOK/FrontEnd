import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logIn } from '../actions/authenticationActions.js';
import { useForm } from 'react-hook-form';
import './loginAndRegister.scss';

function Login(props) {
  const { register, errors, handleSubmit } = useForm();
  const formSubmit = user => {
    props.logIn(user, props.history);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const currentTime = Date.now().valueOf() / 1000;
    if (token) {
    const tokenData = JSON.parse(atob(token.split('.')[1]));
      if (tokenData.exp > currentTime) {
        /* check if token is expired */
        return props.history.push('/dashboard');
      }
    }
  }, [props.history]);

  return (
    <div className="form-container">
      <h1>Welcome back!</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <fieldset>
          {/* <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            ref={register({ required: true, minLength: 1 })}
          /> */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            ref={register({ required: true, minLength: 1 })}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            ref={register({ required: true, minLength: 1 })}
          />

          <button
            type="submit"
            className={errors.email || errors.password ? 'disabled' : ''}
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
        <div className="login-errors">
          {(errors.email || errors.password) && (
            <p>Email and Password are required.</p>
          )}
          {props.state.authenticationReducer.logIn.error && (
            <p>Login credentials incorrect.</p>
          )}
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return { state: state };
};

export default withRouter(connect(mapStateToProps, { logIn })(Login));
