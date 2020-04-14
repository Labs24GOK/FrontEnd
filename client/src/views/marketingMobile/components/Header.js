import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import LogoTree from "../../../assets/Garden_tree_only.png";
import HamburgerMenu from "../../../assets/hamburger_menu_icon.png";

import "./Header.scss";

function Header() {

    const [menuDisplayStatus, setMenuDisplayStatus] = useState("hamburger-menu-hidden");

    const toggleMenu = () => {
        setMenuDisplayStatus(menuDisplayStatus === "hamburger-menu-hidden" ? "" : "hamburger-menu-hidden");
    }

    return (
        <>
            <header className="mobile">
                <img src={LogoTree} alt="The Garden of Knowledge" />
                <img src={HamburgerMenu} alt="Mobile Menu Icon" className="hamburger-menu-icon" onClick={toggleMenu} />
            </header>

            <div className={"hamburger-menu " + menuDisplayStatus}>
                <NavLink to='/mobile' className="hamburger-link">Home</NavLink>
                <NavLink to='/mobile/courses' className="hamburger-link">Courses</NavLink>
                <NavLink to='/mobile/course_structure' className="hamburger-link">Course Structure</NavLink>
                <NavLink to='/mobile/registration' className="hamburger-link"> Registration Information</NavLink>
                <NavLink to='/mobile/about' className="hamburger-link">About Us</NavLink>
                <NavLink to='/mobile/contact' className="hamburger-link">Contact Us</NavLink>
                <NavLink to='/login' className="hamburger-link">Sign In</NavLink>
            </div>
        </>
    )
}

export default Header;