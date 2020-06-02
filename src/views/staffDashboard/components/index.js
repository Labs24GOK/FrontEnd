import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import StaffDashboardHeader from './StaffDashboardHeader';
import StaffDashboard from './StaffDashboard';
import Footer from '../../marketing/components/Footer';
import '../../marketing/marketing.scss';

function Index() {
  let { path } = useRouteMatch();

  return (
  <div className="content">
    
    <StaffDashboardHeader />

      <Route exact path={path}>
        <StaffDashboard />  
    </Route>

    <Footer />
  </div>
  )
}

export default Index;