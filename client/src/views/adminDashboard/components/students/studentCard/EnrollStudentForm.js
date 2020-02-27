import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDropDownCourses, addCourse, enrollStudent, getStudentById } from '../../../../../actions';
import Dropdown from 'react-dropdown';
import { Table, Button as Button2, Spin } from 'antd';
import CourseSearchModule from './CourseSearchModule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import 'react-dropdown/style.css';

import {
    FormWrap,
    Input,
    Button,
    Label,
    FormSet,
    Div2,
    ButtonDiv,
    DisabledInput,
    SearchDiv,
    Div3
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

    const [state, setState] = useState({
        result_type_code : -3,
        notes : 'test'
    });

    const [modalVisible, setModalVisible] = useState({
        visible: false,
        loading: false,
    })  

const statusArr = [
  {value: -3, label: 'unconfirmed'},
  {value: -2, label: 'no show'},
  {value: -1, label: 'cancelled enrollment'},
  {value: 0, label: 'drop'},
  {value: 1, label: 'transfer out'},
  {value: 2, label: 'fail'},
  {value: 3, label: 'incomplete'},
  {value: 4, label: 'no exam'},
  {value: 5, label: 'pass'},
  {value: 6, label: 'confirm'},
];

function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  }

  function handleChange2(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    console.log("this is state", state, props.studentById.student_id, course.course_id )
    event.preventDefault();
    props.setForm(false);
    props.enrollStudent( props.studentById.student_id, course.course_id, state)
  }

  const handleCancel = event => {
    event.preventDefault();
    props.setForm(false);
  };

  return (
    <>
    <FormWrap onSubmit={handleSubmit}>
      <FormSet>
        <Div2>
          <div>
            <Label>Course ID</Label>
            <Div3>
            <Input
                type='text'
                placeholder="Search"
                name='course_id'
                value={course.course_id}
                onChange={handleChange}
                readOnly={true}
                onClick={() => {
                  setModalVisible({ visible: true })
              }}
              />
                         <Button2 onClick={() => {
                      setModalVisible({ visible: true })
                  }}><FontAwesomeIcon icon={faSearch}/>
           </Button2>
           </Div3>
           </div>

           <div>
            <Label>Term</Label>
            <DisabledInput
                type='text'
                name='term id'
                value={course.term}
                onChange={handleChange}
                readOnly={true}
              />
           </div>
           <div>
            <Label>Section</Label>
            <DisabledInput
                type='text'
                name='Days'
                value={course.section}
                onChange={handleChange}
                readOnly={true}
              />
           </div>
           <div>
            <Label>Level</Label>
            <DisabledInput
                type='text'
                name='type'
                value={course.level}
                onChange={handleChange}
                readOnly={true}
              />
           </div>
           <div>
            <Label>Course Type</Label>
            <DisabledInput
                type='text'
                name='Group type'
                value={course.course_type}
                onChange={handleChange}
                readOnly={true}
              />
           </div>
           <div>
            <Label>Group Type</Label>
            <DisabledInput
                type='text'
                name='term id'
                value={course.group_type}
                onChange={handleChange}
                readOnly={true}
              />
           </div>
           <div>
            <Label>School Grade</Label>
            <DisabledInput
                type='text'
                name='section'
                value={course.school_grade}
                onChange={handleChange}
                readOnly={true}
              />
           </div>
           <div>
            <Label>Status</Label>
            <DisabledInput
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
      studentById: state.studentByIdReducer.studentById,
    };
  };

export default withRouter(
    connect(mapStateToProps, { enrollStudent, getDropDownCourses, addCourse })(
      EnrollStudentForm
    )
  );
  