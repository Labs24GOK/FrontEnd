import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { nextPage } from '../../../../../actions/userDashboardActions/placementActions';

const ChildQuestions = props => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors, reset } = useForm();
  const { question, images, choices } = props.currentQuestion[0]; // currently a array in store

  const radioStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem 0',
  };

  const onSubmit = data => {
    console.log("Data", data)
    console.log("errors", errors);
    dispatch(nextPage(data.userChoice))
    reset()
  };
  
  return (
    <div>
        <div className="img-container">
          {images.map(stupidImg => (
            <img src={stupidImg} />
          ))}
        </div>
      <form onSubmit={handleSubmit(onSubmit)}>  
        <div className={radioStyle}>
          {choices.map(option => (
            <label name='userChoice'>
              <input
              key={option}
              name="userChoice" 
              type="radio" 
              value={option} 
              ref={register({ required: true })
            }/>
              {option.toUpperCase()}
            </label>
          ))}
        </div>
        <input type="submit" />
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