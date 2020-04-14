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

            <div className="hamburger-menu hidden">
                <NavLink to='/' className="hamburger-link">Home</NavLink>
                <NavLink to='/courses' className="hamburger-link">Courses</NavLink>
                <NavLink to='/course_structure' className="hamburger-link">Course Structure</NavLink>
                <NavLink to='/registration' className="hamburger-link"> Registration Information</NavLink>
                <NavLink to='/about' className="hamburger-link">About Us</NavLink>
                <NavLink to='/contact' className="hamburger-link">Contact Us</NavLink>
                <NavLink to='/login' className="hamburger-link">Sign In</NavLink>
            </div>
        </>
    )
}

export default Header;