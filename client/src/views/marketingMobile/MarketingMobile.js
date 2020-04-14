import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import './marketing.scss'


function MarketingMobile() {
    return (
        <div>
            <Header />
            <div className="content">
                <Home />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default MarketingMobile;