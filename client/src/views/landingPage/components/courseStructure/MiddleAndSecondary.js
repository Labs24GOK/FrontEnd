import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./middleSecondary.scss";
import Picnic from "../../../../assets/girls_picnicplay.jpg";
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";
import { connect } from 'react-redux';


function MiddleSecondary(props) {

  useEffect(() => {
    props.toggle();
  }, [])

  return (
    <div className="middle-secondary">
      <div className="body">
        <div className="body-left">
          <h2>What We Offer</h2>
          <p>
            Students in this age range become very successful language learners.
            They have increased ability to analyze and learn, and are more used
            to learning in general and greater independence.
          </p>
          <p>
            At these levels, we further encourage autonomy and analysis about
            how each individual's work is preferred in order to achieve the best
            results. We encourage learners to use English outside the classroom
            as a means of gaining a more disciplined and balanced approach in
            all language skills: reading, writing, listening and speaking.
          </p>
          <img src={Picnic} alt="Girls having a picnic outdoors."/>
        </div>
        <div className="body-right">
          <h2>Preparatory English for 13-15 years</h2>
          <h2>Secondary English for 15-17 years</h2>
          <p>
            Using Cambridge Premium Books, students are taught general English
            through all four skills (reading, writing, listening and speaking)
            with a special focus on listening and speaking.
          </p>
          <h2>Literacy</h2>
          <p>
            In these courses, children bring their textbooks used in public
            schools to review lessons with our teachers.
          </p>
          <Link to="/register" className="button">Register Now</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
    toggle: state.landingPageReducer.toggle
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { toggle }
  )(MiddleSecondary)
)