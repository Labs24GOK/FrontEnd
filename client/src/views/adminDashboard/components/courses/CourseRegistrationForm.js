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

  const [course, setCourse] = useState({
    term_id: '',
    course_type_id: '',
    group_type_id: '',
    school_grade_id: '',
    level_id: '',
    course_schedule_id: '',
    room_id: '',
    teacher_id: '',
    section: '',
    subsection: '',
    hourly_rate: '',
    start_time: '',
    end_time: '',
    notes: '',
    status: '',
  });

  const status = ['active', 'completed', 'waitlist'];

  const [touched, setTouched] = useState({
    term_id: false,
    course_type_id: false,
    group_type_id: false,
    school_grade_id: false,
    level_id: false,
    course_schedule_id: false,
    room_id: false,
    teacher_id: false,
    section: false,
    subsection: false,
    hourly_rate: false,
    start_time: false,
    end_time: false,
    notes: false,
    status: false,
  });

  function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addCourse(course);
    props.setForm(false);
  }

  const handleCancel = event => {
    event.preventDefault();
    props.setForm(false);
  };

  const handleBlur = field => evt => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const validate = state => {
    const {
      term_id,
      course_type_id,
      group_type_id,
      school_grade_id,
      level_id,
      course_schedule_id,
      room_id,
      teacher_id,
      section,
      subsection,
      hourly_rate,
      start_time,
      end_time,
      notes,
      status,
    } = state;
    return {
      term_id: term_id.length === 0,
      course_type_id: course_type_id.length === 0,
      group_type_id: group_type_id.length === 0,
      school_grade_id: school_grade_id.length === 0,
      level_id: level_id.length === 0,
      course_schedule_id: course_schedule_id.length === 0,
      room_id: room_id.length === 0,
      teacher_id: teacher_id.length === 0,
      section: section.length === 0,
      subsection: subsection.length === 0,
      hourly_rate: hourly_rate.length === 0,
      start_time: start_time.length === 0,
      end_time: end_time.length === 0,
      notes: notes.length === 0,
      status: status.length === 0,
    };
  };

  const canBeSubmitted = () => {
    const errors = validate(course);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  };

  const errors = validate(course);
  console.log(errors);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  const shouldMarkError = field => {
    const hasError = errors[field];
    const shouldShow = touched[field];
    return hasError ? shouldShow : false;
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <FormSet>
        <Div>
          <div>
            <Label>Section</Label>
            <div
              style={
                shouldMarkError('section') ? { border: '1px solid red' } : null
              }
            >
              <Input
                type='text'
                name='section'
                value={course.section}
                onChange={handleChange}
                onBlur={handleBlur('section')}
              />
            </div>
          </div>
          <div>
            <Label>Subsection</Label>
            <div
              style={
                shouldMarkError('subsection')
                  ? { border: '1px solid red' }
                  : null
              }
            >
              <Input
                type='number'
                name='subsection'
                value={course.subsection}
                onChange={handleChange}
                onBlur={handleBlur('subsection')}
              />
            </div>
          </div>

          <div>
            <Label>Hourly Rate</Label>
            <div
              style={
                shouldMarkError('hourly_rate')
                  ? { border: '1px solid red' }
                  : null
              }
            >
              <Input
                type='text'
                name='hourly_rate'
                value={course.hourly_rate}
                onChange={handleChange}
                onBlur={handleBlur('hourly_rate')}
              />
            </div>
          </div>

          <div>
            <Label>Start Time</Label>
            <div
              style={
                shouldMarkError('start_time')
                  ? { border: '1px solid red' }
                  : null
              }
            >
              <Input
                type='time'
                name='start_time'
                value={course.start_time}
                onChange={handleChange}
                onBlur={handleBlur('start_time')}
              />
            </div>
          </div>

          <div>
            <Label>End Time</Label>
            <div
              style={
                shouldMarkError('end_time') ? { border: '1px solid red' } : null
              }
            >
              <Input
                type='time'
                name='end_time'
                value={course.end_time}
                onChange={handleChange}
                onBlur={handleBlur('end_time')}
              />
            </div>
          </div>

          <div>
            <Label>Notes</Label>
            <div
              style={
                shouldMarkError('notes') ? { border: '1px solid red' } : null
              }
            >
              <Input
                type='text'
                name='notes'
                value={course.notes}
                onChange={handleChange}
                onBlur={handleBlur('notes')}
              />
            </div>
          </div>

          <div>
            <Label>Status</Label>
            <div
              style={
                shouldMarkError('status') ? { border: '1px solid red' } : null
              }
            >
              <Dropdown
                value={course.status}
                onChange={e => setCourse({ ...course, status: e.value })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={status}
                onBlur={handleBlur('status')}
              />
            </div>
          </div>

          <div>
            <Label>Term</Label>
            <div
              style={
                shouldMarkError('term_id') ? { border: '1px solid red' } : null
              }
            >
              <Dropdown
                value={course.term_id}
                onChange={e => setCourse({ ...course, term_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.termDropdown}
                onBlur={handleBlur('term_id')}
              />
            </div>
          </div>

          <div>
            <Label>Course Type</Label>
            <div
              style={
                shouldMarkError('course_type_id')
                  ? { border: '1px solid red' }
                  : null
              }
            >
              <Dropdown
                value={course.course_type_id}
                onChange={e => setCourse({ ...course, course_type_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.courseTypeDropdown}
                onBlur={handleBlur('course_type_id')}
              />
            </div>
          </div>

          <div>
            <Label>Group Type</Label>
            <div
              style={
                shouldMarkError('group_type_id')
                  ? { border: '1px solid red' }
                  : null
              }
            >
              <Dropdown
                value={course.group_type_id}
                onChange={e => setCourse({ ...course, group_type_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.groupTypeDropdown}
                onBlur={handleBlur('group_type_id')}
              />
            </div>
          </div>

          <div>
            <Label>School Grade</Label>
            <div
              style={
                shouldMarkError('school_grade_id')
                  ? { border: '1px solid red' }
                  : null
              }
            >
              <Dropdown
                value={course.school_grade_id}
                onChange={e => setCourse({ ...course, school_grade_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.schoolGradeDropdown}
                onBlur={handleBlur('school_grade_id')}
              />
            </div>
          </div>

          <div>
            <Label>Level</Label>
            <div
              style={
                shouldMarkError('level_id') ? { border: '1px solid red' } : null
              }
            >
              <Dropdown
                value={course.level_id}
                onChange={e => setCourse({ ...course, level_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.levelDropdown}
                onBlur={handleBlur('level_id')}
              />
            </div>
          </div>

          <div>
            <Label>Course Schedule</Label>
            <div
              style={
                shouldMarkError('course_schedule_id')
                  ? { border: '1px solid red' }
                  : null
              }
            >
              <Dropdown
                value={course.course_schedule_id}
                onChange={e => setCourse({ ...course, course_schedule_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.courseScheduleDropdown}
                onBlur={handleBlur('course_schedule_id')}
              />
            </div>
          </div>

          <div>
            <Label>Room</Label>
            <div
              style={
                shouldMarkError('room_id') ? { border: '1px solid red' } : null
              }
            >
              <Dropdown
                value={course.room_id}
                onChange={e => setCourse({ ...course, room_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.roomDropdown}
                onBlur={handleBlur('room_id')}
              />
            </div>
          </div>

          <div>
            <Label>Teacher</Label>
            <div
              style={
                shouldMarkError('teacher_id')
                  ? { border: '1px solid red' }
                  : null
              }
            >
              <Dropdown
                value={course.teacher_id}
                onChange={e => setCourse({ ...course, teacher_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.teacherDropdown}
                onBlur={handleBlur('teacher_id')}
              />
            </div>
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
        <Button type='submit' disabled={isDisabled}>
          Add Course
        </Button>
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
