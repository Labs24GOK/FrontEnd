import React from 'react';
import Student from '../students/Student.js';
import Calendar from '../calendar/Calendar';
import Schedule from '../schedule/Schedule';
// import Payments from '../payments/Payments';
import Tables from '../tables/Tables';
import Queries from '../queries/Queries';
import Documents from '../documents/Documents';
import MainUserPage from '../mainUserPage/Main';
import Parents from '../parents/Parents';
import Courses from '../courses/Courses';
import Staff from '../staff/Staff';


function Display({ navigation }) {
  {
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
    } else if (navigation === 'parents') {
      return (
        <Parents />
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
}

export default Display;