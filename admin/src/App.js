import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './authentication/Login';
import Home from './Home';
import { withRouter } from "react-router";
axios.defaults.withCredentials = true

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    console.log('APP USE EFFECT loggedIn: ')
    // getUser();

    axios
    .get('https://speak-out-be-staging.herokuapp.com/user')
    .then(res => {
      console.log('Get user response: ')
      console.log("RES DATA", res)
      if (res.data.authenticated) {
        console.log('Get User: There is a user saved in the server session: ', res.data)
        setLoggedIn(true);
        setUsername(res.data.username);
      } else {
        console.log("Get user: no user");
        setLoggedIn(false);
        setUsername(null);
        props.history.push('/login')
      }
    })
  }, [loggedIn])
  
  const updateUser = (user) => {
    setLoggedIn(user.loggedIn);
    setUsername(user.username);
  }

  return (
    <div className="App">
      <Switch>
      { loggedIn && 
          <Route exact path='/' render={(props) => <Home {...props} updateUser={updateUser}/> } />  
        }
      <Route  path='/login' render={(props) => <Login {...props} updateUser={updateUser} loggedIn={loggedIn}/>} />

      </Switch>
    </div>
  );
}
const appWithRouter = withRouter(App);
export default appWithRouter;

