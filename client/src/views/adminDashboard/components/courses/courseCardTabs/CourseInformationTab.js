import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourseById, toggleEditCourse } from '../../../../../actions';
import CourseEditForm from './CourseEditForm';
import { FormWrap, Div, TextDiv, Label, FormSet, SaveButton, ButtonDiv } from '../../mainStyle/styledComponent'; 

const CourseInformationTab = props => {
  useEffect(() => {
    props.getCourseById(props.courseID);
  }, []);

  const editCourseInfo = e => {
    e.preventDefault();
    props.toggleEditCourse('true');
  };

  let options = { year: 'numeric', month: 'numeric', day: 'numeric'}; //'long'
  let startdate = new Date(props.courseById.start_date).toLocaleDateString('en-GB', options)
  let enddate = new Date(props.courseById.end_date).toLocaleDateString('en-GB', options)

  return (
      <div>
        {
        !props.isEditing ?
          <FormWrap>
            <FormSet>
              <Div>
                <div>
                  <Label>Course ID</Label>
                  <TextDiv>{props.courseById.course_id || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Term</Label>
                  <TextDiv>{props.courseById.term || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Course Type</Label>
                  <TextDiv>{props.courseById.course_type || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Group Type</Label>
                  <TextDiv>{props.courseById.group_type || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Level</Label>
                  <TextDiv>{props.courseById.level || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Section</Label>
                  <TextDiv>{props.courseById.section || '-'}</TextDiv>
                </div>
                <div>
                  <Label>School Grade</Label>
                  <TextDiv>{props.courseById.school_grade || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Course Schedule</Label>
                  <TextDiv>{props.courseById.course_schedule || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Start Date</Label>
                  <TextDiv>{startdate || '-'}</TextDiv>
                </div>
                <div>
                  <Label>End Date</Label>
                  <TextDiv>{enddate || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Start Time</Label>
                  <TextDiv>{props.courseById.start_time || '-'}</TextDiv>
                </div>
                <div>
                  <Label>End Time</Label>
                  <TextDiv>{props.courseById.end_time || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Room</Label>
                  <TextDiv>{props.courseById.room || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Teacher</Label>
                  <TextDiv>{props.courseById.teacher || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Hourly Rate</Label>
                  <TextDiv>{props.courseById.hourly_rate || '-'}</TextDiv>
                </div>               
                <div>
                  <Label>Status</Label>
                  <TextDiv>{props.courseById.status || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Notes</Label>
                  <TextDiv>{props.courseById.notes || '-'}</TextDiv>
                </div>
              </Div>
              <Div>
                <div style={{ gridColumn: 'span3' }}></div>
              </Div>
            </FormSet>
            <ButtonDiv >
              <SaveButton type="submit" onClick={editCourseInfo}> 
                      Edit
                  </SaveButton>
              </ButtonDiv>
          </FormWrap>
         : <CourseEditForm {...props} />
        }
      </div>
  )
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
