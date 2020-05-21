import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Tooltip,
  Typography,
} from 'antd';
import moment from 'moment-timezone';
import { QuestionCircleOutlined } from '@ant-design/icons';

const StudentDetails = props => {
  const { Title } = Typography;
  const { handleChange } = props;
  const { Option } = Select;
  const dateFormat = 'DD/MM/YYYY';

  return (
    <Form layout={'vertical'} onChange={handleChange}>
      <Title level={3}>Student Details</Title>
      <Form.Item
        name="first_name"
        label="Full Name"
        rules={[
          {
            required: true,
            message: "Please enter student's name",
          },
        ]}
      >
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
      <Form.Item
        name="cpr"
        label="Government ID"
        rules={[
          {
            required: true,
            message: "Please enter student's CPR number",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="birthdate"
        label="Date of Birth"
        rules={[
          {
            required: true,
            message: "Please enter student's date of birth",
          },
        ]}
      >
        <DatePicker
          defaultValue={moment('01/04/2014', dateFormat)}
          format={dateFormat}
        />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please enter student's gender",
          },
        ]}
      >
        <Select defaultValue="Male" style={{ width: 100 }}>
          <Option value="M">Male</Option>
          <Option value="F">Female</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="mobile_telephone"
        label="Phone"
        rules={[
          {
            required: true,
            message: "Please enter student's contact phone number",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>
      <Form.Item name="school_name" label="Name of School">
        <Input />
      </Form.Item>
      <Form.Item
        name="school_grade_id"
        label="Grade Level"
        rules={[
          {
            required: true,
            message: "Please enter student's current grade level",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default StudentDetails;
