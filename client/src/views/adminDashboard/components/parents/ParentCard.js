import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getParentById } from '../../../../actions';
import ParentInfomation from './ParentInfomation'
import { Tab } from 'semantic-ui-react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';


const ParentCard = props => {
    console.log('props.parentId.first_name', props.parentById)
    useEffect(() => {
        props.getParentById(props.parentId);
    },[])

    const panes = [
      {
          menuItem: 'STUDENT INFORMATION',
          render: () => <Tab.Pane attached={false}><ParentInfomation parentId={props.parentId}/></Tab.Pane>,
      },
      {
          menuItem: 'ENROLLMENT',
          render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
      },
      {
          menuItem: 'ATTENDANCE',
          render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
      },
      {
          menuItem: 'BILLING',
          render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
      },
  ]
    return(
        <>
        {props.isLoading ? (
              <Spin style={{marginTop: '20px'}}size="large" />
            ) : ( 
            <h1>{props.parentById.father_name}</h1>
            )}
        <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
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