import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./primary.scss";
import Victoria from "../../../../assets/Victoria_teaching.jpg";
import { connect } from 'react-redux';
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";

function Primary(props) { 

  useEffect(() => {
    props.toggle();
  },[])
  
  return (
    <div className="primary-info">
      <div className="body">
        <div className="body-left">
          <h2>What We Offer</h2>
          <p>
          Primary school children have a high abiliy to learn because of their social tendency, curiosity and natural enthusiasm. They to work very actively and lose focus quickly if they are sitting for long periods without activity. Therefore, physical movement, gestures and activities are important parts of the learning process. We use a variety of activities such as crafts, role plays and games, always related to the topic of the day tp keep these energetic minds awake and excited. You'll soon find that our students are confident in all they do and learn.
          </p>
          <img src={Victoria} alt="The Garden of Knowledge founder, Victoria Labdon" />
        </div>
        <div className="body-right">
          <h2>General English</h2>
          <p>
          Kid's Box is a course that gives children a confident start to learning English, and also fully covers the syllabus of the Cambridge Young Learners English (YLE) tests. New language is presented through amusing stories that your students will adore and practised with fantastic songs and activities, making the learning process a delight. Key language is continuously revised and recycled, helping to build children's confidence, and a focus on communicative activities ensures that children use the language they have learned in a fun. The course will delight young learners through all the activities, crafts, role plays and simulations while alwas focused on the topic.
          </p>
          <h2>Public School &amp; Exam Support</h2>
          <p>
          The Garden of Knowledge hand picked government school teachers that adore what they do and have a superior knowledge of their subjects. We offer support in English, Arabic, maths and Science.
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
  )(Primary)
)