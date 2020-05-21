import React, { useState } from 'react';
import { Form, Input, Checkbox } from 'antd';

const StudentAddress = () => {
  const [form] = Form.useForm();
  const [secondAddress, setSecondAddress] = useState(false);
  function onChange(e) {
    setSecondAddress(!secondAddress);
  }
  return (
    <div>
      <Form layout={'vertical'} form={form}>
        <Form.Item
          name={'address'}
          label="Student Address"
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
