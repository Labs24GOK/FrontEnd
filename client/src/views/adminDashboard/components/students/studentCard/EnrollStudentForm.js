import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDropDownCourses, addCourse, enrollStudent, getStudentById } from '../../../../../actions';
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

    const [state, setState] = useState({
        result_type_code : -3,
        notes : ''
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

  console.log("props.studentById:", props.studentById)

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

           <div>
             <Label>Result</Label>
              <Dropdown
                  controlClassName='myControlClassName'
                  className='dropdown'
                  name='result_type_code'
                  onChange={(e) => setState({ ...state, result_type_code: e.value })}
                  value={statusArr[state.result_type_code + 3]}
                  options={statusArr}
              />
              </div>

           <div style={{ gridColumn: 'span 4' }}>
                    <Label>Notes</Label>
                    <div>
                        <textarea
                        style={{
                        width: '100%', height: '80px', outline: 'none',
                        border: '1px solid transparent', borderRadius: '3px'
                        }}
                        type='text'
                        name='notes'
                        placeholder='Notes'
                        onChange={handleChange2}
                        value={state.notes}
                        />
                        </div>
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
  