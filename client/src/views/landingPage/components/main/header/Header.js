import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';

function Header() {
    return (
        <section className="hero">
            <div className="wrap">
                <h1>Knowledge For All</h1>
                <div className="content-box">
                    <div className="flex">
                        <Link to="/register" className="button">Register Now</Link>
                        <Link to="/about-us" className="button">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;