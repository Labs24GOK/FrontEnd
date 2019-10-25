import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './header/NavBar';
import Panel from './main/Panel';


function Home(props) {

  useEffect(() => {
    console.log('HOME props: ', props)
  }, [])
  
  return (
    <div>
      <NavBar />
      {/* <Panel /> */}
      <Link to='/panel'>Panel </Link>
    </div>
  ) 
}

export default Home;
