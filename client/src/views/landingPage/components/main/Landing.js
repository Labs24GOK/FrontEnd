import React, { useState, useEffect } from 'react';
import NavBar from '../header/NavBar';
import Special from './special/Special';
import Affordability from './affordability/Affordability';
import AgeGroups from './ageGroups/AgeGroups';
import Carousel from './carousel/Carousel';
import RegistrationInformation from './registrationInformation/RegistrationInformation';

function LandingPage() {

  return (
    <>
      <NavBar />
      <Special />
      <Affordability />
      <AgeGroups />
      <Carousel />
      <RegistrationInformation />
    </>
  )
}

export default LandingPage;