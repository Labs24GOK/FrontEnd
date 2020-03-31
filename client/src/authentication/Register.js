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
import RegistrationPrevNextButtons from './RegistrationPrevNextButtons';
import RegistrationSuccessMessage from "./RegistrationSuccessMessage";

ReactGA.initialize('UA-157968315-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function Register(props) {
  
  const [step, setStep] = useState(1);

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

  if (!props.success) {
      return (
        <div className='parent-reg'>
          <RegistrationInstructions />
          <RegistrationProgressBar step={step} />
          <div className='reg-form'>
            {step === 1 && <h4>Your Information</h4>}
            {step === 2 && <h4>Student Information</h4>}

            <form onSubmit={handleSubmit(formSubmit)}>

              {(step === 1 || step === 3) && (
                <fieldset>              
                    <input type="text" name="username" placeholder="Username" ref={register({required: true})} />
                    <input type="text" name="father_name" placeholder="Father's Name" ref={register({required: true})} />
                    <input type="text" name="mother_name" placeholder="Mother's Name" ref={register({required: true})} />
                    <input type="email" name="email" placeholder="Email" ref={register({required: true})} />

                    <input type="text" name="primary_telephone" placeholder="Primary Telephone" ref={register({required: true})} />
                    <input type="text" name="secondary_telephone" placeholder="Secondary Telephone" ref={register({required: true})} />
                    <input type="password" name="password" placeholder="Password" ref={register({required: true})} />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" ref={register({required: true})} />
                </fieldset>
              )}
              {(step === 2 || step === 3) && (
                <fieldset>              
                  <input type="text" name="first_name" placeholder="First Name" ref={register({required: true})} />
                  <input type="text" name="additional_names" placeholder="Additional Names (at least 3)" ref={register({required: true})} />
                  <input type="text" name="cpr" placeholder="Student CPR" ref={register({required: true})} />
                  <input type="email" name="email" placeholder="Email" ref={register({required: true})} />

                  <select name="location" ref={register}>
                    <option value="0">Select Location</option>
                    <option value="1">Bani Jamra</option>
                    <option value="2">Hamad Town</option>
                  </select>

                </fieldset>
              )}
              <RegistrationPrevNextButtons step={step} prevStep={prevStep} nextStep={nextStep} handleSubmit={handleSubmit} />
            </form>
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
