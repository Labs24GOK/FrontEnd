import React from 'react';
import { Typography, Layout } from 'antd';

const StudentReview = props => {
  const { handleChange } = props;
  const { Title } = Typography;
  const { Content } = Layout;
  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Title level={3}>Review Registration</Title>
      <p>Review Student Info here</p>
    </Content>
  );
};

export default StudentReview;
