import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { nextPage } from '../../../../../actions/userDashboardActions/placementActions';
import { PrimaryButton } from '../../../../../styles/BtnStyle';
import {
  LabelCard,
  RadioContainer,
  Question,
  Instruction,
  Image,
  RadioInput,
} from './ChildTestSytles';

const ChildQuestions = props => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm();
  const { question, images, choices, option } = props.currentQuestion[0]; // currently a array in store

  const onSubmit = data => {
    dispatch(nextPage(data.userChoice));
    reset();
  };

  const imageChecker = images => {
    if (images.length === 0) {
      // No images
      return (
        <RadioContainer>
          {option.map((option, index) => (
            <LabelCard name="userChoice">
              <RadioInput
                key={option}
                name="userChoice"
                type="radio"
                value={option}
                ref={register({ required: true })}
              />
              {choices ? choices[index] : option.toUpperCase()}
            </LabelCard>
          ))}
        </RadioContainer>
      );
    } else if (images.length === 1) {
      // 1 image
      return (
        <>
          <Image src={images} />
          <RadioContainer>
            {option.map((option, index) => (
              <LabelCard name="userChoice">
                <RadioInput
                  key={option}
                  name="userChoice"
                  type="radio"
                  value={option}
                  ref={register({ required: true })}
                />
                {choices ? choices[index] : option.toUpperCase()}
              </LabelCard>
            ))}
          </RadioContainer>
        </>
      );
    } else {
      // 3 images
      return (
        <RadioContainer>
          {option.map((option, index) => (
            <LabelCard name="userChoice">
              <Image src={images[index]} alt="Test Question" />
              <RadioInput
                key={option}
                name="userChoice"
                type="radio"
                value={option}
                ref={register({ required: true })}
              />
              {option.toUpperCase()}
            </LabelCard>
          ))}
        </RadioContainer>
      );
    }
  };

  return (
    <div className="test-wrapper">
      <Instruction>Choose the answer that best matches the phrase:</Instruction>
      <Question>{question}</Question>
      <form onSubmit={handleSubmit(onSubmit)}>
        {imageChecker(images)}
        <PrimaryButton type="submit">Next</PrimaryButton>
      </form>
    </div>
  );
};

export default ChildQuestions;
