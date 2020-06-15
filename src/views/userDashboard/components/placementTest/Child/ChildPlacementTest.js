import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory, Switch, Route } from 'react-router-dom';
import StartTest from './StartTest';

const ChildPlacementTest = props => {
  const { push } = useHistory()
  const [page, setPage] = useState(0)
  const [questions, setQuestions] = useState([])

  const fetchTest = () => {
    return [
      {
        key: 1,
        id: 1,
        question: "Five",
        choices: ['a', 'b', 'c']
      },
      {
        key: 2,
        id: 2,
        question: "Pencil",
        choices: ['a', 'b', 'c']
      },
    ]
  }

  useEffect(() => {
    setQuestions(fetchTest)
  }, [fetchTest])

  const testHelper = () => {
    switch (page) {
      case 0:
        return (<StartTest />)
      
      case 1:
      // return (<ChildQuestions id={page} />)
      break;

      default:
        break;
    }
  }

  return (
    <div>
      <StartTest />
      <Button onClick={setPage( page += 1 )}>Next</Button>
    </div>
  );
};

export default ChildPlacementTest;
