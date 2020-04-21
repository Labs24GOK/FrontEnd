import React from 'react';

import UserDashboardHeader from "./UserDashboardHeader";
import Footer from "../../marketing/components/Footer";

import "../../marketing/marketing.scss";
import "../userDashboard.scss";

function Index() {
  return (
    <div className="content">
      <UserDashboardHeader />
      <h1>The parent dashboard will be redesigned according to the UX hi-fidelity mockup.</h1>
      <Footer />
    </div>
  )
}

export default Index;