import React from 'react';
import Logo from '../../../../assets/Logo.png';
import './navbar.scss';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { logOut } from '../../../../actions/authenticationActions';

function NavBar(props) {

  const logout = () => {
    props.logOut(props.history);
  }

  const pushToHome = () => {
    props.history.push('/');
  }

  return (
    <div className="nav">
      <div className="navbar-left">
        <a onClick={pushToHome} className="logo"><img className="logo-image" src={Logo} alt="Speak Out logo"></img></a>
      </div>
      <div className="navbar-right">
        <button onClick={logout}>Sign Out</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { state };
};

export default withRouter(connect( mapStateToProps, { logOut } )(NavBar) );