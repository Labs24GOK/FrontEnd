import React from 'react';
import './registrationInformation.scss';
import couple from '../../../../../assets/woman-and-man-interacting-illustration.png';

function RegistrationInformation() {

  return (
    <section className="registration">
      <div>
        <h2>Ready to get started?</h2>
        <button>Registration Information</button>
        <img src={couple} />
      </div>
    </section>
  )
}

export default RegistrationInformation;