import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent } from '../../../../actions';
import CourseInformationTab from './courseCardTabs/CourseInformationTab.js';
import { withRouter, Link } from 'react-router-dom';
import { Tab, Image, Header, Icon } from 'semantic-ui-react';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import './course.scss';
// import './StudentInformationTab.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CourseCard = props => {

    useEffect(() => {
      console.log('STUDENT CARD props: ', props)
        props.getStudentById(props.match.params.id)
    }, [])

    const panes = [
        {
            menuItem: 'COURSE INFORMATION',
            render: () => <Tab.Pane attached={false}>{<CourseInformationTab/>}</Tab.Pane>,
        },
        {
            menuItem: 'ENROLLED STUDENTS',
            render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
        },
    ]

    const goBack = () => {
        if(props.courseView === 'courseCardView') {
            props.setCourseView('courseTableView')
        }
    }

    return (
        <div>
            <div className="student-card">
                <div className="back-button" onClick={goBack} style={{cursor:"pointer", width:"10%"}}>   
                    <Icon name='angle left'/>
                    Back
                    </div>
                <div className='student-title'>
                    
                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular size='small' />
                    
                    <Header as='h2'>
                    BEGINNER'S ENGLISH
                    <div className="headerDiv">
                        <div>
                    <div className="headerSeparateDiv">Fall 2018</div>
                    <div className="headerSeparateDiv">MS.PARKER</div>
                    </div>
                    <div className="headerSeparateDiv">MON-THURS</div>
                    </div>
                    
                    </Header>
                </div>
             <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
            </div>
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
    )(CourseCard)
)