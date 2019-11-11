import React, { useState, useEffect } from 'react';
import Logo from '../../../../assets/Logo.png';
import './navbar.scss';
import { withRouter } from "react-router";
import { landingPageTabs } from '../../../../data';

function NavBar(props) {
  const [selected, setSelected] = useState(false);
  // const [textDecoration, setTextDecoration] = useState('none');
  // const [textDecorationColor, setTextDecorationColor] = useState('transparent');

useEffect(() => {
}, [selected])

  const handleLogo = () => {
    props.setNavigation('');
    setSelected(false);
  }

  const signIn = () => {
    props.history.push('/login');
  }

  const handleCourse = () => {
    props.setNavigation('course');
    setSelected('course');
  }

  const handleRegistration = () => {
    props.setNavigation('registration');
    setSelected('registration');
  }

  const handleAbout = () => {
    props.setNavigation('about');
    setSelected('about');
  }

  const handleContact = () => {
    props.setNavigation('contact');
    setSelected('contact');
  }

  return (
    <div className="nav">
      <div className="navbar-left">
        <a onClick={handleLogo} className="logo"><img className="logo-image" src={Logo}></img></a>
      </div>
      <div className="navbar-right">
        <a onClick={handleCourse} style={{textDecoration: `${selected === 'course' ? 'underline' : null}`, textDecorationColor: `${selected === 'course' ? 'red' : 'transparent'}`}}>Course Structure</a>
        <a onClick={handleRegistration} style={{textDecoration: `${selected === 'registration' ? 'underline' : null}`, textDecorationColor: `${selected === 'registration' ? 'red' : 'transparent'}`}}>Registration Information</a>
        <a onClick={handleAbout} style={{textDecoration: `${selected === 'about' ? 'underline' : null}`, textDecorationColor: `${selected === 'about' ? 'red' : 'transparent'}`}}>About Us</a>
        <a onClick={handleContact} style={{textDecoration: `${selected === 'contact' ? 'underline' : null}`, textDecorationColor: `${selected === 'contact' ? 'red' : 'transparent'}`}}>Contact Us</a>
       
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  )
}

const NavBarWithRouter = withRouter(NavBar);

export default NavBarWithRouter;