import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import StaffDashboardHeader from './StaffDashboardHeader';
import StaffDashboard from './StaffDashboard';
import Footer from '../../marketing/components/Footer';
import '../../marketing/marketing.scss';

function Index() {
  let { path, url } = useRouteMatch();

  return (
  <div className="content">
    
    <StaffDashboardHeader />
    <Switch>  
      <Route exact path={path}>
        <StaffDashboard />  
    </Route>
    </Switch>
    <Footer />
  </div>
  )
}

export default Index;