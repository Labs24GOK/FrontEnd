import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/AboutAndContact";
import CourseStructure from "./components/CourseStructure";
import Courses from "./components/CoursesAndRegistration";
import Contact from "./components/ContactUs";
import Registration from './components/Registration';

import "./marketing.scss";

function Marketing({page}) {

    let componentToRender = Home;

    switch(page) {

        case "course_structure":
            componentToRender = CourseStructure;
            break;
        case "courses":
            componentToRender = Courses;
            break;
        case "registration":
            componentToRender = Registration;
            break;
        case "about":
            componentToRender = About;
            break;
        case "contact":
            componentToRender = Contact;
            break;
    }

    return (
        <div>
            <Header />
            <div className="content">
                {componentToRender()}
            </div>
            <Footer />
        </div>
    )
}

export default Marketing;