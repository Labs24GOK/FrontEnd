import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory, Switch, Route } from 'react-router-dom';
import StartTest from './StartTest';
import ChildQuestions from './ChildQuestions'
import TestObject from './TestObject'

const ChildPlacementTest = props => {
  const { push } = useHistory()
  const [page, setPage] = useState(0)
  const [questions, setQuestions] = useState([])
  const [testTime, setTestTime] = useState(1000 * 60 * 45) // 45 Minutes

  const fetchTest = () => {
    return TestObject
  }

  const testTimer = () => {
    setTimeout(() => {
      push('/dashboard')
    }, testTime);
  }

  useEffect(() => {
    setQuestions(fetchTest)
    if (questions) setPage(1)
  }, [])

  useEffect(() => {
    testTimer()
  }, [])

  const currentQuestion = (num) => {
    return questions.filter(question => question.key === num)
  }

  const nextQuestion = () => {
    setPage(page + 1)
  }



  const testHelper = () => {
    if(page === 1) {
      return <StartTest />
    }  else if (page >= 2) {
      return <ChildQuestions questions={questions} page={page} nextQuestion={nextQuestion} />
    }
  }

  return (
    <div>
      { questions ? testHelper() : (<h1>LOADING...</h1>) }
      <Button onClick={() => setPage( page + 1 )}>Next</Button>
      <Button onClick={() => console.log(page, questions)}>LOG</Button>
    </div>
  );
};

export default ChildPlacementTest;