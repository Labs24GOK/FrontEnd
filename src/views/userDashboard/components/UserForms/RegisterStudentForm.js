import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';

// Sub component imports
import StudentDetails from './StudentDetails';
import StudentAddress from './StudentAddress';
import StudentContacts from './StudentContacts';
import StudentReview from './StudentReview';
import StudentSuccess from './StudentSuccess';

const RegisterStudentForm = () => {
  const { Step } = Steps;

  const steps = [
    {
      title: 'Details',
    },
    {
      title: 'Address',
    },
    {
      title: 'Emergency Contacts',
    },
    {
      title: 'Review',
    },
  ];

  const [state, setState] = useState({ current: 0 });

  function next() {
    const current = state.current + 1;
    this.setState({ current });
  }

  function prev() {
    const current = state.current - 1;
    setState({ current });
  }

  const { current } = state;

  return (
    <div>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="form-steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default RegisterStudentForm;
