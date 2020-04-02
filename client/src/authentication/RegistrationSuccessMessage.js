import React from "react";
import { Link } from 'react-router-dom';

const RegistrationSuccessMessage = ({studentName}) => {

    return (
            <div className='success-message'>
                <h1>Congratulations, {studentName}!</h1>
                <h2>You've registered for Speak Out. Thank you!</h2>
                <Link to='/login' className='button'>
                    Sign In
                </Link>
            </div>
    )
}

export default RegistrationSuccessMessage;