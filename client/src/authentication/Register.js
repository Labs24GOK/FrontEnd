import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { familyRegister } from '../actions/registrationActions';
import './register.scss';
import { toggle } from '../actions/landingPageActions/landingPageActions';
import ReactGA from 'react-ga';

import RegistrationInstructions from "./RegistrationInstructions";
import RegistrationProgressBar from './RegistrationProgressBar';
import RegistrationFamilyInfoForm from "./RegistrationFamilyInfoForm";
import RegistrationStudentInfoForm from "./RegistrationStudentInfoForm";
import RegistrationSuccessMessage from "./RegistrationSuccessMessage";

ReactGA.initialize('UA-157968315-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function Register(props) {
  
  const [step, setStep] = useState(1);
  const [familyInfo, setFamilyInfo] = useState({});
  const [studentInfo, setStudentInfo] = useState({});

  useEffect(() => { props.toggle(); }, [props.success]);

  if (!props.success) {
      return (
        <div className='parent-reg'>
          <RegistrationInstructions />
          <RegistrationProgressBar step={step} />
          <div className='reg-form'>
              {(step === 1 || step === 3) && <RegistrationFamilyInfoForm step={step} setStep={setStep} familyInfo={familyInfo} setFamilyInfo={setFamilyInfo} />}
              {(step === 2 || step === 3) && <RegistrationStudentInfoForm step={step} setStep={setStep} studentInfo={studentInfo} setStudentInfo={setStudentInfo} familyInfo={familyInfo} familyRegister={props.familyRegister} history={props.history} />}
          </div>
        </div>
      );

  } else
      { return (<RegistrationSuccessMessage studentName={props.studentName} />); }
}

const mapStateToProps = state => {
  return {
    state: state,
    success: state.registrationReducer.familyRegister.success,
    student: state.registrationReducer.student.first_name,
  };
};

export default withRouter(
  connect(mapStateToProps, { familyRegister, toggle })(Register)
);