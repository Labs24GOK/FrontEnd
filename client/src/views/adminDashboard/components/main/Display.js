import React from 'react';
import StudentTable from '../students/StudentTable';
import Calendar from '../calendar/Calendar';
import Schedule from '../schedule/Schedule';
import Payments from '../payments/Payments';
import Tables from '../tables/Tables';
import Queries from '../queries/Queries';
import Documents from '../documents/Documents';
import MainUserPage from '../mainUserPage/Main';
import Parents from '../parents/Parents';

function Display({ navigation }) {

  {if (navigation === 'main') {
    return (
      <MainUserPage />
    )
  } else if (navigation === 'students') {
    return (
      <div>
        <StudentTable />
      </div>
    )
  } else if (navigation === 'parents') {
    return (
      <Parents />
    )
  // } 
  // else if (navigation === 'calendar') {
  //   return (
  //     <div>
  //       <Calendar />
  //     </div>
  //   )
  // } else if (navigation === 'schedule') {
  //   return (
  //     <div>
  //       <Schedule />
  //     </div>
  //   )
  } else if (navigation === 'payments') {
    return (
      <div>
        <Payments />
      </div>
    )
  } 
  // else if (navigation === 'tables') {
  //   return (
  //     <div>
  //       <Tables />
  //     </div>
  //   )
  // } else if (navigation === 'queries') {
  //   return (
  //     <div>
  //       <Queries />
  //     </div>
  //   )
  // } else if (navigation === 'documents') {
  //   return (
  //     <div>
  //       <Documents />
  //     </div>
  //   )
  // }
}
}

export default Display;