import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { loggedIn } from '../actions/authenticationActions';
import Login from '../authentication/Login';
import DashboardView from '../views';
import Register from '../authentication/Register';

import Header from "../views/marketing/components/Header";
import Footer from "../views/marketing/components/Footer";

import Marketing from "../views/marketing/Marketing";

function Routes(props) {
  useEffect(() => {
    props.loggedIn(props.history, props.location);
  }, [])
  return (
    <>
      <Switch>
        {/* temp; to test without having to log in */}
        <Route exact path='/dashboard' render={() => <DashboardView /> } />

        {props.state.authenticationReducer.user.authenticated && <Route exact path='/dashboard' render={() => <DashboardView /> } />  }
        <Route exact path="/" render={() => <Marketing page="home" />}/>
        <Route path="/schedules" render={() => <Marketing page="course_structure" />}/>
        <Route path="/courses" render={() => <Marketing page="courses" />}/>
        <Route path="/about" render={() => <Marketing page="about" />}/>
        <Route path="/login" render={() => <><Header /><Login /><Footer /></>}/>
        <Route path="/register" render={() => <><Header /><Register /><Footer /></>}/>
      </Switch>
    </>
  );
}
const mapStateToProps = state => {
  return {
    state: state
  };
};
export default withRouter(connect(
  mapStateToProps,
  { loggedIn }
)(Routes));



