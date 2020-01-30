import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./registrationInformation.scss";
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";
import { connect } from 'react-redux';

function RegistrationInformation(props) {
  useEffect(() => {
    props.toggle();
  }, [toggle])

  return (
    <div className="registration-information">
      <header>
        <h1>Registration</h1>
      </header>
      <div className="body">
        <div className="body-left">
          <h2>Personal Information</h2>
          <p>
            To register a student, parents must provide the name and surname,
            CPR, and date of birth of both a parent and the child.
          </p>
          <h2>Terms and Conditions</h2>
          <p>
            The parent and student will be required to sign a document
            containing legal information about the school and student behavior
            requirements.
          </p>
        </div>
        <div className="body-right">
          <h2>Fee Schedules</h2>
          <h3>Kindergarten</h3>
          <p>122 BHD: General Courses</p>
          <p>104 BHD: Literacy &amp; Learn to Write</p>
          <h3>Primary</h3>
          <p>117 BHD: General Courses</p>
          <p>104 BHD: Literacy &amp; Learn to Write</p>
          <h3>Middle and Secondary</h3>
          <p>121.5 BHD: General Courses</p>
          <p>
            Cost includes registration, books, stationery, and three sessions.
          </p>
          <Link to="/register" className="button">Register Now</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    toggle: state.landingPageReducer.toggle
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { toggle }
  )(RegistrationInformation)
)