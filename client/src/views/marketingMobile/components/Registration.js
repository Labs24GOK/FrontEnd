import React from 'react';
import './Registration.scss';
import Registration from '../../../assets/registration.jpg';
import Header from './Header';
import Footer from './Footer';

function About() {

    return (
        <div>
            <Header />
            <h1>Registration Information</h1>

            <section className="top-content">
                <div>
                    <img src={Registration} />
                    <h2>Personal Information</h2>
                    <p>To register a student, parents must provide personal information, such as school grade, contact information and CPR.</p>
                </div>
                <div>
                    <img src={Registration} />
                    <h2>Placement Test</h2>
                    <p>All students must take a minimum of a multiple choice placement test and spoken placement test.</p>
                </div>
            </section>

            <section className="terms">
                <h2>Terms and Condition</h2>
                <p>A parent will be required to sign a document containing course information and student behaviour guide, as well as commiting them to finish a 3 month section once they have started classes.</p>
            </section>

            <section className="fees">
                <h2>Fees</h2>
                <p>Kindergarten: 122BHD</p>
                <p>Primary: 122BHD</p>
                <p>Intermediate and Secondary: 127BHD</p>
                <p>Cost includes registration, books, stationery, and 24 classes.</p>
            </section>

            <Footer />
        </div>
    )
}

export default About;