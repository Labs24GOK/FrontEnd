import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { logIn, logOut, loggedIn } from './actions/authenticationActions';
import './App.css';
import Login from './authentication/Login';
import Home from './components/Home';
import { withRouter } from "react-router";
axios.defaults.withCredentials = true

function Container(props) {

  useEffect(() => {
    props.loggedIn(props.history);
  }, [])
  
  return (
    <div className="Container">
      <Switch>
        { props.state.authenticationReducer.user.authenticated && 
            <Route exact path='/' render={() => <Home /> } />  
          }
        <Route  path='/login' render={() => <Login />} />
      </Switch>
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
)(Container));