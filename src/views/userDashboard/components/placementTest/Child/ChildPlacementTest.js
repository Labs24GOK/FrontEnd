import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import StartTest from './StartTest';
import ChildQuestions from './ChildQuestions';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getChildQuestions, startTestTimer, timeOut, setScore, completeTest, setPage } from '../../../../../actions/userDashboardActions/placementActions'
import { rubric as grade } from './rubric'
import ChildQuestionsPassed from './ChildQuestionsPassed';

const ChildPlacementTest = props => {
  const dispatch = useDispatch()
  const { push } = useHistory()
  const testTime = 1000 * 60 * 45 // 45 Minutes
  const [phaseOneFailed, setphaseOneFailed] = useState(false)
  const [phaseTwoStart, setPhaseTwoStart] = useState(false)

  const { timerActive, questions, currentQuestion, page, userAwnsers, score } = useSelector(
    state => ({
      timerActive: state.placementTestingReducer.timerActive,
      questions: state.placementTestingReducer.questions,
      currentQuestion: state.placementTestingReducer.currentQuestion,
      page: state.placementTestingReducer.page,
      userAwnsers: state.placementTestingReducer.userAwnsers,
      score: state.placementTestingReducer.score,
    }),
    shallowEqual
  );

  const testTimer = () => {
    if (!timerActive) {
      setTimeout(() => {
        dispatch(timeOut());
        push('/dashboard');
      }, testTime);
    } else {
      dispatch(startTestTimer);
    }
  };

  const gradeHelper = () => {
    let userGrade = 0;
    userAwnsers.map((awnser, index) => {
      if (awnser == grade[index]) {
        return userGrade++;
      }
    });
    return userGrade;
  };

  const gradeLevel = () => {
    if(score <= 17 && page <= 25 && (page >= 25) && !phaseOneFailed) {
      console.log("Hit")
      setphaseOneFailed(true)
    } else if(score >= 17 && page <= 25) {
      setPhaseTwoStart(true)
      dispatch(setPage(25))
    }
  };

  useEffect(() => {
    testTimer();
  }, []);

  useEffect(() => {
    dispatch(getChildQuestions());
  }, []);

  useEffect(() => {
    dispatch(setScore(gradeHelper()));
    gradeLevel();
  }, [page]);

  const testHelper = () => {
    if (page === 0) {
      return <StartTest />;
    } else if (page >= 25 && phaseOneFailed) {
      dispatch(completeTest({ score, userAwnsers }));
      return <ChildQuestionsPassed />;
    } else if (phaseTwoStart) {
      return <ChildQuestions currentQuestion={currentQuestion} />;
    } else if (page >= 1 && !phaseOneFailed) {
      return <ChildQuestions currentQuestion={currentQuestion} />;
    } else if (page >= 50) {
      dispatch(completeTest({ score, userAwnsers }));
      return <ChildQuestionsPassed />;
    }
  };

  return (
    <div>
      { questions ? testHelper() : (<h1>LOADING...</h1>) }
      <Button onClick={() => console.log("STATE LOGS ", page, currentQuestion, userAwnsers)}>LOG</Button>
      <Button onClick={() => console.log("score", score, phaseOneFailed, phaseTwoStart)}>Score</Button>
    </div>
  );
};

export default ChildPlacementTest;
