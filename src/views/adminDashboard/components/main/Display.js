import React from 'react';
import Student from '../students/Student.js';
// import MainUserPage from '../mainUserPage/Main';
import Courses from '../courses/Courses';
import Staff from '../staff/Staff';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

function Display() {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route exact path='/dashboard'>
        <Redirect to='/dashboard/Students' />
      </Route>
      <Route path='/dashboard/Students'>
        <Student />
      </Route>
      <Route path='/dashboard/Courses'>
        <Courses />
      </Route>
      <Route path='/dashboard/Staff'>
        <Staff />
      </Route>
    </Switch>
  );
}

export default Display;
