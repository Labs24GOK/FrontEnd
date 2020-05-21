import React, { useState } from 'react';
import { Form, Input, Checkbox, Typography } from 'antd';

const StudentContacts = props => {
  const [secondEmergencyContact, setSecondEmergencyContact] = useState(false);
  const [form] = Form.useForm();
  const { handleChange, next } = props;
  const { Title } = Typography;
  function onChange(e) {
    setSecondEmergencyContact(!secondEmergencyContact);
  }

  return (
    <div>
      <Form
        layout={'vertical'}
        form={form}
        initialValues={'vertical'}
        onChange={handleChange}
        onFinish={next}
      >
        <Title level={3}>Emergency Contact</Title>
        <Form.Item
          name={'primary_emergency_contact_name'}
          label="Primary Emergency Contact Name"
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
          name={'primary_emergency_relationship'}
          label="Primary Emergency Relationship"
          rules={[
            {
              required: true,
              message: 'Please enter relation',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={'primary_emergency_phone'}
          label="Primary Emergency Phone"
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
            <Checkbox
              onChange={onChange}
              defaultChecked={secondEmergencyContact}
            >
              Second Emergency Contact
            </Checkbox>
            <br />
            <Form.Item
              name={'emergency_contact_name'}
              label="Emergency Contact Name"
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
              label="Emergency Relationship"
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
              label="Emergency Phone"
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
        <Form.Item name={'notes'} label={'Notes'}>
          <Input.TextArea />
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentContacts;
