import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPlacementTestById } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';

const PlacementTest = props => {
    useEffect(() => {
        props.getPlacementTestById(props.studentID)
    }, [])

    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let test_date = new Date(props.placementTestById.test_date).toLocaleDateString('en-US', options) 
    return(
        <>
        placementTestById
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.placementTestReducer.isLoading,
        placementTestById: state.placementTestReducer.placementTestById,
        isTestEditing: state.placementTestReducer.isTestEditting,
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getPlacementTestById }
  )(PlacementTest)
  )
