import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { completeTest } from '../../../../../actions/userDashboardActions/placementActions';

const ChildQuestionsPassed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(completeTest())
  }, [])

  return (
    <div>
      <h1>YOU PASSED.</h1>
    </div>
  )
}

export default ChildQuestionsPassed
