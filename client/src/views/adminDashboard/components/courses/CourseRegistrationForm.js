import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDropDownCourses, addCourse } from '../../../../actions';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {
  FormWrap,
  Input,
  Button,
  Label,
  FormSet,
  Div,
  ButtonDiv,
} from '../mainStyle/styledComponent.js';

const CourseRegistrationForm = props => {
  useEffect(() => {
    props.getDropDownCourses();
  }, []);

  console.log("SCHOOL GRADE TABLE", props.schoolGradeDropdown)

  const [course, setCourse] = useState({
    term_id: '',
    course_type_id: '',
    group_type_id: '',
    level_id: '',
    section: '',
    school_grade_id: '',
    course_schedule_id: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    room_id: '',
    teacher_id: '',
    hourly_rate: '10.00',
    status: '',
    notes: '',
  });

  const [grade, setGrade] = useState(0)
  console.log("GRADE", grade)

  const status = ['Active', 'Completed', 'Waitlist', 'Cancelled'];
  const section = ['A', 'B', 'C'];

  // const [touched, setTouched] = useState({
  //   term_id: false,
  //   course_type_id: false,
  //   group_type_id: false,
  //   school_grade_id: false,
  //   level_id: false,
  //   course_schedule_id: false,
  //   room_id: false,
  //   teacher_id: false,
  //   section: false,
  //   hourly_rate: false,
  //   start_time: false,
  //   end_time: false,
  //   notes: false,
  //   status: false,
  // });

  function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    console.log('CREATE COURSE BODY', course);
    event.preventDefault();
    props.addCourse(course);
    props.setForm(false);
  }

  const handleCancel = event => {
    event.preventDefault();
    props.setForm(false);
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <FormSet>
        <Div>
          <div>
            <Label>Term</Label>
            <Dropdown
              value={course.term_id}
              onChange={e => setCourse({ ...course, term_id: e })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={props.termDropdown}
            />
          </div>
          <div>
            <Label>Course Type</Label>
            <Dropdown
              value={course.course_type_id}
              onChange={e => setCourse({ ...course, course_type_id: e })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={props.courseTypeDropdown}
            />
          </div>
          <div>
            <Label>Group Type</Label>
            <Dropdown
              value={course.group_type_id}
              onChange={e => setCourse({ ...course, group_type_id: e })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={props.groupTypeDropdown}
            />
          </div>
          <div>
            <Label>School Grade</Label>
            <Dropdown
              value={props.schoolGradeDropdown[0]}
              onChange={e => setCourse({ ...course, school_grade_id: e })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={props.schoolGradeDropdown}
              disabled={course.course_type_id.value !== 2}
            />
          </div>
          <div>
            <Label>Level</Label>
            <Dropdown
              value={course.level_id}
              onChange={e => setCourse({ ...course, level_id: e })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={props.levelDropdown}
            />
          </div>
          <div>
            <Label>Section</Label>
            <Dropdown
              value={course.section}
              onChange={e => setCourse({ ...course, section: e.value })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={section}
            />
          </div>
          <div>
            <Label>Course Schedule</Label>
            <Dropdown
              value={course.course_schedule_id}
              onChange={e => setCourse({ ...course, course_schedule_id: e })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={props.courseScheduleDropdown}
            />
          </div>
          <div>
            <Label>Start Date</Label>
            <Input
              type='date'
              name='start_date'
              value={course.start_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>End Date</Label>
            <Input
              type='date'
              name='end_date'
              value={course.end_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Start Time</Label>
            <Input
              type='time'
              name='start_time'
              value={course.start_time}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>End Time</Label>
            <Input
              type='time'
              name='end_time'
              value={course.end_time}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Room</Label>
            <Dropdown
              value={course.room_id}
              onChange={e => setCourse({ ...course, room_id: e })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={props.roomDropdown}
            />
          </div>
          <div>
            <Label>Teacher</Label>
            <Dropdown
              value={course.teacher_id}
              onChange={e => setCourse({ ...course, teacher_id: e })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={props.teacherDropdown}
            />
          </div>
          <div>
            <Label>Hourly Rate</Label>
            <Input
              type='text'
              name='hourly_rate'
              value={course.hourly_rate}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Status</Label>
            <Dropdown
              value={course.status}
              onChange={e => setCourse({ ...course, status: e.value })}
              controlClassName='myControlClassName'
              className='dropdown'
              options={status}
            />
          </div>
          <div>
            <Label>Notes</Label>
            <Input
              type='text'
              name='notes'
              value={course.notes}
              onChange={handleChange}
            />
          </div>
        </Div>
      </FormSet>
      <ButtonDiv>
        <Button
          onClick={handleCancel}
          style={{ background: '#C73642', width: '80px' }}
        >
          Cancel
        </Button>
        <Button type='submit'>Add Course</Button>
      </ButtonDiv>
    </FormWrap>
  );
};

const mapStateToProps = state => {
  return {
    termDropdown: state.coursesTableReducer.termTable,
    courseTypeDropdown: state.coursesTableReducer.courseTypeTable,
    groupTypeDropdown: state.coursesTableReducer.groupTypeTable,
    schoolGradeDropdown: state.coursesTableReducer.schoolGradeTable,
    levelDropdown: state.coursesTableReducer.levelTable,
    courseScheduleDropdown: state.coursesTableReducer.courseScheduleTable,
    roomDropdown: state.coursesTableReducer.roomTable,
    teacherDropdown: state.coursesTableReducer.teacherTable,
    isPosting: state.coursesTableReducer.isPosting,
  };
};

export default withRouter(
  connect(mapStateToProps, { getDropDownCourses, addCourse })(
    CourseRegistrationForm
  )
);
