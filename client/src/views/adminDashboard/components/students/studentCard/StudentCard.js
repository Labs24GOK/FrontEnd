import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import StudentInformationTab from './StudentInformationTab';
import { Tab } from 'semantic-ui-react';
import { CardWrapper, BackButton, BigTitle, SmallTitle, HeaderWrapper } from '../../../../../styles/styledComponents'
import 'antd/dist/antd.css';
import './StudentCard.css';
import './StudentInformationTab.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StudentCard = props => {
    useEffect(() => {
        props.getStudentById(props.studentID)
    }, [])

    const panes = [
        {
            menuItem: 'STUDENT INFORMATION',
            render: () => <Tab.Pane attached={false}><StudentInformationTab studentID={props.studentID}/></Tab.Pane>,
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

    const goBack = () => {
        if(props.studentView === 'studentCardView') {
            props.setStudentView('studentTableView')
        }
    }

    return (
        <div>
            <CardWrapper>
                <BackButton onClick={goBack} style={{cursor:"pointer"}}>
                    <FontAwesomeIcon icon='angle-left' size='lg' color='gray'/> {''}
                    Back
                </BackButton>
                <HeaderWrapper>
                    <BigTitle>{props.studentById.first_name}</BigTitle>
                    <SmallTitle>CPR: {props.studentById.cpr}</SmallTitle>
                    <SmallTitle>Student ID: {props.studentById.id}</SmallTitle>
                </HeaderWrapper>
             <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
            </CardWrapper>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEditing: state.studentByIdReducer.isEditting,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentById, toggleEditComponent }
    )(StudentCard)
)