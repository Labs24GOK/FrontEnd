import React from 'react';

import UserDashboardHeader from "./UserDashboardHeader";
import UserDashboard from "./UserDashboard";
import Footer from "../../marketing/components/Footer";

import "../../marketing/marketing.scss";
import "../userDashboard.scss";

function Index() {
  return (
    <div className="content">
      <UserDashboardHeader />
      <UserDashboard />
      <Footer />
    </div>
  )
}

export default Index;