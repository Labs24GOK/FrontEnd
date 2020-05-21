import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Tooltip } from 'antd';
import moment from 'moment-timezone';
import { QuestionCircleOutlined } from '@ant-design/icons';

const StudentDetails = props => {
  const { Option } = Select;
  const dateFormat = 'DD/MM/YYYY';
  return (
    <Form layout={'vertical'}>
      <Form.Item name="first_name" label="Full Name">
        <Input />
      </Form.Item>
      <Form.Item
        name="additional_names"
        label={
          <span>
            Preferred Name
            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
      >
        <Input />
      </Form.Item>
      <Form.Item name="cpr" label="Government ID">
        <Input />
      </Form.Item>
      <DatePicker
        name="birthdate"
        label="Date of Birth"
        defaultValue={moment('01/04/2014', dateFormat)}
        format={dateFormat}
      >
        <Input />
      </DatePicker>
      <Select name="gender" label="Gender" style={{ width: 100 }}>
        <Option value="M">Male</Option>
        <Option value="F">Female</Option>
      </Select>
      <Form.Item name="mobile_telephone" label="Phone">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>
      <Form.Item name="school_name" label="Name of School">
        <Input />
      </Form.Item>
      <Form.Item name="school_grade_id" label="Grade Level">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default StudentDetails;
