import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { logOut, loggedIn } from '../../actions/authenticationActions.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrap = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #56C9B5;
`

const Logo = styled.div`
  font-size: 24px;
  color: white;
  font-weight: 700;
  margin-left: 30px;
`

const RightSideWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
`

function NavBar(props) {

  const logout = () => {
    props.logOut(props.history);
  }

  return (
    <NavWrap>
      <Logo>
        <Link to='/' style={{color: 'white', textDecoration: 'none'}}>SpeakOut</Link>
      </Logo>
      <RightSideWrap>
        <a style={{color: 'white', marginLeft: '20px', cursor: 'pointer'}}>Lorem</a>
        <a style={{color: 'white', marginLeft: '20px', cursor: 'pointer'}}>Ipsum</a>
        <button onClick={logout} style={{marginLeft: '20px', cursor: 'pointer'}}>Logout</button>
      </RightSideWrap>
    </NavWrap>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(connect(
  mapStateToProps,
  { logOut, loggedIn }
)(NavBar));