import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCourseById, toggleEditCourse } from '../../../../actions';
import CourseInformationTab from './courseCardTabs/CourseInformationTab.js';
import EnrolledStudentsTab from './courseCardTabs/EnrolledStudentsTab.js';
import { Tab, Image, Header, Icon } from 'semantic-ui-react';

import '../mainStyle/mainCard.scss';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';


const CourseCard = props => {

    console.log("Props", props)

    const { courseId } = props

    useEffect(() => {
        props.getCourseById(courseId)
    }, [])

    const panes = [
        {
            menuItem: 'COURSE INFORMATION',
            render: () => <Tab.Pane attached={false}>{<CourseInformationTab courseId ={courseId}/>}</Tab.Pane>,
        },
        {
            menuItem: 'ENROLLED STUDENTS',
            render: () => <Tab.Pane attached={false}>{<EnrolledStudentsTab courseId = {courseId} />}</Tab.Pane>,
        },
    ]

    const goBack = () => {
        if(props.courseView === 'courseCardView') {
            props.setCourseView('courseTableView')
        }
    }

//working
//had to add empy string b/c it was returning empty string and toUpperCase undefined 
let  courseProps = props.courseById.course_type || ''
let course_type =  courseProps.charAt(0).toUpperCase() + courseProps.slice(1)


    return (
        <div>
                <div className="back-button" onClick={goBack} style={{cursor:"pointer", width:"10%"}}>   
                    <Icon name='angle left'/>
                    Back
                    </div>
                <div className='card-title'>
                
                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular size='small' />
                    
                    <Header as='h2'> 
                    {course_type}
                    <div className="headerDiv">
                        <div>
                            <div className="headerSeparateDiv"> {props.courseById.term}</div>
                            <div className="headerSeparateDiv">{props.courseById.teacher}</div>
                        </div>
                    </div>
                    
                    </Header>
                </div>
             <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
        </div>
        
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.coursesTableReducer.isLoading,
        courseById: state.coursesTableReducer.courseById,
        error: state.coursesTableReducer.error,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getCourseById, toggleEditCourse }
    )(CourseCard)
)