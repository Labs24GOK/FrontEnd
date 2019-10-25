import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { logOut, loggedIn } from '../../actions/authenticationActions.js';

function NavBar(props) {

  const logout = () => {
    props.logOut(props.history);
  }

  return (
    <div>
      Nav Bar
      <button onClick={logout}>Logout</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(connect(
  mapStateToProps,
  { logOut, loggedIn }
)(NavBar));