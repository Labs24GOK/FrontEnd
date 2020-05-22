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
    notes } = props;
  const { Title } = Typography;
  const { Content } = Layout;

  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Title level={3}>Review Registration</Title>
      <h4>cpr</h4>
        <a>{cpr}</a>
      <h4>First Name</h4>
        <a>{first_name}</a>
      <h4>Additional Names</h4>
        <a>{additional_names}</a>
      <h4>Birthday</h4>
        <a>{birthdate}</a>
      <h4>Gender</h4>
        <a>{gender}</a>
      <h4>School Name</h4>
        <a>{school_name}</a>
      <h4>School Grade</h4>
        <a>{school_grade_id}</a>
      <h4>Email</h4>
        <a>{email}</a>
      <h4>Address</h4>
        <a>{address}</a>
      <h4>Phone Number</h4>
        <a>{phone_number}</a>
      <h4>Primary Emergency Contact</h4>
        <a>{primary_emergency_contact_name}</a>
      <h4>Primary Emergency Relationship</h4>
        <a>{primary_emergency_relationship}</a>
      <h4>Primary Emergency Phone Number</h4>
        <a>{primary_emergency_phone}</a>
      <h4>Notes</h4>
        <a>{notes}</a>
    </Content>
  );
};

export default StudentReview;