import 'react-dropdown/style.css';

import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCourse, getDropDownCourses } from '../../../../actions';
import {
  Button,
  ButtonDiv,
  Div,
  FormSet,
  FormWrap,
  Input,
  Label,
} from '../mainStyle/styledComponent.js';

const CourseRegistrationForm = props => {
  useEffect(() => {
    props.getDropDownCourses();
  }, []);

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
    notes: ''
  });

  const status = ['Active', 'Completed', 'Waitlist', 'Cancelled'];
  const section = ['A', 'B', 'C'];

  function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  }

  //validation state
  const [errorBorderTerm, setErrorBorderTerm] = useState('transparent'); //error #C73642
  const [errorBorderCourse, setErrorBorderCourse] = useState('transparent'); //error #C73642
  const [errorBorderGroup, setErrorBorderGroup] = useState('transparent'); //error #C73642
  const [errorBorderGrade, setErrorBorderGrade] = useState('transparent'); //error #C73642
  const [errorBorderLevel, setErrorBorderLevel] = useState('transparent'); //error #C73642
  const [errorBorderSection, setErrorBorderSection] = useState('transparent'); //error #C73642
  // const [errorBorderGrade, setErrorBorderGrade] = useState('transparent'); //error #C73642
  const [errorBorderSchedule, setErrorBorderSchedule] = useState('transparent'); //error #C73642
  const [errorBorderStartDate, setErrorBorderStartDate] = useState(
    'transparent'
  ); //error #C73642
  const [errorBorderEndDate, setErrorBorderEndDate] = useState('transparent'); //error #C73642
  const [errorBorderStartTime, setErrorBorderStartTime] = useState(
    'transparent'
  ); //error #C73642
  const [errorBorderEndTime, setErrorBorderEndTime] = useState('transparent'); //error #C73642
  const [errorBorderRoom, setErrorBorderRoom] = useState('transparent'); //error #C73642
  const [errorBorderTeacher, setErrorBorderTeacher] = useState('transparent'); //error #C73642
  const [errorBorderHourlyRate, setErrorBorderHourlyRate] = useState(
    'transparent'
  ); //error #C73642
  const [errorBorderStatus, setErrorBorderStatus] = useState('transparent'); //error #C73642

  function handleSubmit(event) {
    event.preventDefault();

    //check for required fields and set border
    if (
      course.term_id === '' ||
      course.course_type_id === '' ||
      course.group_type_id === '' ||
      //in the below 3 lines the validation on the school_grade is set to block submission only if the course_type is government
      (course.course_type_id && 
      course.course_type_id.value === 2 &&
      course.school_grade_id === '') ||
      course.level_id === '' ||
      course.section === '' ||
      course.course_schedule_id === '' ||
      course.start_date === '' ||
      course.end_date === '' ||
      course.start_time === '' ||
      course.end_time === '' ||
      course.room_id === '' ||
      course.teacher_id === '' ||
      course.hourly_rate === '' ||
      course.status === ''
    ) {
      if (course.term_id === '') {
        setErrorBorderTerm('#ef6570');
      } else {
        setErrorBorderTerm('transparent');
      }
      if (course.course_type_id === '') {
        setErrorBorderCourse('#ef6570');
      } else {
        setErrorBorderCourse('transparent');
      }
      if (course.group_type_id === '') {
        setErrorBorderGroup('#ef6570');
      } else {
        setErrorBorderGroup('transparent');
      }
      //in the below 3 lines the validation on the school_grade is set appear only if the course_type is government
      if (
        course.course_type_id &&
        course.course_type_id.value === 2 &&
        course.school_grade_id === ''
      ) {
        setErrorBorderGrade('#ef6570');
      } else {
        setErrorBorderGrade('transparent');
      }
      if (course.level_id === '') {
        setErrorBorderLevel('#ef6570');
      } else {
        setErrorBorderLevel('transparent');
      }
      if (course.section === '') {
        setErrorBorderSection('#ef6570');
      } else {
        setErrorBorderSection('transparent');
      }
      if (course.course_schedule_id === '') {
        setErrorBorderSchedule('#ef6570');
      } else {
        setErrorBorderSchedule('transparent');
      }
      if (course.start_date === '') {
        setErrorBorderStartDate('#ef6570');
      } else {
        setErrorBorderStartDate('transparent');
      }
      if (course.end_date === '') {
        setErrorBorderEndDate('#ef6570');
      } else {
        setErrorBorderEndDate('transparent');
      }
      if (course.start_time === '') {
        setErrorBorderStartTime('#ef6570');
      } else {
        setErrorBorderStartTime('transparent');
      }
      if (course.end_time === '') {
        setErrorBorderEndTime('#ef6570');
      } else {
        setErrorBorderEndTime('transparent');
      }
      if (course.room_id === '') {
        setErrorBorderRoom('#ef6570');
      } else {
        setErrorBorderRoom('transparent');
      }
      if (course.teacher_id === '') {
        setErrorBorderTeacher('#ef6570');
      } else {
        setErrorBorderTeacher('transparent');
      }
      if (course.hourly_rate === '') {
        setErrorBorderHourlyRate('#ef6570');
      } else {
        setErrorBorderHourlyRate('transparent');
      }
      if (course.status === '') {
        setErrorBorderStatus('#ef6570');
      } else {
        setErrorBorderStatus('transparent');
      }
    } else {
      props.addCourse(course);
      props.setForm(false);
    }
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
            <div
              style={{
                border: `1px solid ${errorBorderTerm}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={course.term_id}
                onChange={e => setCourse({ ...course, term_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.termDropdown}
              />
            </div>
          </div>
          <div>
            <Label>Course Type</Label>
            <div
              style={{
                border: `1px solid ${errorBorderCourse}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={course.course_type_id}
                onChange={e => setCourse({ ...course, course_type_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.courseTypeDropdown}
              />
            </div>
          </div>
          <div>
            <Label>Group Type</Label>
            <div
              style={{
                border: `1px solid ${errorBorderGroup}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={course.group_type_id}
                onChange={e => setCourse({ ...course, group_type_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.groupTypeDropdown}
              />
            </div>
          </div>
          <div>
            <Label>School Grade</Label>
            <div
              style={{
                border: `1px solid ${errorBorderGrade}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={props.schoolGradeDropdown[0]}
                onChange={e => setCourse({ ...course, school_grade_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.schoolGradeDropdown}
                disabled={course.course_type_id.value !== 2}
              />
            </div>
          </div>
          <div>
            <Label>Level</Label>
            <div
              style={{
                border: `1px solid ${errorBorderLevel}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={course.level_id}
                onChange={e => setCourse({ ...course, level_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.levelDropdown}
              />
            </div>
          </div>
          <div>
            <Label>Section</Label>
            <div
              style={{
                border: `1px solid ${errorBorderSection}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={course.section}
                onChange={e => setCourse({ ...course, section: e.value })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={section}
              />
            </div>
          </div>
          <div>
            <Label>Course Schedule</Label>
            <div
              style={{
                border: `1px solid ${errorBorderSchedule}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={course.course_schedule_id}
                onChange={e => setCourse({ ...course, course_schedule_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.courseScheduleDropdown}
              />
            </div>
          </div>
          <div>
            <Label>Start Date</Label>
            <div
              style={{
                border: `1px solid ${errorBorderStartDate}`,
                borderRadius: '3px',
              }}
            >
              <Input
                type='date'
                name='start_date'
                value={course.start_date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Label>End Date</Label>
            <div
              style={{
                border: `1px solid ${errorBorderEndDate}`,
                borderRadius: '3px',
              }}
            >
              <Input
                type='date'
                name='end_date'
                value={course.end_date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Label>Start Time</Label>
            <div
              style={{
                border: `1px solid ${errorBorderStartTime}`,
                borderRadius: '3px',
              }}
            >
              <Input
                type='time'
                name='start_time'
                value={course.start_time}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Label>End Time</Label>
            <div
              style={{
                border: `1px solid ${errorBorderEndTime}`,
                borderRadius: '3px',
              }}
            >
              <Input
                type='time'
                name='end_time'
                value={course.end_time}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Label>Room</Label>
            <div
              style={{
                border: `1px solid ${errorBorderRoom}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={course.room_id}
                onChange={e => setCourse({ ...course, room_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.roomDropdown}
              />
            </div>
          </div>
          <div>
            <Label>Teacher</Label>
            <div
              style={{
                border: `1px solid ${errorBorderTeacher}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={course.teacher_id}
                onChange={e => setCourse({ ...course, teacher_id: e })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.teacherDropdown}
              />
            </div>
          </div>
          <div>
            <Label>Hourly Rate</Label>
            <div
              style={{
                border: `1px solid ${errorBorderHourlyRate}`,
                borderRadius: '3px',
              }}
            >
              <Input
                type='text'
                name='hourly_rate'
                value={course.hourly_rate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Label>Status</Label>
            <div
              style={{
                border: `1px solid ${errorBorderStatus}`,
                borderRadius: '3px',
              }}
            >
              <Dropdown
                value={course.status}
                onChange={e => setCourse({ ...course, status: e.value })}
                controlClassName='myControlClassName'
                className='dropdown'
                options={status}
              />
            </div>
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
