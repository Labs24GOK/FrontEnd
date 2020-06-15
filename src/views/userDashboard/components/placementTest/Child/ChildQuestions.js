import React, { useState, useEffect } from 'react';
import { Form, Button, Radio } from 'antd';

const ChildQuestions = () => {
  const [form] = Form.useForm();
  // useEffect to fetch questions from backend and save data to redux which will populate the component

  /*
Shape of question object:
  {
    key: num,
    id: num,
    question: "string",
    images: ['url', 'url', 'url'],
    choices: ['a', 'b', 'c'],
  }

  Note: display question number will always be 1-20 (don't use question id or key)

*/

  return (
    <Form form={form}>
      <h3>Question {#}/20: {question}</h3>
      <div className="img-container">
        <img src={images[0]} alt="image" />
        <img src={images[1]} alt="image" />
        <img src={images[2]} alt="image" />
      </div>
      <Radio.Group>
        <Radio value={a}>{choice[0]}</Radio>
        <Radio value={b}>{choice[1]}</Radio>
        <Radio value={c}>{choice[2]}</Radio>
      </Radio.Group>
      <Button onClick={() => {}}>Next</Button>
    </Form>
  );
};

export default ChildQuestions;
