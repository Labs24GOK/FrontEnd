import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


function Home(props) {

  useEffect(() => {

  }, [])

  const logout = () => {
    props.logOut(props.history);
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
