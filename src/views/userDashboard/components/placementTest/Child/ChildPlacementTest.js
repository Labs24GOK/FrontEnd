import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import StartTest from './StartTest';
import ChildQuestions from './ChildQuestions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getChildQuestions, startTestTimer, timeOut, setScore, completeTest } from '../../../../../actions/userDashboardActions/placementActions'
import { rubric as grade } from './rubric'
import ChildQuestionsPassed from './ChildQuestionsPassed';

const ChildPlacementTest = props => {
  const dispatch = useDispatch()
  const { push } = useHistory()
  const testTime = 1000 * 60 * 45 // 45 Minutes
  const [phaseOnePassed, setPhaseOnePassed] = useState(false)

  const { timerActive, questions, currentQuestion, page, userAwnsers, score } = useSelector( state => ({
    timerActive: state.placementTestingReducer.timerActive,
    questions: state.placementTestingReducer.questions,
    currentQuestion: state.placementTestingReducer.currentQuestion,
    page: state.placementTestingReducer.page,
    userAwnsers: state.placementTestingReducer.userAwnsers,
    score: state.placementTestingReducer.score
  }), shallowEqual)

  const testTimer = () => {
    if(!timerActive) {
      setTimeout(() => {
        dispatch(timeOut())
        push('/dashboard')
      }, testTime);
    } else {
      dispatch(startTestTimer)
    }
    
  }
  
  const gradeHelper = () => {
    let userGrade = 0
    userAwnsers.map((awnser, index) => {
      if(awnser == grade[index]) {
        return userGrade++;
      }
    })
    return userGrade;
  }
  
  const gradeLevel = () => {
    if(score >= 4) {
      setPhaseOnePassed(true)
    }
  }

  useEffect(() => {
    testTimer()
  }, [])

  useEffect(() => {
    dispatch(getChildQuestions())
  }, [])

  useEffect(() => {
    dispatch(setScore(gradeHelper()))
    gradeLevel()
  }, [page])



  const testHelper = () => {
    if(page === 0) {
      return <StartTest />
    } else if (page >= 1 && !phaseOnePassed) {
      return <ChildQuestions currentQuestion={currentQuestion} />
    } else if (phaseOnePassed) {
      dispatch(completeTest({ score, userAwnsers}))
      return <ChildQuestionsPassed />
    }
  }

  return (
    <div>
      { questions ? testHelper() : (<h1>LOADING...</h1>) }
      <Button onClick={() => console.log("STATE LOGS ", page, currentQuestion, userAwnsers)}>LOG</Button>
      <Button onClick={() => console.log("score", score, phaseOnePassed)}>Score</Button>
    </div>
  );
};

export default ChildPlacementTest;