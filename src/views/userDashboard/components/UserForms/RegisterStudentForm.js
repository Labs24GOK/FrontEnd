import React, { useState, useEffect } from 'react';
import { Steps, Button } from 'antd';

// Sub component imports
import StudentDetails from './StudentDetails';
import StudentAddress from './StudentAddress';
import StudentContacts from './StudentContacts';
import StudentReview from './StudentReview';

const RegisterStudentForm = () => {
  const [regState, setRegState] = useState(0);
  const { Step } = Steps;

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
        return <StudentDetails />;
      case 1:
        return <StudentAddress />;
      case 2:
        return <StudentContacts />;
      case 3:
        return <StudentReview />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Steps current={regState}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="form-steps-content">{getStep(regState)}</div>
      <div className="form-steps-action">
        {regState < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {regState > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default RegisterStudentForm;
