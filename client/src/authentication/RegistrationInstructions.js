import React from "react";

const RegistrationInstructions = () => {
    return (
        <div className='top-section'>
            <MainInstructions />
            <ContactInfo />
        </div>
    )
}

const MainInstructions = () => {
    return (
        <div className='top-left'>
            <h1>Register With Speak Out</h1>
            <p>How to Register with Speak Out</p>
            <ol>
                <li>Enter your information</li>
                <li>Enter student information</li>
                <li>Review &amp; Submit Registration</li>
            </ol>
            <p className='top-left-end'>
                After submitting registration, you will choose <br />
                options for the student placement test(s).
            </p>
        </div>
    )
}

const ContactInfo = () => {
    return (
        <div className='top-right'>
            <h4>Register in Person</h4>
            <div className='contact-container'>
                <div className='address'>
                <p className='contact-first'>Address</p>
                <p className='contact-second'>
                    Rd No 3949, Bani Jamra, Bahrain
                    <br />
                    6F66+65 Bani Jamra, Bahrain
                </p>
                </div>
                <div className='telephone'>
                <p className='contact-first'>Telephone</p>
                <p className='contact-second'>+973 3561 7635</p>
                </div>
                <button>Schedule Appointment</button>
            </div>
        </div>
    )
}

export default RegistrationInstructions;