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
    console.log('APP props: ', props)
    props.loggedIn(props.history);
    // props.history.push('/login')
  }, [])
  
  return (
    <div className="Container">
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
)(Container));