import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/Logo.png';
import './navbar.scss';
import { withRouter } from "react-router";
import { resetNav } from '../../../../actions/landingPageActions/landingPageActions';
import { connect } from 'react-redux';

function NavBar(props) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (props.location.pathname === "/about-us") {
      setSelected('about');
    }
    if (props.location.pathname === "/contact-us") {
      setSelected('contact');
    }
    if (props.location.pathname === "/registration-information") {
      setSelected('registration')
    }
    if (props.location.pathname === "/course-structure") {
      setSelected('course');
    }
    if (props.location.pathname === "/") {
      setSelected(false);
    }
    if (props.location.pathname === "/register") {
      setSelected(false);
    }
  }, [selected, props.toggle])

  const handleLogo = () => {
    props.history.push('/')
    setSelected(false);
  }

  const signIn = () => {
    // props.history.push('/login');
  }

  const handleCourse = () => {
    //handle reset when the 'course' is clicked while inner tab is selected
    if (selected === 'course') {
      props.resetNav(true);
    } else {
      setSelected('course');
    }
  }

  const handleRegistration = () => {
    setSelected('registration');
  }

  const handleAbout = () => {
    setSelected('about');
  }

  const handleContact = () => {
    setSelected('contact');
  }

  const handleSignIn = () => {
    setSelected('signin');
  }

  const signInText = props.loggedIn ? 'Dashboard' : 'Sign In'

  return (
    <div className="nav">
      <div className="navbar-left">
        <a onClick={handleLogo} className="logo"><img className="logo-image" src={Logo}></img></a>
      </div>
      <div className="navbar-right">
        <Link to='/course-structure' onClick={handleCourse} style={{borderBottom: `${selected === 'course' && selected !== 'signin' ? '2px solid #C73642' : '2px solid transparent'}`}}>Course Structure</Link>
        <Link to='/registration-information' onClick={handleRegistration} style={{borderBottom: `${selected === 'registration' && selected !== 'signin' ? '2px solid #C73642' : '2px solid transparent'}`}}>Registration Information</Link>
        <Link to='/about-us' onClick={handleAbout} style={{borderBottom: `${selected === 'about' && selected !== 'signin' ? '2px solid #C73642' : '2px solid transparent'}`}}>About Us</Link>
        <Link to='/contact-us' onClick={handleContact} style={{borderBottom: `${selected === 'contact' && selected !== 'signin' ? '2px solid #C73642' : '2px solid transparent'}`}}>Contact Us</Link>
        <Link to='/login' onClick={handleSignIn} className="button" >{signInText}</Link>
        {/* <button onClick={signIn}>{signInText}</button> */}
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
    loggedIn: state.authenticationReducer.user.authenticated,
    toggle: state.landingPageReducer.toggle
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { resetNav }
  )(NavBar)
)