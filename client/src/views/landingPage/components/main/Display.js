import React from 'react';
import Landing from './Landing';
import CourseStructure from '../courseStructure/CourseStructure';
import RegistrationInformation from '../registrationInformation/RegistrationInformation';
import AboutUs from '../aboutUs/AboutUs';
import ContactUs from '../contactUs/ContactUs';

function Display({ navigation }) {

  {if (navigation === '') {
    return (
      <Landing />
    )
  } else if (navigation === 'course') {
      return (
        <CourseStructure />
      )
  } else if (navigation === 'registration') {
      return (
        <RegistrationInformation />
      )
  } else if (navigation === 'about') {
      return (
        <AboutUs />
      )
  } else if (navigation === 'contact') {
      return (
        <ContactUs />
      )
    }
  }

}

export default Display;