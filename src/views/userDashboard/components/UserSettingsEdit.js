import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Typography, Layout, Col, Row, Button, Form } from 'antd';

const UserSettings = () => {
  const { Title, Text } = Typography;
  const { Content } = Layout;
  const [userState, setUserState] = useState([]);
  const history = useHistory();

  const handleCancel = e => {
    e.preventDefault();
    history.push(`/dashboard/account-settings`);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  // useEffect to get user data and save to state and populate forms

  // onSubmit to PUT new data to backend

  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Form>
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
            <Button type="primary">Save</Button>
          </Col>
        </Row>
      </Form>
    </Content>
  );
};

export default UserSettings;
