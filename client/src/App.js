import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { logIn, logOut, loggedIn } from './actions/authenticationActions';
import './App.css';
import Login from './authentication/Login';
import Home from './Home';
import { withRouter } from "react-router";
axios.defaults.withCredentials = true

function App(props) {

  useEffect(() => {
    props.loggedIn(props.history);
  }, [])
  
  return (
    <div className="App">
      <Switch>
        { props.state.authenticationReducer.user.authenticated && 
            <Route exact path='/' render={(routeProps) => <Home {...props} {...routeProps}/> } />  
          }

        <Route  path='/login' render={(routeProps) => <Login {...props} {...routeProps}/>} />
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
  { logIn, logOut, loggedIn }
)(App));

