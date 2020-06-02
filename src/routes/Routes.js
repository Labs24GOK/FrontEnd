import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from '../authentication/Login';
import DashboardView from '../views';
import Register from '../authentication/Register';
import Student from '../views/userDashboard/components/Student/Student';
import ProtectedRoute from "./ProtectedRoute";

import Header from "../views/marketing/components/Header";
import Footer from "../views/marketing/components/Footer";

import Marketing from "../views/marketing/Marketing";

function Routes() {
  return (
    <>
      <Switch>
        <ProtectedRoute path='/dashboard' component={DashboardView} />
        <Route exact path="/" render={() => <Marketing page="home" />}/>
        <Route path="/schedules" render={() => <Marketing page="course_structure" />}/>
        <Route path="/courses" render={() => <Marketing page="courses" />}/>
        <Route path="/about" render={() => <Marketing page="about" />}/>
        <Route path="/login" render={() => <><Header /><Login /><Footer /></>}/>
        <Route path="/register" render={() => <><Header /><Register /><Footer /></>}/>
        <Route path="/student/:id" component={Student} />
      </Switch>
    </>
  );
}
export default Routes;



