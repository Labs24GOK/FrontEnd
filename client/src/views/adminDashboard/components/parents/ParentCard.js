import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getParentById } from '../../../../actions';

const ParentCard = props => {
    console.log('props.parentId.first_name', props.parentById)
    useEffect(() => {
        props.getParentById(props.parentId);
    },[])

    return(
        <>
        <h1>{props.parentById.father_name}</h1>
        </>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.parentReducer.isLoading,
      parentById: state.parentReducer.parentById,
      error: state.parentReducer.error,
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getParentById }
  )(ParentCard)
  )