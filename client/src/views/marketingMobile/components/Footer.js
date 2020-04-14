import React from 'react';
import { Link } from "react-router-dom";
import Instagram from "../../../assets/Instagram2.png";
import Facebook from "../../../assets/Facebook2.png";
import Twitter from "../../../assets/Twitter2.png";
import Home from "../../../assets/Home2.png";
import WhatsApp from "../../../assets/whatsapp2.png";
import Tree from "../../../assets/Garden_tree_only.png";

function Footer() {
    return (
        <>
            <img src={Tree} className='tree' alt="Instagram link" />
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
                    <a href="https://api.whatsapp.com/send?phone=97335617635&text=Hello,%20Garden%20of%20Knowledge,%20I%20was%20browsing%20your%20website.%20I%20am%20interested%20in%20your%20course" target="_blank" rel="noopener noreferre" target="_blank" rel="noopener noreferrer">
                        <img src={WhatsApp} alt="WhatsApp link"/>
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