import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './header/NavBar';
import Panel from './main/Panel';

function Home(props) {

  useEffect(() => {
    console.log('HOME props: ', props)
  }, [])
  
  return (
    <div>
      <NavBar {...props}/>
      <Panel {...props}/>
    </div>
  ) 
}

export default Home;
