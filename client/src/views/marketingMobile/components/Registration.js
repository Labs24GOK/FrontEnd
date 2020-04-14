import React from 'react';
import './Registration.scss';
import Registration from '../../../assets/registration.jpg';

function About() {

    return (
        <div>
            <h1>Registration Information</h1>
            <section className="top-content">
                <div>
                    <img src={Registration} />
                    <h2>Personal Information</h2>
                </div>
                <div>
                    <img src={Registration} />
                    <h2>Placement Test</h2>
                </div>
            </section>
        </div>
    )
}

export default About;