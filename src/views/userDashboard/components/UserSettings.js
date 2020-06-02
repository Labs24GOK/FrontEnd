import React, { useState, useEffect } from 'react';
import { Typography, Layout, Col, Row, Button } from 'antd';

const UserSettings = () => {
  const { Title, Text} = Typography;
  const { Content } = Layout;
  const [ fetchState, setFetchState] = useState([]);

  // useEffect GET users:id ? local state
  // use Redux?

  return (
  <Content style={{ margin: '1.8rem 0'}}>
    <Row>
      <Col>
        <Title level={3}>Account Settings</Title>
      </Col>
    </Row>
    <Row>
    <Col>
    {/* Link to UserSEttingsEdit.js */}
    <Button>Edit</Button>
    </Col>
    </Row>
  </Content>);
};

export default UserSettings;
