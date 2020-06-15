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
        choices: ["a", "b", "c"],
      },
      {
        key: 2,
        id: 2,
        question: "Pencil",
        choices: ["a", "b", "c"],
      },
    ];
  };

  useEffect(() => {
    setQuestions(fetchTest)
    if (questions) setPage(1)
  }, [])


  const testHelper = () => {
    switch (page) {
      case 1:
        return (<StartTest />)
      
      case 2:
      // return (<ChildQuestions id={page} />)
      return (<h1>TESTING</h1>)

      default:
        break;
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
