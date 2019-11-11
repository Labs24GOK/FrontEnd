
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import StudentInformationTab from './StudentInformationTab';
import StudentCoursesTab from './StudentCoursesTab';
import Billing from './billing/Billing'
import { Tab } from 'semantic-ui-react';
import { Header, Image, Icon } from 'semantic-ui-react'
import StudentProgressTab from '../studentProgress/StudentProgressTab';

import 'antd/dist/antd.css';
import '../../mainStyle/mainCard.scss'

const StudentCard = props => {
    useEffect(() => {
        props.getStudentById(props.studentID)
    }, [])

    const panes = [
        {
            menuItem: 'STUDENT INFORMATION',
            render: () => <Tab.Pane attached={false}><StudentInformationTab studentID={props.studentID} /></Tab.Pane>,
        },
        {
            menuItem: 'COURSES',
            render: () => <Tab.Pane attached={false}>{<StudentCoursesTab studentID={props.studentID} />}</Tab.Pane>,
        },
        {
            menuItem: 'PROGRESS',
            render: () => <Tab.Pane attached={false}><StudentProgressTab studentID={props.studentID}  /></Tab.Pane>,
        },
        {
            menuItem: 'BILLING',
            render: () => <Tab.Pane attached={false}>{<Billing studentID={props.studentID} />}</Tab.Pane>,
        },
    ]

    const goBack = () => {
        if (props.studentView === 'studentCardView') {
            props.setStudentView('studentTableView')
        }
        if (props.isEditing) {
            props.toggleEditComponent()
            props.setStudentView('studentCardView')
        }
    }

    return (
        <div>
                <div className="back-button" onClick={goBack} style={{ cursor: "pointer", width: "10%" }}>
                    <Icon name='angle left' />
                    Back
                    </div>
                <div className='card-title'>

                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular size='small' />

                    <Header as='h2'>
                        {props.studentById.first_name} {props.studentById.additional_names}
                        <div className="headerDiv">
                            <div>
                                <div className="headerSeparateDiv">CPR # {props.studentById.cpr}</div>
                                <div className="headerSeparateDiv">STUDENT ID {props.studentById.id}</div>
                            </div>
                        </div>

                    </Header>
                </div>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                
        </div>

    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEditing: state.studentByIdReducer.isEditing,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentById, toggleEditComponent }
    )(StudentCard)
)