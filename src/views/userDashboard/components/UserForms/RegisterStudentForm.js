import React, { useState } from 'react';
import { Steps, Button, Row, Col, Layout } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewStudent } from '../../../../actions/adminDashboardActions/studentTableActions';

// Sub component imports
import StudentDetails from './StudentDetails';
import StudentAddress from './StudentAddress';
import StudentContacts from './StudentContacts';
import StudentReview from './StudentReview';

const RegisterStudentForm = props => {
  const [regState, setRegState] = useState(0);
  const token = localStorage.getItem('token');
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  const userID = tokenData.subject;
  const { Step } = Steps;
  const { Content } = Layout;
  const [studentForm, setStudentForm] = useState({ user_id: userID });

  const handleChange = e => {
    setStudentForm({
      ...studentForm,
      [e.target.id]: e.target.value,
    });
    console.log(studentForm);
  };

  const formHelper = value => {
    setStudentForm({
      ...studentForm,
      school_grade: value.value,
    });
  };

  const submitForm = values => {
    props.createNewStudent(studentForm);
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
        return <StudentDetails handleChange={handleChange} formHelper={formHelper} next={next}/>;
      case 1:
        return <StudentAddress handleChange={handleChange} formHelper={formHelper} next={next}/>;
      case 2:
        return <StudentContacts handleChange={handleChange} next={next}/>;
      case 3:
        return <StudentReview handleChange={handleChange} formHelper={formHelper} next={next}/>;
      default:
        return null;
    }
  }

  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Row>
        <Col span={16} offset={4}>
          <Steps current={regState}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>
      </Row>

      <Row justify={'center'}>
        <Col>
          <div className="form-steps-div">{getStep(regState)}</div>
        </Col>
      </Row>

      <Row justify={'center'}>
        <Col>
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
            {regState === 3 ? (
              <Button type="primary" onClick={submitForm}>
                Submit
              </Button>
            ) : null}
          </div>
        </Col>
      </Row>
    </Content>
  );
};

const mapStateToProps = state => ({
  createNewStudentIsLoading:
    state.studentTableReducer.createNewStudentIsLoading,
  createNewStudentSuccessMessage:
    state.studentTableReducer.createNewStudentSuccessMessage,
});

export default connect(mapStateToProps, { createNewStudent })(
  RegisterStudentForm
);
