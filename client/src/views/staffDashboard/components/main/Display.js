import React, { useEffect, useState } from 'react';
import Students from '../students/Students';
import Staff from '../staff/Staff';
import Courses from '../courses/Courses';
import Worklog from '../worklog/Worklog';
import Attendance from '../attendance/Attendance';


function Display({ navigation }) {

  {if (navigation === 'students') {
    return (
      <div>
        <Students />
      </div>
    )
  } else if (navigation === 'staff') {
    return (
      <div>
        <Staff />
      </div>
    )
  } else if (navigation === 'work log') {
    return (
      <div>
        <Worklog />
      </div>
    )
  } else if (navigation === 'courses') {
    return (
      <div>
        <Courses />
      </div>
    )
  } else if (navigation === 'attendance') {
    return (
      <div>
        <Attendance />
      </div>
    )
  } 
}
}

export default Display;