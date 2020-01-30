import React from 'react';
import { Link } from "react-router-dom";
import './registrationInformation.scss';
import couple from '../../../../../assets/woman-and-man-interacting-illustration.png';

function RegistrationInformation() {

  return (
    <section className="registration">
      <div>
        <h2>Ready to get started?</h2>
        <Link to="/registration-information" className="button">Registration Information</Link>
        <img src={couple} />
      </div>
    </section>
  )
}

export default RegistrationInformation;