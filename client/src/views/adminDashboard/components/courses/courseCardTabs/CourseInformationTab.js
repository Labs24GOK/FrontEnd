import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourseById, toggleEditCourse } from '../../../../../actions';

import { Grid, Segment, Form } from 'semantic-ui-react'

const CourseInformationTab = props => {

  useEffect(() => {
    props.getCourseById(props.parentId)
  }, [])

  const editCourseInfo = e => {
      e.preventDefault();
      props.toggleEditCourse();
  }


  return (
    <>
    <div className="gridView">
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Segment>Course Type</Segment>
            <Segment>{props.courseById.course_type}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Group Type</Segment>
            <Segment>{props.courseById.group_type}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>School Grade</Segment>
            <Segment>{props.courseById.school_grade}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Level</Segment>
            <Segment>{props.courseById.level}</Segment>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>Section</Segment>
            <Segment>{props.courseById.section}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Subsection</Segment>
            <Segment>{props.courseById.subsection}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Room</Segment>
            <Segment>{props.courseById.room_id}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Start Time</Segment>
            <Segment>{props.courseById.start_time}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>End Time</Segment>
            <Segment>{props.courseById.end_time}</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>Notes</Segment>
            <Segment>{props.courseById.notes}</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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