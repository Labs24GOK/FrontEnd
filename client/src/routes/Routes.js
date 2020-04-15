import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { loggedIn } from '../actions/authenticationActions';
import Login from '../authentication/Login';
import DashboardView from '../views';
import Register from '../authentication/Register';

import MarketingMobile from "../views/marketingMobile/MarketingMobile";

function Routes(props) {
  useEffect(() => {
    props.loggedIn(props.history, props.location);
  }, [])
  return (
    <>
      <Switch>
        {props.state.authenticationReducer.user.authenticated && <Route exact path='/dashboard' render={() => <DashboardView /> } />  }
        <Route exact path="/" render={() => <MarketingMobile page="home" />}/>
        <Route path="/schedules" render={() => <MarketingMobile page="course_structure" />}/>
        <Route path="/courses" render={() => <MarketingMobile page="courses" />}/>
        <Route path="/about" render={() => <MarketingMobile page="about" />}/>
        <Route path="/login" render={() => <Login />}/>
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



