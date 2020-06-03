import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import StaffDashboardHeader from './StaffDashboardHeader';
import StaffDashboard from './StaffDashboard';
import Footer from '../../marketing/components/Footer';
import './staffDashboard.scss';
import StaffCourseCard from './StaffCourseCard';

function Index() {
  let { path } = useRouteMatch();

  return (
  <div className="staffDashboard">
    <StaffDashboardHeader />
    <Switch>
      <Route exact path={path}>
        <StaffDashboard />  
    </Route>
    <Route exact path="dashboard/staffCourses/:course_id">
      <StaffCourseCard  />
    </Route>
    </Switch>
    <Footer />
  </div>
  )
}

export default Index;