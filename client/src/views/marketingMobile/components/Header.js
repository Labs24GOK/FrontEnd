import React from 'react';
import { NavLink } from "react-router-dom";
import LogoTree from "../../../assets/Garden_tree_only.png";
import HamburgerMenu from "../../../assets/Home.png";

import "./Header.scss";

function Header() {

    

    return (
        <>
            <header className="mobile">
                <img src={LogoTree} alt="The Garden of Knowledge" />
                <img src={HamburgerMenu} alt="Mobile Menu Icon" />
            </header>
            <div className="hamburger-menu">
                <NavLink to='/course-structure' className="hamburger-link">Course Structure</NavLink>
                <NavLink to='/registration-information' className="hamburger-link"> Registration Information</NavLink>
                <NavLink to='/about-us' className="hamburger-link">About Us</NavLink>
                <NavLink to='/contact-us' className="hamburger-link">Contact Us</NavLink>
                <NavLink to='/login' className="hamburger-link">Sign In</NavLink>
            </div>
        </>
    )
}

export default Header;