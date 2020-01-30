import React from 'react';
import Kindergarten from './Kindergarten';
import Primary from './Primary';
import MiddleAndSecondary from './MiddleAndSecondary';

function DisplayTabContent(props) {

  {if (props.navigation === 'kindergarten') {
    return (
      <Kindergarten />
    )
  } else if (props.navigation === 'primary') {
    return (
      <Primary />
    )
  } else if (props.navigation === 'middle-and-secondary') {
    return (
      <MiddleAndSecondary />
    )
  }
 }
}

export default DisplayTabContent;