import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourseById, toggleEditCourse } from '../../../../../actions';
import CourseEditForm from './CourseEditForm'
import { Icon } from 'semantic-ui-react'
import { FormWrap, Div, TextDiv } from '../../mainStyle/styledComponent';

const CourseInformationTab = props => {

  useEffect(() => {
    props.getCourseById(props.courseId)
  }, [])

  const editCourseInfo = e => {
      e.preventDefault();
      props.toggleEditCourse();
  }


  return (
    <>
    <div>
    {!props.isEditing ?
      <FormWrap>
         <Div>
          <div onClick={editCourseInfo}  style={{gridColumn: "span3", marginRight: "5px",color: "#26ABBD", cursor: "pointer", width: "fit-content" }} >
            {/* <Icon name='edit' style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" }} />
              Edit */}
          </div>
        </Div>
        <Div>
          <div>
            <label>Course Type</label>
            <TextDiv>{props.courseById.course_type}</TextDiv>
          </div>
          <div>
            <label>Group Type</label>
            <TextDiv>{props.courseById.group_type}</TextDiv>
          </div>
          <div>
            <label>School Grade</label>
            <TextDiv>{props.courseById.school_grade}</TextDiv>
          </div>
          <div>
            <label>Level</label>
            <TextDiv>{props.courseById.level}</TextDiv>
          </div>
          <div>
            <label>Section</label>
            <TextDiv>{props.courseById.section}</TextDiv>
          </div>
          <div>
            <label>Subsection</label>
            <TextDiv>{props.courseById.subsection}</TextDiv>
          </div>
          <div>
            <label>Room</label>
            <TextDiv>{props.courseById.room_id}</TextDiv>
          </div>
          <div>
            <label>Start Time</label>
            <TextDiv>{props.courseById.start_time}</TextDiv>
          </div>
          <div>
            <label>End Time</label>
            <TextDiv>{props.courseById.end_time}</TextDiv>
          </div>
          <div>
            <label>Notes</label>
            <TextDiv>{props.courseById.notes}</TextDiv>
          </div>
          </Div>
          <Div>
              <div style={{gridColumn: "span3"}} >
            </div>
          </Div>
      </FormWrap>
       : <CourseEditForm {...props} />}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
      isLoading: state.coursesTableReducer.isLoading,
      courseById: state.coursesTableReducer.courseById,
      isEditing: state.coursesTableReducer.isEditing,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getCourseById, toggleEditCourse }
  )(CourseInformationTab)
)