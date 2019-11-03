import React, { useEffect, useState } from 'react';
import Container from './Container';
import NavBar from './components/header/NavBar';
import Panel from './components/main/Panel';

import { logIn, logOut, loggedIn } from './actions/authenticationActions';
import Login from './authentication/Login';
import Home from './components/Home';
import { withRouter } from "react-router";
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Display from './components/main/Display';

axios.defaults.withCredentials = true

function App(props) {
  
  return (
    <div className="App">
      <Container />
    </div>
  );
}


const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(connect(
  mapStateToProps,
  { loggedIn }
)(App));

