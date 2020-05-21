import React, { useState } from 'react';
import { Form, Input, Typography, Row, Col } from 'antd';

const StudentAddress = props => {
  const { handleChange } = props;
  const [form] = Form.useForm();
  const [secondAddress, setSecondAddress] = useState(false);
  function onChange(e) {
    setSecondAddress(!secondAddress);
  }
  const { Title } = Typography;
  return (
    <Form layout={'vertical'} form={form}>
      <Row justify={'center'}>
        <Col>
          <Title level={3}>Student Address</Title>
        </Col>
      </Row>

      <Row justify={'center'}>
        <Col>
          <Form.Item
            name={'address'}
            label="Current Address"
            rules={[
              {
                required: true,
                message: "Please enter student's address",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default StudentAddress;
