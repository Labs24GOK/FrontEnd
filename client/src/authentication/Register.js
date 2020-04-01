import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { familyRegister } from '../actions/registrationActions';
import './register.scss';
import { toggle } from '../actions/landingPageActions/landingPageActions';
import ReactGA from 'react-ga';

import { useForm } from 'react-hook-form';

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

	const { register, errors, handleSubmit } = useForm();

  useEffect(() => { props.toggle(); }, [props.success]);

  const prevStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  const nextStep = e => {
    e.preventDefault();
    setStep(step + 1);
  };

  // const formSubmit = data => { props.familyRegister({ user, family, student }, props.history ); };
  const formSubmit = data => { props.familyRegister({}, props.history ); };

  console.log("info:", familyInfo, studentInfo);

  if (!props.success) {
      return (
        <div className='parent-reg'>
          <RegistrationInstructions />
          <RegistrationProgressBar step={step} />
          <div className='reg-form'>
              {(step === 1 || step === 3) && <RegistrationFamilyInfoForm step={step} familyInfo={familyInfo} setFamilyInfo={setFamilyInfo} />}
              {(step === 2 || step === 3) && <RegistrationStudentInfoForm step={step} studentInfo={studentInfo} setStudentInfo={setStudentInfo} />}
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
