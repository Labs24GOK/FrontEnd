import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import UserDashboardHeader from './UserDashboardHeader';
import UserDashboard from './UserDashboard';
import RegisterStudentForm from './UserForms/RegisterStudentForm';
import UserSettings from './UserSettings';
import Footer from '../../marketing/components/Footer';

import '../../marketing/marketing.scss';
import '../userDashboard.scss';

function Index() {
  let { path, url } = useRouteMatch();
  return (
    <div className="content">
      <UserDashboardHeader />
      <Switch>
        <Route exact path={path}>
          <UserDashboard />
        </Route>
        <Route path={`${path}/student-register`}>
          <RegisterStudentForm />
        </Route>
        <Route path={`${path}/account-settings`}>
          <UserSettings />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default Index;
