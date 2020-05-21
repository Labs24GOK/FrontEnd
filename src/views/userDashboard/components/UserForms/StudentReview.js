import React from 'react';
import { Typography } from 'antd';

const StudentReview = props => {
  const { handleChange } = props;
  const { Title } = Typography;
  return (
    <div>
      <Title level={3}>Review Registration</Title>
      <p>Review Student Info here</p>
    </div>
  );
};

export default StudentReview;
