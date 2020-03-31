import React from "react";

const RegistrationPrevNextButtons = ({step, prevStep, nextStep, handleSubmit}) => {

    let buttons;

    switch (step) {
        case 1:
            buttons = (
                <>
                    <button style={{ visibility: 'hidden' }}></button>
                    <button onClick={nextStep}>Next: Student Information</button>
                </>
            );
            break;
        case 2:
            buttons = (
                <>
                    <button onClick={prevStep}>Back: Your Information </button>
                    <button onClick={nextStep}>Next: Review Registration</button>
                </>
            );
            break;
        case 3:
                buttons = (
                    <>
                        <button style={{ visibility: 'hidden' }}></button>
                        <button onClick={handleSubmit}>Next: Submit Registration</button>
                    </>
                );
            break;
    }

    return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {buttons}
            </div>
    )
}

export default RegistrationPrevNextButtons;