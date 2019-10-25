import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './header/NavBar';
import Panel from './main/Panel';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { logOut, loggedIn } from '../actions/authenticationActions.js';

function Home(props) {

  useEffect(() => {
    console.log('HOME props: ', props)
  }, [])
  
  return (
    <div>
      <NavBar />
      <Panel />
    </div>
  ) 
}

export default Home;
