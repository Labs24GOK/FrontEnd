import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import "./kindergarten.scss";
import KindergartenPic from "../../../../assets/Kindergarten.jpg";
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";
import { connect } from 'react-redux';
import { withRouter } from "react-router";

function Kindergarten(props) {

  useEffect(() => {
    props.toggle();
  }, [])

  return (
    <>
      <div className="kindergarten-course-structure">
        <div className="body">
          <div className="body-left">
            <h2>What We Offer</h2>
            <p>
              Songs, stories, games and movement
              <br />
              4-year-olds will love learning at SpeakOut!
              <br />
              English for kindergarten for the age group 4-6 years
            </p>
            <img src={KindergartenPic} alt="Children on floor solving puzzles involving animal names" />
          </div>
          <div className="body-right">
            <h2>KG English for 4-6 year olds</h2>
            <p>
              Here students will be learning an age-appropriate general English
              course.
            </p>
            <h2>English Fun for 4-5 year olds</h2>
            <p>
              Students will play vocabulary, grammar and literacy word games.
            </p>
            <h2>Literacy for 4-8 year olds</h2>
            <p>
              Jolly Phonics, the world leader in child literacy will have your
              child recognizing letter, sounds, and reading in no time at all.
              Perfect for children going into school or those who are struggling
              with their English literacy.
            </p>
            <Link to="/register" className="button">Register Now</Link>
          </div>
        </div>
      </div>
    </>
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
  )(Kindergarten)
)