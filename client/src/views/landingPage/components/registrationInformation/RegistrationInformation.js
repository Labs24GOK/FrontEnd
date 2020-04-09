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
          To register a student, parents must provide personal information, such as school grade, contact information and CPR.
          </p>
          <h2>Placement Test</h2>
          <p>All students must take a minimum of a multiple choice placement test and spoken placement test.</p>
          <h2>Terms and Conditions</h2>
          <p>
          A parent will be required to sign a document containing course information and student behaviour guide, as well as commiting them to finish a 3 month section once they have started classes.
          </p>
        </div>
        <div className="body-right">
          <h2>Fees</h2>
          <h3>Kindergarten</h3>
          <p>122BHD</p>
          <h3>Primary</h3>
          <p>122BHD</p>
          <h3>Intermediate and Secondary</h3>
          <p>127BHD</p>
          <p>
            Cost includes registration, books, stationery, and 24 classes.
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