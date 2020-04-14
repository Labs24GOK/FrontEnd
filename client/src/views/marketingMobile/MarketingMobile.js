import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import './marketing.scss'


import About from "./components/About";
import CourseStructure from "./components/CourseStructure";
import Courses from "./components/CourseOfferings";
import Contact from "./components/ContactUs";

import "./marketing.scss";

function MarketingMobile({page}) {

    let componentToRender;

    switch(page) {

        case "home":
            // componentToRender = Home;
            componentToRender = About;
            break;
        case "course_structure":
            componentToRender = CourseStructure;
            break;
        case "courses":
            componentToRender = Courses;
            break;
        case "registration":
            // componentToRender = Registration;
            break;
        case "about":
            componentToRender = About;
            break;
        case "contact":
            componentToRender = Contact;
            break;
        default:
            componentToRender = About;
            // componentToRender = Home;
            break;
    }

    return (
        <div>
            <Header />
            <div className="content">
<<<<<<< HEAD
                <Home />
=======
                {componentToRender()}
>>>>>>> 14d617837ae40874cf6d278c8f401954699edf83
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default MarketingMobile;