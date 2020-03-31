import React from "react";

const RegistrationPrevNextButtons = ({step}) => {
    return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {step === 2 && (
                  <button onClick={prevStep}>Back: Your Information </button>
                )}

                {step === 3 && (
                  <button onClick={prevStep}>Back: Student Information </button>
                )}

                {step === 1 && (
                  <button style={{ visibility: 'hidden' }}></button>
                )}

                {step === 1 && (
                  <button onClick={nextStepStudentInfoBtn}>
                    Next: Student Information
                  </button>
                )}

                {step === 2 && (
                  <button onClick={nextStepReviewRegistrationBtn}>
                    Next: Review Registration{' '}
                  </button>
                )}

                {step === 3 && (
                  <button onClick={handleSubmit}>Submit Registration </button>
                )}
            </div>
    )
}

export default RegistrationPrevNextButtons;