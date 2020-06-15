import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import StartTest from './StartTest';

const ChildPlacementTest = props => {
  const { push } = useHistory()
  return (
    <div>
      <StartTest />
    </div>
  );
};

export default ChildPlacementTest;
