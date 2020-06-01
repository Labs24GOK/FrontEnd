import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import Logo from "../../../assets/Garden.png";
import {useHistory} from 'react-router-dom';

import HamburgerMenu from "../../../assets/hamburger_menu_icon.png";
import "./userDashboardHeader.scss"


function UserDashboardHeader() {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        history.push('/');
      }

    const [menuDisplayStatus, setMenuDisplayStatus] = useState("hamburger-menu-hidden");

    const toggleMenu = () => {
        setMenuDisplayStatus(menuDisplayStatus === "hamburger-menu-hidden" ? "" : "hamburger-menu-hidden");
    }
    
    return (
        <>
            <header className="mobile">
              <img src={Logo} alt="The Garden of Knowledge" /> 
                      
                <img src={HamburgerMenu} alt="Mobile Menu Icon" className="hamburger-menu-icon" onClick={toggleMenu} />
            
            </header>
               
            <header className="desktop">
                <Link to='/' >
                        <img src={Logo} alt="The Garden of Knowledge" />
                </Link>

                    <div className="desktop-header-links"> 
                    <NavLink to='/dashboard' activeClassName ="activeNavButton"className="desktop-header-link" >Dashboard</NavLink>

                    <NavLink to='/settings' activeClassName ="activeNavButton"className="desktop-header-link" >Settings</NavLink>    

                    <NavLink to='/login' 
                    activeClassName ="activeNavButton" className="desktop-header-link" 
                    onClick={logout} 
                    >Sign Out</NavLink>
                </div>
            </header>

            <div className={"hamburger-menu " + menuDisplayStatus}>
              
                {/* <NavLink to='/login' className="hamburger-link"onClick={toggleMenu} >Sign In</NavLink> */}
                <NavLink to='/dashboard' className="hamburger-link" onClick={toggleMenu} >Dashboard</NavLink>
                <NavLink to='/settings' className="hamburger-link" onClick={toggleMenu} >Settings</NavLink>
                <NavLink to='/login' className="hamburger-link"onClick={logout} >Sign Out</NavLink>
              {/* {toggleMenu} >Sign In</NavLink> */}
            </div>
            <div>
            {/* <Link className="logOut" onClick={logout}>Sign Out</Link> */}
            </div>
        </>
    )
}
  
export default UserDashboardHeader;