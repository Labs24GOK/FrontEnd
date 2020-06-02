import React, { useState, useEffect } from 'react';
import { Typography, Layout, Col, Row, Button } from 'antd';

import axiosWithAuth from '../../../utils/axiosWithAuth';

const UserSettings = () => {
  const { Title, Text } = Typography;
  const { Content } = Layout;
  const [fetchState, setFetchState] = useState([]);

  // getting user's id
  const token = localStorage.getItem('token');
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  console.log(tokenData);
  // const userID = tokenData.subject;
  const { email, name } = tokenData;

  // user id = 6
  // console.log('user id', userID);

  // const getUser = () => {
  //   axiosWithAuth()
  //     .get(`users/${userID}`)
  //     .then(res => {
  //       const userData = res.data[0];
  //       console.log(userData);
  //       setFetchState(userData);

  //       // console.log(res.data[0]); // returns object will all needed data
  //       // console.log(setFetchState(res.data[0])); // undefined?
  //     })
  //     .catch(err => {
  //       console.log('Something broke', err);
  //     });
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Row>
        <Col>
          <Title level={3}>Account Settings</Title>
        </Col>
      </Row>
      <Row>
        <Col>{`${name}`}</Col>
      </Row>
      <Row>
        <Col>{`${email}`}</Col>
      </Row>
      <Row>
        <Col>
          {/* Link to UserSEttingsEdit.js */}
          <Button>Edit</Button>
        </Col>
      </Row>
    </Content>
  );
};

export default UserSettings;
