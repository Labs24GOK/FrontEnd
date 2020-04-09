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
            <p>Movement, stories, activities,
            discussions, games and crafts, all 
            centered around their topic of the day.</p>
            <img src={KindergartenPic} alt="Children on floor solving puzzles involving animal names" />
          </div>
          <div className="body-right">
            <h2>Super Safari</h2>
            <p>
            Join Polly, Leo, Mike and Gina on an exciting adventure that welcomes very young children to English through exciting stories, action songs, arts and crafts, and plenty of playtime. With children’s developmental needs in mind Super Safari introduces the new language through play while improving memory and concentration; practising motor-sensory skills and developing thinking and creativity. Together with their animal friends children also discover the fascinating world around them and the joy of playing together, the importance of sharing and other social values.
            </p>
            <h2>Jolly Phonics</h2>
            <p>
            Jolly Phonics, the world leader in child literacy will have your child recognizing letters, sounds, and reading in no time at all. Perfect for children going into school or kindergarten, or those who are struggling with their English literacy. The special thing about Jolly Phonics is the alphabet is NOT taught in order, don't worry, there is wisdom to this, your child will be able to read whole, real words very quickly.
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