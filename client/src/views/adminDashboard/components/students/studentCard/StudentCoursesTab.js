import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudentCourses } from '../../../../../actions';
import { Table } from 'antd';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import EnrollStudentForm from './EnrollStudentForm';

import './studentTable.scss'

const StudentCoursesTab = props => {
 
  const [form, setForm] = useState(false);

  const handleCancelButtonOnForm = () => {
    setForm(false);
  };

  const handleEnrollButton = () => {
    setForm(!form);
  };

  useEffect(() => {
    props.getStudentCourses(props.studentID)
  }, [])

//SHAPE OF DATA: DO NOT DELETE YET
  // course_schedule: "Sat / Tue"
  // course_type: "general"
  // created_at: "2019-11-06T18:48:23.360Z"
  // end_time: "18:30:00"
  // group_type: "Nursery"
  // hourly_rate: "7.000"
  // id: 1
  // level: "SS 1"
  // notes: "Some notes about this course"
  // result: "pass"
  // room_id: 1
  // school_grade: "Nursery"
  // section: "A"
  // start_time: "16:30:00"
  // status: "completed"
  // student_id: 1
  // subsection: 1
  // teacher: "Victoria Labdon"
  // term: "Fall 2014"
  // updated_at: "2019-11-06T18:48:23.360Z"

  const studentCourseColumns = [
    {
      title: 'Term',
      dataIndex: 'term',
      key: 1,
    },
    {
      title: 'Days',
      dataIndex: 'term',
      key: 2,
      sortDirections: ['descend']
    },
    {
    title: 'Type',
    dataIndex: 'course_type',
    key: 3,
    sortDirections: ['descend']
    },
    {
      title: 'Group Type',
      dataIndex: 'group_type',
      key: 4,
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 5,
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 6,
    },
    {
      title: 'Subsection',
      dataIndex: 'subsection',
      key: 7,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 8,
    },
  ];

  return (
    <>
    <div className='row-above'>
        <div
          className='create-new-entry'
          style={{ cursor: 'pointer', color: '#26ABBD' }}
          onClick={handleEnrollButton}
        >
          <div style={{ marginRight: '10px' }}>Enroll Student</div> 
          <div>
            <FontAwesomeIcon
              style={{ width: '18px', height: '21px' }}
              icon={faPlusCircle}
              size='lg'
            />
          </div>
        </div>
      </div>

      {form ? (
        <EnrollStudentForm
          handleCancelButtonOnForm={handleCancelButtonOnForm}
          setForm={setForm}
        />
      ) : null}

      <Table dataSource={props.courseByStudentId} className="coursesTable" columns={studentCourseColumns} pagination={false} />
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.studentCourseReducer.isLoading,
    courseByStudentId: state.studentCourseReducer.courseByStudentId,
    error: state.studentCourseReducer.error,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getStudentCourses }
  )(StudentCoursesTab)
)