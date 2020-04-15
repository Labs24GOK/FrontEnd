import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import LogoTree from "../../../assets/Garden_tree_only.png";
import Logo from "../../../assets/Garden.png";
import HamburgerMenu from "../../../assets/hamburger_menu_icon.png";

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

            <header className="desktop">
                <img src={Logo} alt="The Garden of Knowledge" />
                <div className="desktop-header-links">
                    <NavLink to='/' className="desktop-header-link" >Home</NavLink>
                    <NavLink to='/courses' className="desktop-header-link" >Courses</NavLink>
                    <NavLink to='/schedules' className="desktop-header-link" >Schedules</NavLink>
                    <NavLink to='/registration' className="desktop-header-link" > Registration Information</NavLink>
                    <NavLink to='/about' className="desktop-header-link" >About Us</NavLink>
                    <NavLink to='/contact' className="desktop-header-link" >Contact Us</NavLink>
                    <NavLink to='/login' className="desktop-header-link">Sign In</NavLink>
                </div>
            </header>

            <div className={"hamburger-menu " + menuDisplayStatus}>
                <NavLink to='/' className="hamburger-link" onClick={toggleMenu} >Home</NavLink>
                <NavLink to='/courses' className="hamburger-link" onClick={toggleMenu} >Courses</NavLink>
                <NavLink to='/schedules' className="hamburger-link" onClick={toggleMenu} >Schedules</NavLink>
                <NavLink to='/registration' className="hamburger-link" onClick={toggleMenu} > Registration Information</NavLink>
                <NavLink to='/about' className="hamburger-link" onClick={toggleMenu} >About Us</NavLink>
                <NavLink to='/contact' className="hamburger-link" onClick={toggleMenu} >Contact Us</NavLink>
                <NavLink to='/login' className="hamburger-link"onClick={toggleMenu} >Sign In</NavLink>
            </div>
        </>
    )
}

export default Header;