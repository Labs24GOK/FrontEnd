import React from 'react';
<<<<<<< HEAD
import PlacementTest from '../../../assets/placement-test.jpg';
import Terms from '../../../assets/terms.jpg';
import Fees from '../../../assets/fees.jpg';

import './Registration.scss';

function About() {
=======

function Registration() {

>>>>>>> master
    return (
        <div className='registration-container'>
            <h1>Registration Information</h1>

            <section className="placement-test">
                <img src={PlacementTest} />

                <div>
                    <h2>Placement Test</h2>
                    <p>This can be taken online or at the center and will help us find the student's level when taking a language course.</p>
                </div>
            </section>

            <section className="terms">
                <div>
                    <h2>Terms and Conditions</h2>
                    <p>A parent will be required to sign a document containing course information and student behaviour guide, as well as commiting them to finish a 3 month section once they have started classes.</p>
                </div>
                <img src={Terms} />
            </section>

            <section className="fees">
            <img src={Fees} />
            <div>
                <h2>Fees</h2>
                <p>Kindergarten: 122BHD</p>
                <p>Primary: 122BHD</p>
                <p>Intermediate and Secondary: 127BHD</p>
                <p>Cost includes registration, books, stationery, and 24 classes.</p>
            </div>

            </section>
        </div>
    )
}

export default Registration;