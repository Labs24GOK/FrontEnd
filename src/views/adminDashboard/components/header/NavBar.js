import React from 'react';
import Logo from '../../../../assets/Logo.png';
import './navbar.scss';
import {useHistory} from 'react-router-dom';

function NavBar() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    history.push('/');
  }

  return (
    <div className="nav">
      <div className="navbar-left">
        <div className="logo"><img className="logo-image" src={Logo} alt="Speak Out logo"></img></div>
      </div>
      <div className="navbar-right">
        <button onClick={logout}>Sign Out</button>
      </div>
    </div>
  )
}

export default NavBar;