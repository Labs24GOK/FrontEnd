import React, { useState } from 'react';
import { Form, Input, Checkbox, Typography, Row, Col } from 'antd';

const StudentContacts = props => {
  const [secondEmergencyContact, setSecondEmergencyContact] = useState(false);
  const [form] = Form.useForm();
  const { handleChange } = props;
  const { Title } = Typography;
  function onChange(e) {
    setSecondEmergencyContact(!secondEmergencyContact);
  }

  return (
    <Form
      layout={'vertical'}
      form={form}
      initialValues={'vertical'}
      onChange={handleChange}
    >
      <Row>
        <Col span={24}>
          <Title level={3}>Emergency Contact</Title>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Form.Item
            name={'primary_emergency_contact_name'}
            label="Contact's Name"
            rules={[
              {
                required: true,
                message: 'Please enter a contact',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Form.Item
            name={'primary_emergency_relationship'}
            label="Relation to Student"
            rules={[
              {
                required: true,
                message: 'Please enter relation',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name={'primary_emergency_phone'}
        label="Contact's Phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      {!secondEmergencyContact ? (
        <Checkbox onChange={onChange}>Second Emergency Contact</Checkbox>
      ) : (
        <>
          <Checkbox onChange={onChange} defaultChecked={secondEmergencyContact}>
            Second Emergency Contact
          </Checkbox>
          <br />
          <Form.Item
            name={'emergency_contact_name'}
            label="Contact's Name #2"
            rules={[
              {
                required: secondEmergencyContact,
                message: 'Please enter a contact',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={'emergency_relationship'}
            label="Relation to Student"
            rules={[
              {
                required: true,
                message: 'Please enter a contact',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={'emergency_phone'}
            label="Contact's Phone"
            rules={[
              {
                required: secondEmergencyContact,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </>
      )}
      <br />
      <Form.Item name={'notes'} label="Notes about Student">
        <Input.TextArea
          style={{ width: 200 }}
          rows={3}
          placeholder={
            'Medical conditions, behaviors, and special considerations'
          }
        />
      </Form.Item>
    </Form>
  );
};

export default StudentContacts;
