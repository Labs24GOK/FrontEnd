import React, { useState } from 'react';
import StudentTable from './StudentTable';
import StudentCard from './studentCard/StudentCard';
import { Switch, Route } from 'react-router-dom';

const Student = () => {
  const [studentView, setStudentView] = useState('studentTableView');
  const [studentID, setStudentID] = useState('')

  return(
    <Switch>
      <Route exact path='/dashboard/Students'>
        <StudentTable />
      </Route>
      <Route path='/dashboard/Students/:studentID'>
        <StudentCard />
      </Route>
    </Switch>
  )
};

export default Student;