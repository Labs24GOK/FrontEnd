import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDropDownCourses, addCourse } from '../../../../../actions';
import Dropdown from 'react-dropdown';
import { Table, Button as Button2, Spin } from 'antd';
import CourseSearchModule from './CourseSearchModule';

import 'react-dropdown/style.css';

import {
    FormWrap,
    Input,
    Button,
    Label,
    FormSet,
    Div2,
    ButtonDiv,
  } from '../../mainStyle/styledComponent.js';

  const EnrollStudentForm = props => {

    const [course, setCourse] = useState({
        course_id: '',
        term: '',
        course_schedule: '',
        section: '',
        group_type_id: '',
        level_id: '',
        section: '',
        status: ''
      });
console.log(course)
    const [modalVisible, setModalVisible] = useState({
        visible: false,
        loading: false,
    })  

const status = ['active', 'completed', 'waitlist'];

function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.setForm(false);
  }

  const handleCancel = event => {
    event.preventDefault();
    props.setForm(false);
  };

  return (
    <>
    <FormWrap onSubmit={handleSubmit}>
      <FormSet>
      <Button2 onClick={() => {
            setModalVisible({ visible: true })
        }}>Search Courses</Button2>
        <Div2>
          <div>
            <Label>Course ID</Label>
            <Input
                type='text'
                name='course_id'
                value={course.course_id}
                onChange={handleChange}
                readOnly={true}
              />
           </div>

           <div>
            <Label>Term</Label>
            <Input
                type='text'
                name='term id'
                value={course.term}
                onChange={handleChange}
                readOnly={true}
              />
           </div>

           <div>
            <Label>Section</Label>
            <Input
                type='text'
                name='Days'
                value={course.section}
                onChange={handleChange}
                readOnly={true}
              />
           </div>

           <div>
            <Label>Level</Label>
            <Input
                type='text'
                name='type'
                value={course.level}
                onChange={handleChange}
                readOnly={true}
              />
           </div>

           <div>
            <Label>Course Type</Label>
            <Input
                type='text'
                name='Group type'
                value={course.course_type}
                onChange={handleChange}
                readOnly={true}
              />
           </div>

           <div>
            <Label>Group Type</Label>
            <Input
                type='text'
                name='term id'
                value={course.group_type}
                onChange={handleChange}
                readOnly={true}
              />
           </div>

           <div>
            <Label>School Grade</Label>
            <Input
                type='text'
                name='section'
                value={course.school_grade}
                onChange={handleChange}
                readOnly={true}
              />
           </div>

           <div>
            <Label>Status</Label>
            <Input
                type='text'
                name='status'
                value={course.status}
                onChange={handleChange}
                readOnly={true}
              />
           </div>
           
        </Div2>
      </FormSet>
      <ButtonDiv>
        <Button
          onClick={handleCancel}
          style={{ background: '#C73642', width: '80px' }}
        >
          Cancel
        </Button>
        <Button type='submit'>
          Enroll Student 
        </Button>
      </ButtonDiv>
    </FormWrap>
    <CourseSearchModule modalVisible={modalVisible} 
    setModalVisible={setModalVisible} 
    setCourse={setCourse}
    />
    </>
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
      EnrollStudentForm
    )
  );
  