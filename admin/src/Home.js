import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true

function Home(props) {


useEffect(() => {
  console.log('USe effect HOME loggedIn', props.loggedIn)

  axios
    .get('https://speak-out-be-staging.herokuapp.com/api')
    .then(res => {
      console.log('RESPONSE DATA OK', res)
    })
    .catch(err => {
      console.log('ERROR API', err)
    })

}, [])

const logout = () => {
  axios
  .get('https://speak-out-be-staging.herokuapp.com/logout')
  .then(res => {
    console.log('LOGGED OUT', res)
    props.history.push('/login')
    props.updateUser({loggedIn: false, username: undefined})
  })
  .catch(err => {
    console.log('ERROR API', err)
  })
  
}
  
  return (
      <div>
        <div>
          <h1>Home Page</h1>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
  ) 

}

export default Home;
