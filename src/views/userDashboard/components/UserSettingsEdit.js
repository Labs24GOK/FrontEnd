import React, { useState, useEffect } from 'react';
import { Typography, Layout, Col, Row, Button, Form } from 'antd';

const UserSettings = () => {
  const { Title, Text} = Typography;
  const { Content } = Layout;
  const [ userState, setUserState] = useState([]);

  return (
  <Content style={{ margin: '1.8rem 0'}}>
    <Row>
      <Col>
        <Title level={3}>Account Edit</Title>
      </Col>
    </Row>
    <Row>
    <Col>
    <Form.Item name="name" label="Full Name">
    </Form.Item>
    </Col>
    </Row>
    <Row>
    <Col>
    <Form.Item name="email" label="Email">
    </Form.Item>
    </Col>
    </Row>
       <Row>
    <Col>
    <Form.Item name="password" label="Password">
    </Form.Item>
    </Col>
    </Row>
    <Row>
    <Col>
    {/* Link back to UserSettings.js */}
    <Button>Cancel</Button>
    </Col>
    <Col>
    <Button>Save</Button>
    </Col>
    </Row>
  </Content>);
};

export default UserSettings;