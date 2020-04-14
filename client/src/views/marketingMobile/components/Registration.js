import React from 'react';
import './Registration.scss';
import Header from './Header';
import Footer from './Footer';

function Registration() {

    return (
        <div className='registration-container'>
            {/* <Header />s */}
            <h1>Registration Information</h1>

            <section className="top-content">
                <div></div>
                <div className="placement-test">
                    <h2>Placement Test</h2>
                    <p>This can be taken online or at the center and will help us find the student's level when taking a language course.</p>
                </div>
            </section>

            <section className="terms">
                <div>
                    <h2>Terms and Conditions</h2>
                    <p>A parent will be required to sign a document containing course information and student behaviour guide, as well as commiting them to finish a 3 month section once they have started classes.</p>
                </div>
                <div></div>
            </section>

            <section className="fees">
                <h2>Fees</h2>
                <p>Kindergarten: 122BHD</p>
                <p>Primary: 122BHD</p>
                <p>Intermediate and Secondary: 127BHD</p>
                <p>Cost includes registration, books, stationery, and 24 classes.</p>
            </section>
        </div>
    )
}

export default Registration;