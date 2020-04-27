import React from 'react';
import { Redirect } from "react-router-dom";
import AdminDashboard from './adminDashboard/components/index';
import UserDashboard from './userDashboard/components/index';
import StaffDashboard from './staffDashboard/components/index';

function Index() {
    // USER TYPE THAT WAS SAVED WHEN USER LOGGED IN

    console.log("dashboardview", localStorage.getItem('userType'));

    const userType = localStorage.getItem('userType');
    if (userType === 'admin') {
      return <AdminDashboard />;
    } else if (userType === 'parent') {
      return <UserDashboard />;
    } else if (userType === 'staff') {
      return <StaffDashboard />;
    } else {
      return <Redirect to="/login" />;
    }
}

export default Index;
