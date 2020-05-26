import React from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Typography,
  Row,
  Col,
  Layout,
} from 'antd';
import moment from 'moment-timezone';

const StudentDetails = props => {
  const { Title } = Typography;
  const { handleChange, formHelper, next } = props;
  const { Option } = Select;
  const { Content } = Layout;
  const dateFormat = 'DD/MM/YYYY';
  const {
    cpr,
    first_name,
    additional_names,
    birthdate,
    gender,
    school_name,
    email,
    phone_number,
  } = props.studentForm;

  const defaultGender = val => {
    if (val === 'M') {
      return 'Male';
    } else if (val === 'F') {
      return 'Female';
    } else {
      return 'Female';
    }
  };

  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Form
        layout={'vertical'}
        onChange={handleChange}
        onFinish={next}
        scrollToFirstError
      >
        <Title level={3}>Student Details</Title>
        <Form.Item
          name="first_name"
          label="First Name"
          initialValue={first_name}
          rules={[
            {
              required: true,
              message: "Please enter student's name",
            },
          ]}
        >
          <Input autoFocus={true} />
        </Form.Item>
        <Form.Item
          name="additional_names"
          label="Additional Name"
          initialValue={additional_names}
          rules={[
            {
              required: true,
              message: "Please enter student's additional name(s)",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="cpr"
          label="Government ID"
          initialValue={cpr}
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
                defaultValue={moment(birthdate, dateFormat)}
                format={dateFormat}
                style={{ width: 120 }}
                onChange={value =>
                  formHelper({ value: moment(value).format('l') })
                }
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="gender"
              label="Gender"
              initialValue={gender}
              rules={[
                {
                  required: true,
                  message: "Please enter student's gender",
                },
              ]}
            >
              <Select
                style={{ width: 80 }}
                labelInValue
                onChange={value => formHelper(value)}
                defaultValue={defaultGender(gender)}
              >
                <Option value="M">Male</Option>
                <Option value="F">Female</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="phone_number"
          label="Phone"
          initialValue={phone_number}
          rules={[
            {
              required: true,
              message: "Please enter student's contact phone number",
            },
          ]}
        >
          <Input placeholder={'332-32-1234'} />
        </Form.Item>
        <Form.Item name="email" label="Email" initialValue={email}>
          <Input />
        </Form.Item>
        <Form.Item
          name="school_name"
          label="Name of School"
          initialValue={school_name}
        >
          <Input />
        </Form.Item>

        <Row justify="space-between">
          <Col>
            <Form.Item name="school_grade_id" label="Grade Level">
              <Select
                labelInValue
                name="school_grade_id"
                style={{ width: 100 }}
                onChange={value => formHelper(value)}
              >
                <Option value="1">None</Option>
                <Option value="2">KG 1</Option>
                <Option value="3">KG 2</Option>
                <Option value="4">KG 3</Option>
                <Option value="5">Pri 1</Option>
                <Option value="6">Pri 2</Option>
                <Option value="7">Pri 3</Option>
                <Option value="8">Pri 4</Option>
                <Option value="9">Pri 5</Option>
                <Option value="10">Pri 6</Option>
                <Option value="11">Sec 1</Option>
                <Option value="12">Sec 2</Option>
                <Option value="13">Sec 3</Option>
                <Option value="14">Sec 4</Option>
                <Option value="15">Sec 5</Option>
                <Option value="16">Sec 6</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default StudentDetails;
