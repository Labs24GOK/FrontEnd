import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourseById, toggleEditCourse } from '../../../../../actions';
import CourseEditForm from './CourseEditForm'
import { FormWrap, Div, TextDiv, Label } from '../../mainStyle/styledComponent';

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
            <Label>Course Type</Label>
            <TextDiv>{props.courseById.course_type || "-" }</TextDiv>
          </div>
          <div>
            <Label>Group Type</Label>
            <TextDiv>{props.courseById.group_type || "-" }</TextDiv>
          </div>
          <div>
            <Label>School Grade</Label>
            <TextDiv>{props.courseById.school_grade || "-" }</TextDiv>
          </div>
          <div>
            <Label>Level</Label>
            <TextDiv>{props.courseById.level || "-" }</TextDiv>
          </div>
          <div>
            <Label>Section</Label>
            <TextDiv>{props.courseById.section || "-" }</TextDiv>
          </div>
          <div>
            <Label>Subsection</Label>
            <TextDiv>{props.courseById.subsection || "-" }</TextDiv>
          </div>
          <div>
            <Label>Room</Label>
            <TextDiv>{props.courseById.room_id || "-" }</TextDiv>
          </div>
          <div>
            <Label>Start Time</Label>
            <TextDiv>{props.courseById.start_time || "-" }</TextDiv>
          </div>
          <div>
            <Label>End Time</Label>
            <TextDiv>{props.courseById.end_time || "-" }</TextDiv>
          </div>
          <div>
            <Label>Notes</Label>
            <TextDiv>{props.courseById.notes || "-" }</TextDiv>
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