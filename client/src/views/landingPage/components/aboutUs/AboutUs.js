import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { resetNav, toggle } from '../../../../actions/landingPageActions/landingPageActions';
import { connect } from 'react-redux';
import "./aboutUs.scss";
import Garden from "../../../../assets/Garden.png";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-157968315-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function AboutUs(props) {
  useEffect(() => {
    props.toggle()
  }, [])

  return (
    <div className="about-us">
      <header>
        <h1>The Garden of Knowledge</h1>
      </header>
      <div className="body">
        <div className="body-left">
          <h2>Our Vision</h2>
          <p>
            Making interactive language learning a possibilty for all.
          </p>
          <h2>Our Mission</h2>
          <p>
          We provide the highest standards of learning, adapting to people's wants and needs. Our students will have a measureable output, both in the center and at school or work.
          </p>
          <img src={Garden} alt="The Garden of Knowledge"/>
        </div>
        <div className="body-right">
          <h2>About Us</h2>
          <p>
          The Garden of Knowledge founded originally as a charity program in 2014, has always had the local comminity at heart. We have a passion for providing the highest standards to students and parents, and a positive, productive work environment for our staff.
          </p>
          <Link to="/contact-us" className="button">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { resetNav, toggle }
  )(AboutUs)
)