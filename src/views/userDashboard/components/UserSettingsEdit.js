import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { Input, Typography, Layout, Col, Row, Button, Form } from 'antd';

const UserSettings = () => {
  const { Title, Text } = Typography;
  const { Content } = Layout;
  const history = useHistory();
  const [userData, setUserData] = useState({
    userID: null,
    name: '',
    email: '',
    password: '',
  });

  // userID from JWT
  const token = localStorage.getItem('token');
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  const userID = tokenData.subject;

  const handleCancel = e => {
    e.preventDefault();
    history.push(`/dashboard/account-settings`);
  };

  // submitting updated user data
  //! no endpoints for updating user?
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put('')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // fetching user's data for form inputs
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}`)
      .then(res => {
        console.log(res.data[0]);
        setUserData({ ...userData });
      })
      .catch(err => {
        console.log('GET failed', err);
      });
  }, []);

  // onSubmit to PUT new data to backend

  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Form handleSubmit={handleSubmit}>
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
