import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Input, Typography, Layout, Col, Row, Button, Form } from 'antd';

const UserSettings = () => {
  const { Title, Text } = Typography;
  const { Content } = Layout;
  const [userState, setUserState] = useState([]);
  const { url } = useRouteMatch();
  const history = useHistory();

  const handleCancel = e => {
    e.preventDefault();
    history.push(`/dashboard/account-settings`);
  };

  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Row>
        <Col>
          <Title level={3}>Account Edit</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item name="name" label="Full Name">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item name="password" label="Password">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleCancel}>Cancel</Button>
        </Col>
        <Col>
          <Button>Save</Button>
        </Col>
      </Row>
    </Content>
  );
};

export default UserSettings;
