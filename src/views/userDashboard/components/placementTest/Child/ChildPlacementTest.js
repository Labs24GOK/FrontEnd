import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import StartTest from './StartTest';
import ChildQuestions from './ChildQuestions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { nextPage, prevPage, getChildQuestions } from '../../../../../actions/userDashboardActions/placementActions'

const ChildPlacementTest = props => {
  const dispatch = useDispatch()
  const { push } = useHistory()
  // const [questions, setQuestions] = useState([])
  const [testTime, setTestTime] = useState(1000 * 60 * 45) // 45 Minutes

  const { timerActive, questions, currentQuestion, page, userAwnsers } = useSelector( state => ({
    timerActive: state.placementTestingReducer.timerActive,
    questions: state.placementTestingReducer.questions,
    currentQuestion: state.placementTestingReducer.currentQuestion,
    page: state.placementTestingReducer.page,
    userAwnsers: state.placementTestingReducer.userAwnsers
  }), shallowEqual)

  const testTimer = () => {
    setTimeout(() => {
      push('/dashboard')
    }, testTime);
  }

  useEffect(() => {
    testTimer()
  }, [])

  useEffect(() => {
    dispatch(getChildQuestions())
  }, [])

  const testHelper = () => {
    if(page === 0) {
      return <StartTest />
    }  else if (page >= 1) {
      return <ChildQuestions currentQuestion={currentQuestion} page={page} />
    }
  }

  return (
    <div>
      { questions ? testHelper() : (<h1>LOADING...</h1>) }
      <Button style={{ marginLeft: '40%' }} onClick={() => dispatch(nextPage())}>Next</Button>
      <Button onClick={() => dispatch(prevPage())}>Previous</Button>
      <Button onClick={() => console.log(page, currentQuestion)}>LOG</Button>
    </div>
  );
};

export default ChildPlacementTest;