import React from 'react';
import { Typography, Layout } from 'antd';

const StudentReview = (props) => {
  const {
    user_id,
    cpr,
    first_name,
    additional_names,
    birthdate,
    gender,
    school_name,
    school_grade_id,
    email,
    address,
    phone_number,
    primary_emergency_contact_name,
    primary_emergency_phone,
    primary_emergency_relationship,
    notes } = props.studentForm;
  const { Title } = Typography;
  const { Content } = Layout;

  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Title level={3}>Review Registration</Title>
    {console.log(props)}
      <h4>cpr</h4>
        <p>{cpr}</p>
      <h4>First Name</h4>
        <p>{first_name}</p>
      <h4>Additional Names</h4>
        <p>{additional_names}</p>
      <h4>Birthday</h4>
        <p>{birthdate}</p>
      <h4>Gender</h4>
        <p>{gender}</p>
      <h4>School Name</h4>
        <p>{school_name}</p>
      <h4>School Grade</h4>
        <p>{school_grade_id}</p>
      <h4>Email</h4>
        <p>{email}</p>
      <h4>Address</h4>
        <p>{address}</p>
      <h4>Phone Number</h4>
        <p>{phone_number}</p>
      <h4>Primary Emergency Contact</h4>
        <p>{primary_emergency_contact_name}</p>
      <h4>Primary Emergency Relationship</h4>
        <p>{primary_emergency_relationship}</p>
      <h4>Primary Emergency Phone Number</h4>
        <p>{primary_emergency_phone}</p>
      <h4>Notes</h4>
        <p>{notes}</p>
    </Content>
  );
};

export default StudentReview;