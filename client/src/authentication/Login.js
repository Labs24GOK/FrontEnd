import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { logIn, loggedIn } from '../actions/authenticationActions.js';


function Login(props) {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const [formValid, setFormValid] = useState(true);
  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState('');


  useEffect(() => {
    console.log('LOGIN props: ', props)
  }, [])

  const handleChange = e => {
    setUser({
      ...user, [e.target.name]: e.target.value,
    });
    e.target.focus()
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username.length && user.password.length) {
      props.logIn(user, props.history);
      
      setUser({
        username: '',
        password: ''
      });
    } else {
      setFormValid(false)
    }
  };
  
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  
  const handleEmailSubmit = e => {
    e.preventDefault();
    // Add logic to communicate with backend to send email
    setEmail('');
    setModal(false);
  }

  if (props.state.authenticationReducer.user.authenticated) {
    // return <Redirect to='/dashboard' />
  } else {
    return (
      <div>
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
              onChange={handleChange}
              value={user.password}
            />
            <span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => { setModal(true) }}>Forgot password?</span>
            <button type="submit">Sign in</button>
          </fieldset>
          <div>
            {!formValid && <p>Username and Password are required.</p>}
            {props.state.authenticationReducer.logIn.error && <p>Login credentials incorrect.</p>}
          </div>
        </form>
        {
          modal ?
            <form onSubmit={handleEmailSubmit}>
              <input type="email" name="email" placeholder="Email address" onChange={handleEmailChange} value={email} />
              <button>Submit</button>
            </form> : null
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(connect(
  mapStateToProps,
  { logIn, loggedIn }
)(Login));