import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Typography, Layout, Col, Row, Button } from 'antd';

const UserSettings = () => {
  const { Title, Text } = Typography;
  const { Content } = Layout;
  const { url } = useRouteMatch();

  // Extracting User details from user's token
  const token = localStorage.getItem('token');
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  console.log(tokenData);
  const { email, name } = tokenData;
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`${url}/edit`);
  };

  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Row>
        <Col>
          <Title level={3}>Account Settings</Title>
        </Col>
      </Row>
      <Row style={{ margin: '1.8rem 0' }}>
        <Col span={1}>
          <Text type="secondary">Name:</Text>
        </Col>
        <Col span={3}>{name}</Col>
      </Row>
      <Row style={{ margin: '1.8rem 0' }}>
        <Col span={1}>
          <Text type="secondary">Email:</Text>
        </Col>
        <Col span={3}>{email}</Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleSubmit}>Edit</Button>
        </Col>
      </Row>
    </Content>
  );
};

export default UserSettings;
