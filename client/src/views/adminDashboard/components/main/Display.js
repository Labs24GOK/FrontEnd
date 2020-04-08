import React from 'react';
import Student from '../students/Student.js';
import Calendar from '../calendar/Calendar';
import Schedule from '../schedule/Schedule';
// import Payments from '../payments/Payments';
import Tables from '../tables/Tables';
import Queries from '../queries/Queries';
import Documents from '../documents/Documents';
import MainUserPage from '../mainUserPage/Main';

import Courses from '../courses/Courses';
import Staff from '../staff/Staff';

import Reports from "../students/studentProgress/StudentProgressTab";
import AddReport from "../students/studentProgress/AddStudentProgressForm";
import EditReport from "../students/studentProgress/EditStudentProgressForm";

import PlacementTest from "../students/placementTest/placementTest";
import PlacementForm from "../students/placementTest/placementForm";

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