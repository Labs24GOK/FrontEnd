import React from 'react';
import Student from '../students/Student.js';
import MainUserPage from '../mainUserPage/Main';
import Courses from '../courses/Courses';
import Staff from '../staff/Staff';

function Display({ navigation }) {
    if (navigation === 'main') {
      return (
        <MainUserPage />
      )
    }
     if (navigation === 'students') {
      return (
        <div>
          <Student /> 
        </div>
      )
    } else if (navigation === 'courses') {
      return (
        <Courses />
      )
    } else if (navigation === 'staff') {
      return (
        <Staff />
      )
    }
}

export default Display;