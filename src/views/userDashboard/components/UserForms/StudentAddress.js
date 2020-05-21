import React, { useState } from 'react';
import { Form, Input, Typography } from 'antd';

const StudentAddress = props => {
  const { handleChange } = props;
  const [form] = Form.useForm();
  const [secondAddress, setSecondAddress] = useState(false);
  function onChange(e) {
    setSecondAddress(!secondAddress);
  }
  const { Title } = Typography;
  return (
    <div>
      <Form layout={'vertical'} form={form}>
        <Title level={3}>Student Address</Title>
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
      </Form>
    </div>
  );
};

export default StudentAddress;
