import React from 'react';
import AdminDashboard from './adminDashboard/components/index';
import ParentDashboard from './parentDashboard/components/index';
import StaffDashboard from './staffDashboard/components/index';

function Index() {
  {
    const userType = localStorage.getItem('userType');
    if (userType === 'admin') {
      return <AdminDashboard />;
    } else if (userType === 'parent') {
      return <ParentDashboard />;
    } else if (userType === 'staff') {
      return <StaffDashboard />;
    } else {
      return;
    }
  }
}

export default Index;
