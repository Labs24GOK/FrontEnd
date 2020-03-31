import React from "react";
import { Link } from 'react-router-dom';

const RegistrationSuccessMessage = ({studentName}) => {

    return (
            <div className='success-message'
            style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                margin: '40px',
                alignItems: 'center',
                height: 'calc(100vh - 282px)',
            }}
            >
                <h1>Congratulations, {studentName}!</h1>
                <h2>You've registered for Speak Out. Thank you!</h2>
                <Link to='/login' className='button'>
                    Sign In
                </Link>
            </div>
    )
}

export default RegistrationSuccessMessage;