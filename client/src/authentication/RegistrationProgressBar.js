import React from "react";

const RegistrationProgressBar = (step) => {
    return (
        <>
            <div className='horiz-line' />
            <div className='progress-bar'>
                <div className='circles'>
                <div className={step >= 1 ? 'active-register' : ''}>
                    {step >= 1 ? '✔' : ''}
                </div>
                <div className={step >= 2 ? 'active-register' : ''}>
                    {step >= 2 ? '✔' : ''}
                </div>
                <div className={step >= 3 ? 'active-register' : ''}>
                    {step >= 3 ? '✔' : ''}
                </div>
                </div>
                <div className='circle-labels'>
                    <p>Your Information</p>
                    <p>Student Information</p>
                    <p>Submit Registration</p>
                </div>
            </div>
        </>
    )
}

export default RegistrationProgressBar;