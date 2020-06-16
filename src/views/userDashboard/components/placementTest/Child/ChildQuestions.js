import React, { useState, useEffect } from 'react';
import { Form, Button, Radio } from 'antd';

const ChildQuestions = props => {
  const [form] = Form.useForm();
  const nextQuestion = props.nextQuestion;
  const { question, images, choices } = props.currentQuestion[0]; // currently a array in store

  const radioStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem 0',
  };

  return (
    <Form form={form}>
      <h3>{question}</h3>
      <div className="img-container">
        <img src={images[0]} alt="image" />
        <img src={images[1]} alt="image" />
        <img src={images[2]} alt="image" />
      </div>
      <Radio.Group style={radioStyle}>
        <Radio value={'a'}>{choices[0]}</Radio>
        <Radio value={'b'}>{choices[1]}</Radio>
        <Radio value={'c'}>{choices[2]}</Radio>
      </Radio.Group>
      {/* <Button onClick={() => dispatch}>Next</Button> */}
    </Form>
  );
};

export default ChildQuestions;
