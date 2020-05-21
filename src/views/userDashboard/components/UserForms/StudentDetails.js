import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Tooltip,
  Typography,
  Row,
  Col,
} from 'antd';
import moment from 'moment-timezone';
import { QuestionCircleOutlined } from '@ant-design/icons';

const StudentDetails = props => {
  const { Title } = Typography;
  const { handleChange, formHelper } = props;
  const { Option } = Select;
  const dateFormat = 'DD/MM/YYYY';
  return (
    <>
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
                {' '}
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

        <Row justify="center">
          <Col>
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
                style={{ width: 120 }}
              />
            </Form.Item>
          </Col>
          <Col>
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
              <Select defaultValue="Male" style={{ width: 80 }}>
                <Option value="M">Male</Option>
                <Option value="F">Female</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="phone_number"
          label="Phone"
          rules={[
            {
              required: true,
              message: "Please enter student's contact phone number",
            },
          ]}
        >
          <Input placeholder={'332-32-1234'} />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="school_name" label="Name of School">
          <Input />
        </Form.Item>
      </Form>
      <Form.Item name="school_grade_id" label="Grade Level">
        <Select
          style={{ width: 100 }}
          defaultValue="Pri 6"
          onChange={value => formHelper(value)}
          name="school_grade_id"
          label="Grade Level"
        >
          <Option value="None">None</Option>
          <Option value="KG 1">KG 1</Option>
          <Option value="KG 2">KG 2</Option>
          <Option value="KG 3">KG 3</Option>
          <Option value="Pri 1">Pri 1</Option>
          <Option value="Pri 2">Pri 2</Option>
          <Option value="Pri 3">Pri 3</Option>
          <Option value="Pri 4">Pri 4</Option>
          <Option value="Pri 5">Pri 5</Option>
          <Option value="Pri 6">Pri 6</Option>
          <Option value="Sec 1">Sec 1</Option>
          <Option value="Sec 2">Sec 2</Option>
          <Option value="Sec 3">Sec 3</Option>
          <Option value="Sec 4">Sec 4</Option>
          <Option value="Sec 5">Sec 5</Option>
          <Option value="Sec 6">Sec 6</Option>
        </Select>
      </Form.Item>
    </>
  );
};

export default StudentDetails;
