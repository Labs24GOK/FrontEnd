import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { nextPage } from '../../../../../actions/userDashboardActions/placementActions';
import { PrimaryButton } from '../../../../../styles/BtnStyle';
import { ImageContainer, RadioContainer, Question } from './ChildTestSytles';

const ChildQuestions = props => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm();
  const { question, images, choices } = props.currentQuestion[0]; // currently a array in store

  const onSubmit = data => {
    console.log('Data', data);
    console.log('errors', errors);
    dispatch(nextPage(data.userChoice));
    reset();
  };

  return (
    <div className="test-wrapper">
      <Question>Choose the answer that best matches the phrase:</Question>
      <Question>"{question}"</Question>
      <ImageContainer>
        {images.map(image => (
          <img src={image} alt="Test Question" />
        ))}
      </ImageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioContainer>
          {choices.map(option => (
            <label name="userChoice">
              <input
                key={option}
                name="userChoice"
                type="radio"
                value={option}
                ref={register({ required: true })}
              />
              {option.toUpperCase()}
            </label>
          ))}
        </RadioContainer>
        <PrimaryButton type="submit">Next</PrimaryButton>
      </form>
    </div>
  );
};

export default ChildQuestions;

// <Form form={form}>
//   <h3>{question}</h3>
// <div className="img-container">
//   {images.map(stupidImg => (
//     <img src={stupidImg} />
//   ))}
// </div>
//   <Radio.Group style={radioStyle}>
//     <Radio value={'a'}>{choices[0]}</Radio>
//     <Radio value={'b'}>{choices[1]}</Radio>
//     <Radio value={'c'}>{choices[2]}</Radio>
//   </Radio.Group>
//   <Button onClick={() => dispatch}>Next</Button>
// </Form>
