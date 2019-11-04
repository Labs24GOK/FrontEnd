import React, { useEffect, useState } from 'react';
import Students from '../students/Students';
import Schedule from '../schedule/Schedule';
import Payments from '../payments/Payments';
import Courses from '../courses/Courses';
import MainUserPage from '../mainUserPage/MainUserPage';


function Display({ navigation }) {

  useEffect(() => {
    console.log('Display navigation: ', navigation)
  })
  {if (navigation === 'main') {
    return (
      <div>
        <MainUserPage />
      </div>
    )
  } else if (navigation === 'courses') {
    return (
      <div>
        <Courses />
      </div>
    )
  } 
  // else if (navigation === 'schedule') {
  //   return (
  //     <div>
  //       <Schedule />
  //     </div>
  //   )
  // } 
  else if (navigation === 'payments') {
    return (
      <div>
        <Payments />
      </div>
    )
  } 
}
}

export default Display;