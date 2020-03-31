import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { familyRegister } from '../actions/registrationActions';
import Dropdown from 'react-dropdown';
import './register.scss';
import { toggle } from '../actions/landingPageActions/landingPageActions';
import ReactGA from 'react-ga';

import RegistrationInstructions from "./RegistrationInstructions";

ReactGA.initialize('UA-157968315-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function Register(props) {
  const [step, setStep] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState('');

  const locationArr = ['Select Location', 'Bani Jamra', 'Hamad Town'];
  const [location, setLocation] = useState(locationArr[0]);

  // handle required fields
  const [errorBorderUsername, setErrorBorderUsername] = useState('#595759'); //error #C73642
  const [errorBorderPassword, setErrorBorderPassword] = useState('#595759'); //error #C73642
  const [errorBorderConfirmPassword, setErrorBorderConfirmPassword] = useState(
    '#595759'
  ); //error #C73642
  const [errorBorderEmail, setErrorBorderEmail] = useState('#595759'); //error #C73642
  const [errorBorderFatherName, setErrorBorderFatherName] = useState('#595759'); //error #C73642
  const [errorBorderMotherName, setErrorBorderMotherName] = useState('#595759'); //error #C73642
  const [
    errorBorderPrimaryTelephone,
    setErrorBorderPrimaryTelephone,
  ] = useState('#595759'); //error #C73642
  const [
    errorBorderSecondaryTelephone,
    setErrorBorderSecondaryTelephone,
  ] = useState('#595759'); //error #C73642
  const [errorBorderFirstName, setErrorBorderFirstName] = useState('#595759'); //error #C73642
  const [errorBorderAdditionalNames, setErrorBorderAdditionalNames] = useState(
    '#595759'
  ); //error #C73642
  const [errorBorderCpr, setErrorBorderCpr] = useState('#595759'); //error #C73642
  const [errorBorderStudentEmail, setErrorBorderStudentEmail] = useState(
    '#595759'
  ); //error #C73642
  const [errorBorderBirthdate, setErrorBorderBirthdate] = useState('#595759'); //error #C73642
  const [errorLocation, setErrorLocation] = useState('#595759'); //error

  useEffect(() => {
    props.toggle();
  }, [props.success]);

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    user_type: 'parent',
  });

  const [family, setFamily] = useState({
    father_name: '',
    mother_name: '',
    primary_telephone: '',
    secondary_telephone: '',
  });

  const [student, setStudent] = useState({
    first_name: '',
    additional_names: '',
    cpr: '',
    email: '',
    birthdate: '',
    location_id: '',
  });

  function handleLocationDropdown(e) {
    let index;
    for (let i = 0; i < locationArr.length; i++) {
      if (locationArr[i] === e.value) {
        index = i;
      }
    }
    setStudent({ ...student, location_id: index });
    setLocation(locationArr[index]);
  }

  const handleUserChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFamilyChange = e => {
    setFamily({ ...family, [e.target.name]: e.target.value });
  };

  const handleStudentChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  const nextStep = e => {
    e.preventDefault();
    setStep(step + 1);
  };

  const nextStepStudentInfoBtn = e => {
    e.preventDefault();
    //check for required fields
    if (
      user.username === '' ||
      user.password === '' ||
      confirmPassword === '' ||
      user.email === '' ||
      family.father_name === '' ||
      family.primary_telephone === ''
    ) {
      if (user.username === '') {
        setErrorBorderUsername('#C73642');
      }
      if (user.password === '') {
        setErrorBorderPassword('#C73642');
      }
      if (confirmPassword === '') {
        setErrorBorderConfirmPassword('#C73642');
      }
      if (user.email === '') {
        setErrorBorderEmail('#C73642');
      }
      if (family.father_name === '' && family.mother_name === '') {
        setErrorBorderFatherName('#C73642');
        setErrorBorderMotherName('#C73642');
      }
      if (
        family.primary_telephone === '' &&
        family.secondary_telephone === ''
      ) {
        setErrorBorderPrimaryTelephone('#C73642');
      }
    } else if (user.password !== confirmPassword) {
      setErrorBorderPassword('#C73642');
      setErrorBorderConfirmPassword('#C73642');
    } else {
      setStep(step + 1);
    }
  };

  const nextStepReviewRegistrationBtn = e => {
    e.preventDefault();
    //check for required fields and set border
    if (
      student.first_name === '' ||
      student.additional_names === '' ||
      student.cpr === '' ||
      student.email === '' ||
      student.birthdate === '' ||
      student.location_id === ''
    ) {
      if (student.first_name === '') {
        setErrorBorderFirstName('#C73642');
      }
      if (student.additional_names === '') {
        setErrorBorderAdditionalNames('#C73642');
      }
      if (student.cpr === '') {
        setErrorBorderCpr('#C73642');
      }
      if (student.email === '') {
        setErrorBorderStudentEmail('#C73642');
      }
      if (student.birthdate === '') {
        setErrorBorderBirthdate('#C73642');
      }
      if (student.location_id === '') {
        setErrorLocation('#C73642');
      }
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.familyRegister(
      { user: user, family: family, student: student },
      props.history
    );
  };

  {
    if (!props.success) {
      return (
        <div className='parent-reg'>
          <RegistrationInstructions />
          <div className='horiz-line' />
          <div className='progress-bar'>
            <div className='circles'>
              <div className={step >= 1 ? 'active-register' : ''}>
                {step >= 1 ? '✔' : ''}
              </div>
              <div className={step >= 2 ? 'active-register' : ''}>
                {step >= 2 ? '✔' : ''}
              </div>
              <div className={step >= 3 ? 'active-register' : ''}>
                {step >= 3 ? '✔' : ''}
              </div>
            </div>
            <div className='circle-labels'>
              <p>Your Information</p>
              <p>Student Information</p>
              <p>Submit Registration</p>
            </div>
          </div>
          <div className='reg-form'>
            {step === 1 && <h4>Your Information</h4>}
            {step === 2 && <h4>Student Information</h4>}

            <form>
              {step === 1 && (
                <fieldset>
                  <input
                    style={{ borderBottom: `1px solid ${errorBorderUsername}` }}
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={user.username}
                    onChange={handleUserChange}
                  />

                  <input
                    style={{
                      borderBottom: `1px solid ${errorBorderFatherName}`,
                    }}
                    type='text'
                    name='father_name'
                    placeholder="Father's Name"
                    value={family.father_name}
                    onChange={handleFamilyChange}
                  />
                  <input
                    style={{
                      borderBottom: `1px solid ${errorBorderMotherName}`,
                    }}
                    type='text'
                    name='mother_name'
                    placeholder="Mother's Name"
                    value={family.mother_name}
                    onChange={handleFamilyChange}
                  />
                  <input
                    style={{ borderBottom: `1px solid ${errorBorderEmail}` }}
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={user.email}
                    onChange={handleUserChange}
                  />
                  <input
                    style={{
                      borderBottom: `1px solid ${errorBorderPrimaryTelephone}`,
                    }}
                    type='text'
                    name='primary_telephone'
                    placeholder='Primary Telephone'
                    value={family.primary_telephone}
                    onChange={handleFamilyChange}
                  />
                  <input
                    style={{
                      borderBottom: `1px solid ${errorBorderSecondaryTelephone}`,
                    }}
                    type='text'
                    name='secondary_telephone'
                    placeholder='Secondary Telephone'
                    value={family.secondary_telephone}
                    onChange={handleFamilyChange}
                  />
                  <input
                    style={{ borderBottom: `1px solid ${errorBorderPassword}` }}
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={user.password}
                    onChange={handleUserChange}
                  />
                  <input
                    style={{
                      borderBottom: `1px solid ${errorBorderConfirmPassword}`,
                    }}
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </fieldset>
              )}
              {step === 2 && (
                <fieldset>
                  <input
                    style={{
                      borderBottom: `1px solid ${errorBorderFirstName}`,
                    }}
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    value={student.first_name}
                    onChange={handleStudentChange}
                  />
                  <input
                    style={{
                      borderBottom: `1px solid ${errorBorderAdditionalNames}`,
                    }}
                    type='text'
                    name='additional_names'
                    placeholder='Surname'
                    value={student.additional_names}
                    onChange={handleStudentChange}
                  />
                  <input
                    style={{ borderBottom: `1px solid ${errorBorderCpr}` }}
                    type='text'
                    name='cpr'
                    placeholder='Student CPR ID'
                    value={student.cpr}
                    onChange={handleStudentChange}
                  />
                  <input
                    style={{
                      borderBottom: `1px solid ${errorBorderStudentEmail}`,
                    }}
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={student.email}
                    onChange={handleStudentChange}
                  />
                  <input
                    style={{
                      borderBottom: `1px solid ${errorBorderBirthdate}`,
                    }}
                    type='date'
                    name='birthdate'
                    placeholder='Student Birthday'
                    value={student.birthdate}
                    onChange={handleStudentChange}
                  />
                  <div
                    style={{
                      borderBottom: `1px solid ${errorLocation}`,
                      width: '250px',
                    }}
                  >
                    <Dropdown
                      onChange={handleLocationDropdown}
                      controlClassName='myControlClassName'
                      className='dropdownRoot'
                      options={locationArr}
                      value={location}
                    />
                  </div>
                </fieldset>
              )}
              {step === 3 && (
                <fieldset>
                  <h4>Your Information</h4>
                  <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={user.username}
                    onChange={handleUserChange}
                  />
                  <input
                    type='text'
                    name='father_name'
                    placeholder="Father's Name"
                    value={family.father_name}
                    onChange={handleFamilyChange}
                  />
                  <input
                    type='text'
                    name='mother_name'
                    placeholder="Mother's Name"
                    value={family.mother_name}
                    onChange={handleFamilyChange}
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={user.email}
                    onChange={handleUserChange}
                  />
                  <input
                    type='text'
                    name='primary_telephone'
                    placeholder='Primary Telephone'
                    value={family.primary_telephone}
                    onChange={handleFamilyChange}
                  />
                  <input
                    type='text'
                    name='secondary_telephone'
                    placeholder='Secondary Telephone'
                    value={family.secondary_telephone}
                    onChange={handleFamilyChange}
                  />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={user.password}
                    onChange={handleUserChange}
                  />
                  <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={handlePasswordChange}
                  />
                  <h4>Student Information</h4>
                  <input
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    value={student.first_name}
                    onChange={handleStudentChange}
                  />
                  <input
                    type='text'
                    name='additional_names'
                    placeholder='Surname'
                    value={student.additional_names}
                    onChange={handleStudentChange}
                  />
                  <input
                    type='text'
                    name='cpr'
                    placeholder='Student CPR ID'
                    value={student.cpr}
                    onChange={handleStudentChange}
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={student.email}
                    onChange={handleStudentChange}
                  />
                  <input
                    type='date'
                    name='birthdate'
                    placeholder='Student Birthday'
                    value={student.birthdate}
                    onChange={handleStudentChange}
                  />
                  <div
                    style={{
                      borderBottom: `1px solid ${errorLocation}`,
                      width: '250px',
                    }}
                  >
                    <Dropdown
                      onChange={handleLocationDropdown}
                      controlClassName='myControlClassName'
                      className='dropdownRoot'
                      options={locationArr}
                      value={location}
                    />
                  </div>
                </fieldset>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {step === 2 && (
                  <button onClick={prevStep}>Back: Your Information </button>
                )}

                {step === 3 && (
                  <button onClick={prevStep}>Back: Student Information </button>
                )}

                {step === 1 && (
                  <button style={{ visibility: 'hidden' }}></button>
                )}

                {step === 1 && (
                  <button onClick={nextStepStudentInfoBtn}>
                    Next: Student Information
                  </button>
                )}

                {step === 2 && (
                  <button onClick={nextStepReviewRegistrationBtn}>
                    Next: Review Registration{' '}
                  </button>
                )}

                {step === 3 && (
                  <button onClick={handleSubmit}>Submit Registration </button>
                )}
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className='success-message'
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            margin: '40px',
            alignItems: 'center',
            height: 'calc(100vh - 282px)',
          }}
        >
          <h1>Congratulations, {props.student}!</h1>
          <h2>You've registered for Speak Out. Thank you!</h2>
          <Link to='/login' className='button'>
            Sign In
          </Link>
        </div>
      );
    }
  }
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
