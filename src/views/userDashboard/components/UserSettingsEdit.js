import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function UserSettingsEdit() {
  const { register, handleSubmit, errors } = useForm();
  console.log(errors);
  const history = useHistory();

  const token = localStorage.getItem('token');
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  console.log(tokenData);
  const { subject, name, email } = tokenData;
  const onSubmit = data => {
    data.id = subject;
    console.log(data);
  };
  const handleCancel = e => {
    e.preventDefault();
    history.push(`/dashboard/account-settings`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Account Edit</h1>
      <label>
        Full Name
        <input
          type="text"
          defaultValue={name}
          name="name"
          ref={register({ required: true, min: 2, maxLength: 100 })}
        />
      </label>
      <label>
        Email
        <input type="email" defaultValue={email} name="email" ref={register({ required: true })} />
      </label>

      <button onClick={handleCancel}>Cancel</button>
      <input type="submit" />
    </form>
  );
}

// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import axiosWithAuth from '../../../utils/axiosWithAuth';
// import { Input, Typography, Layout, Col, Row, Button, Form } from 'antd';

// const UserSettings = () => {
//   const { Title, Text } = Typography;
//   const { Content } = Layout;
//   const [form] = Form.useForm();
//   const history = useHistory();
//   const [userData, setUserData] = useState({});

//   // user data from token
//   const token = localStorage.getItem('token');
//   const tokenData = JSON.parse(atob(token.split('.')[1]));
//   const { name, email } = tokenData;

//   const handleCancel = e => {
//     e.preventDefault();
//     history.push(`/dashboard/account-settings`);
//   };

//   const handleChange = e => {
//     e.preventDefault();
//     setUserData(e);
//   };

//   // submitting updated user data
//   //! no endpoints for updating user?
//   const handleSubmit = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .put('')
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   // // fetching user's data for form inputs
//   // useEffect(() => {
//   //   axiosWithAuth()
//   //     .get(`/users/${userID}`)
//   //     .then(res => {
//   //       // console.log(res.data[0]);
//   //       setUserData(res.data[0]);
//   //     })
//   //     .catch(err => {
//   //       console.log('GET failed', err);
//   //     });
//   // }, [userID]);

//   return (
//     <Content style={{ margin: '1.8rem 0' }}>
//       <Form form={form} handlesubmit={handleSubmit} handlechange={handleChange}>
//         <Row>
//           <Col>
//             <Title level={3}>Account Edit</Title>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Form.Item name="name" label="Full Name" initialValue={name}>
//               <Input />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Form.Item name="email" label="Email" initialValue={email}>
//               <Input />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Button onClick={handleCancel}>Cancel</Button>
//           </Col>
//           <Col>
//             <Button type="primary">Save</Button>
//           </Col>
//         </Row>
//       </Form>
//     </Content>
//   );
// };

// export default UserSettings;
