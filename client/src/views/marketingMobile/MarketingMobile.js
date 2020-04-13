import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";
import CourseStructure from "./components/CourseStructure";

import "./marketing.scss";

function MarketingMobile() {
    return (
        <div>
            <Header />
            <div className="content">
                <About />
                <CourseStructure />
            </div>
            <Footer />
        </div>
    )
}

export default MarketingMobile;