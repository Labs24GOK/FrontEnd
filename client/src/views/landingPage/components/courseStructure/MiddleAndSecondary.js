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
          Students in this age range become very successful language learners. They have increased ability to analyse and learn, and have a greater independence. At at these ages we offer more real life scenarios, encouraging our students to go out in the real world and apply what they have learnt. 
          </p>
          <img src={Picnic} alt="Girls having a picnic outdoors."/>
        </div>
        <div className="body-right">
          <h2>Public School & Exam Support</h2>
          <p>
            The Garden of Knowledge hand picked government school teachers that adore what they do and have a superior knowledge of their subjects. We offer support in English, Arabic, maths, chemistry, biology and physics. We also offer 'night before the exam' revision classes.
            </p>
          <h2>General English</h2>
          <p>
          'English in Mind' offers appealing and imaginitive topics to engage teenagers' interest and motivate them to learn. Through various activities, such as role plays, simulations, research projects and public speaking the  students will develop a great independence and confidence in their language abilities. All 4 skills are focused on, with a greater emphasis on speaking.
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