import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import StartTest from './StartTest';
import ChildQuestions from './ChildQuestions';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {
  getChildQuestions,
  setScore,
  completeTest,
  setPage,
} from '../../../../../actions/userDashboardActions/placementActions';
import { rubric as grade } from './rubric';
import ChildQuestionsPassed from './ChildQuestionsPassed';
import { getStudentById } from '../../../../../actions';

const ChildPlacementTest = props => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { id: studentID } = useParams();
  const [phaseOneFailed, setphaseOneFailed] = useState(false);
  const [phaseTwoStart, setPhaseTwoStart] = useState(false);

  const { questions, currentQuestion, page, userAwnsers, score, student } = useSelector(
    state => ({
      questions: state.placementTestingReducer.questions,
      currentQuestion: state.placementTestingReducer.currentQuestion,
      page: state.placementTestingReducer.page,
      userAwnsers: state.placementTestingReducer.userAwnsers,
      score: state.placementTestingReducer.score,
      student: state.studentByIdReducer.studentById,
    }),
    shallowEqual
  );

  const userTest = {
    questionsDone: page,
    score,
    answers: [userAwnsers]
  }

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
    if (score <= 17 && page <= 25 && page >= 25 && !phaseOneFailed) {
      setphaseOneFailed(true);
    } else if (score >= 17 && page <= 25) {
      setPhaseTwoStart(true);
      dispatch(setPage(25));
    }
  };

  const currentAnwser = grade[page - 1];

  useEffect(() => {
    dispatch(getStudentById(studentID));
    dispatch(getChildQuestions());
  }, []);

  useEffect(() => {
    dispatch(setScore(gradeHelper()));
    gradeLevel();
  }, [page]);

  useEffect(() => {
    if (student.attempts >= 3) {
      push('/dashboard');
    }
  }, [student.attempts, page]);

  const testHelper = () => {
    if (page === 0) {
      return <StartTest student={student} />;
    } else if (page >= 25 && phaseOneFailed) {
      dispatch(completeTest({ score, userAwnsers }));
      return <ChildQuestionsPassed userTest={userTest} />;
    } else if (phaseTwoStart) {
      return <ChildQuestions currentQuestion={currentQuestion} currentAnwser={currentAnwser} />;
    } else if (page >= 1 && !phaseOneFailed) {
      return <ChildQuestions currentQuestion={currentQuestion} currentAnwser={currentAnwser} />;
    } else if (page >= 50) {
      dispatch(completeTest({ score, userAwnsers }));
      return <ChildQuestionsPassed userTest={userTest} />;
    }
  };

  return <div className="testWrapper">
    {questions ? testHelper() : <h1>LOADING...</h1>}
    <button onClick={() => console.log(userAwnsers)}>lLOG</button>
  </div>;
};

export default ChildPlacementTest;
