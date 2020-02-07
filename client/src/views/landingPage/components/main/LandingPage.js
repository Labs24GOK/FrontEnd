import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import Special from './special/Special';
import Affordability from './affordability/Affordability';
import AgeGroups from './ageGroups/AgeGroups';
//import Carousel from './carousel/Carousel';
import RegistrationInformation from './registrationInformation/RegistrationInformation';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-157968315-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function LandingPage(props) {
useEffect(() => {
  props.toggle();
}, [])
  return (
    <>
      <Header />
      <Special />
      <Affordability />
      <AgeGroups />
      <RegistrationInformation />
    </>
  )
}

const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { toggle }
  )(LandingPage)
)