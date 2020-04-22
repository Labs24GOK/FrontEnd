import React from 'react';
import { Link, NavLink } from "react-router-dom";
import LogoTree from "../../../assets/Garden_tree_only.png";
import Logo from "../../../assets/Garden.png";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { logOut } from '../../../actions/authenticationActions';

function UserDashboardHeader(props) {

    return (
        <>
            <header className="userDashboardHeader">
                <Link to='/' >
                    <img src={Logo} alt="The Garden of Knowledge" /> 
                </Link>
                <Link className="logOut" onClick={logOut}>Sign Out</Link>
            </header>
        </>
    )
}

const mapStateToProps = state => {
    return { state };
  };
  
export default withRouter(connect( mapStateToProps, { logOut } )(UserDashboardHeader) );