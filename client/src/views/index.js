import React from 'react';
import AdminDashboard from './adminDashboard/components/index';
import UserDashboard from './userDashboard/components/index';
import StaffDashboard from './staffDashboard/components/index';

function Index() {
    // USER TYPE THAT WAS SAVED WHEN USER LOGGED IN
    const userType = localStorage.getItem('userType');
    if (userType === 'admin') {
      return <AdminDashboard />;
    } else if (userType === 'parent') {
      return <UserDashboard />;
    } else if (userType === 'staff') {
      return <StaffDashboard />;
    } else {
      // return <h1>Login failed.</h1>;
      return <UserDashboard />
    }
}

export default Index;
