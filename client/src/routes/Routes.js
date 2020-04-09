// import React, { useEffect } from "react";
// import { Route, Switch } from "react-router-dom";
// import { withRouter } from "react-router";
// import { connect } from 'react-redux';
// import { loggedIn } from '../actions/authenticationActions';
// import Login from '../authentication/Login';
// import LandingPage from '../views/index';
// import DashboardView from '../views';

// function Routes(props) {

//   useEffect(() => {
//     props.loggedIn(props.history);
//   }, [])

//   return (
//     <div>
//       <Switch>
//       { props.state.authenticationReducer.user.authenticated && 
//             <Route exact path='/dashboard' render={() => 
//               <DashboardView />
//              } /> 
//           }
//         <Route  path='/login' render={() => <Login />} />
//         <Route exact path="/" render={() => <LandingPage />} />
//       </Switch>
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     state: state
//   };
// };

// export default withRouter(connect(
//   mapStateToProps,
//   { loggedIn }
// )(Routes));


import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { loggedIn } from '../actions/authenticationActions';
import Login from '../authentication/Login';
import DashboardView from '../views';
import LandingRegistrationInformation from '../views/landingPage/components/registrationInformation/RegistrationInformation';
import LandingHeader from '../views/landingPage/components/header/NavBar';
import LandingMain from '../views/landingPage/components/main/LandingPage';
import LandingAboutUs from '../views/landingPage/components/aboutUs/AboutUs';
import LandingContactUs from '../views/landingPage/components/contactUs/ContactUs';
import Footer from '../views/landingPage/components/footer/Footer';
import CourseStructureHeader from '../views/landingPage/components/courseStructure/NavBar';
import CourseStructureMain from '../views/landingPage/components/courseStructure/CourseStructure';
import Kindergarten from '../views/landingPage/components/courseStructure/Kindergarten';
import Primary from '../views/landingPage/components/courseStructure/Primary';
import MiddleAndSecondary from '../views/landingPage/components/courseStructure/MiddleAndSecondary';
import Register from '../authentication/Register';


function Routes(props) {
  useEffect(() => {
    props.loggedIn(props.history, props.location);
  }, [])
  return (
    <div>
      {props.location.pathname !== '/dashboard' && <LandingHeader /> }
      <Switch>
        {props.state.authenticationReducer.user.authenticated && 
              <Route exact path='/dashboard' render={() => 
                <DashboardView />
              } /> 
            }
        <Route  path='/login' render={() => 
          <>
            <Login />
            <Footer />
          </>
          } />
        <Route  path='/register' render={() => 
          <>
            <Register />
            <Footer />
          </>
          } />
        <Route exact path="/" render={() => 
          <> 
            <LandingMain />
            <Footer />
          </>}/>
        <Route exact path="/registration-information" render={() => 
          <>
            <LandingRegistrationInformation />
            <Footer />
          </>}/> 
        <Route exact path="/about-us" render={() => 
          <>
            <LandingAboutUs />
            <Footer />
          </>}/> 
        <Route exact path="/contact-us" render={() => 
          <>
            <LandingContactUs />
            <Footer />
          </>}/> 
        <Route exact path="/course-structure" render={() => 
          <>
            <CourseStructureHeader />
            <CourseStructureMain />
            <Footer />
          </>}/> 
        <Route exact path="/course-structure/kindergarten" render={() => 
          <>
            <CourseStructureHeader />
            <Kindergarten />
            <Footer />
          </>}/> 
        <Route exact path="/course-structure/primary" render={() => 
          <>
            <CourseStructureHeader />
            <Primary />
            <Footer />
          </>}/> 
        <Route exact path="/course-structure/middle-and-secondary" render={() => 
          <>
            <CourseStructureHeader />
            <MiddleAndSecondary />
            <Footer />
          </>}/> 
      </Switch>
    </div>
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



