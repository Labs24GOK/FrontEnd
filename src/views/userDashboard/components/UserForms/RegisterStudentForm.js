import React, { useState } from 'react';
import { Steps, Button } from 'antd';

// Sub component imports
import StudentDetails from './StudentDetails';
import StudentAddress from './StudentAddress';
import StudentContacts from './StudentContacts';
import StudentReview from './StudentReview';

const RegisterStudentForm = () => {
  const [regState, setRegState] = useState(0);
  const { Step } = Steps;
  const [studentForm, setStudentForm] = useState({});

  const handleChange = e => {
    setStudentForm({
      ...studentForm,
       [e.target.id]: e.target.value 
    });
  };

  const steps = [
    {
      title: 'details',
    },
    {
      title: 'address',
    },
    {
      title: 'emergency contacts',
    },
    {
      title: 'review',
    },
  ];

  function next() {
    const current = regState + 1;
    setRegState(current);
  }

  function prev() {
    const current = regState - 1;
    setRegState(current);
  }

  function getStep(regState) {
    switch (regState) {
      case 0:
        return <StudentDetails handleChange={handleChange} />;
      case 1:
        return <StudentAddress handleChange={handleChange} />;
      case 2:
        return <StudentContacts handleChange={handleChange} />;
      case 3:
        return <StudentReview handleChange={handleChange} />;
      default:
        return null;
    }
  }

  return (
    <div>
      <button onClick={console.log(studentForm)}>form state</button>
      <Steps current={regState}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="form-steps-content">{getStep(regState)}</div>
      <div className="form-steps-action">
        {regState > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {regState < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default RegisterStudentForm;
