import React from 'react';
import { Link } from "react-router-dom";
import Instagram from "../../../assets/Instagram.png";
import Facebook from "../../../assets/Facebook.png";
import Twitter from "../../../assets/Twitter.png";
import Home from "../../../assets/Home.png";

import "./Footer.scss";

function Footer() {
    return (
        <>
            <hr className="footer-grass" />
            <footer>
                <div className="social-media-icons">
                    <a href="https://www.instagram.com/speak_out_program/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram link" />
                    </a>
                    <a href="https://www.facebook.com/speakoutinfobh/?ref=bookmarks" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook link"/>
                    </a>
                    <a href="https://twitter.com/speakoutbh" target="_blank" rel="noopener noreferrer">
                        <img src={Twitter} alt="Twitter link"/>
                    </a>
                    <Link to="/">
                        <img src={Home} alt="Speak Out homepage link"/>
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Footer;