import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourseById, toggleEditCourse } from '../../../../../actions';
import CourseEditForm from './CourseEditForm';
import {
  FormWrap,
  Div,
  TextDiv,
  Label,
  FormSet,
} from '../../mainStyle/styledComponent';

const CourseInformationTab = props => {
  useEffect(() => {
    props.getCourseById(props.courseId);
  }, []);

  const editCourseInfo = e => {
    e.preventDefault();
    props.toggleEditCourse();
  };

  return (
    <>
      <div>
        {!props.isEditing ? (
          <FormWrap>
            <FormSet>
              <Div>
                <div>
                  <Label>Status</Label>

                  <TextDiv>{props.courseById && props.courseById.status || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Term</Label>
                  <TextDiv>{props.courseById && props.courseById.term || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Course Type</Label>
                  <TextDiv>{props.courseById && props.courseById.course_type || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Group Type</Label>
                  <TextDiv>{props.courseById && props.courseById.group_type || '-'}</TextDiv>
                </div>
                <div>
                  <Label>School Grade</Label>
                  <TextDiv>{props.courseById && props.courseById.school_grade || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Level</Label>
                  <TextDiv>{props.courseById && props.courseById.level || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Section</Label>
                  <TextDiv>{props.courseById && props.courseById.section || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Subsection</Label>
                  <TextDiv>{props.courseById && props.courseById.subsection || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Room</Label>
                  <TextDiv>{props.courseById && props.courseById.room || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Teacher</Label>
                  <TextDiv>{props.courseById && props.courseById.teacher || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Hourly Rate</Label>

                  <TextDiv>{props.courseById && props.courseById.hourly_rate || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Course Schedule</Label>
                  <TextDiv>{props.courseById && props.courseById.course_schedule || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Start Time</Label>
                  <TextDiv>{props.courseById && props.courseById.start_time || '-'}</TextDiv>
                </div>
                <div>
                  <Label>End Time</Label>
                  <TextDiv>{props.courseById && props.courseById.end_time || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Notes</Label>
                  <TextDiv>{props.courseById && props.courseById.notes || '-'}</TextDiv>
                </div>
              </Div>
              <Div>
                <div style={{ gridColumn: 'span3' }}></div>
              </Div>
            </FormSet>
          </FormWrap>
        ) : (
          <CourseEditForm {...props} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.coursesTableReducer.isLoading,
    courseById: state.coursesTableReducer.courseById,
    isEditing: state.coursesTableReducer.isEditing,
  };
};

export default withRouter(
  connect(mapStateToProps, { getCourseById, toggleEditCourse })(
    CourseInformationTab
  )
);
