import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudentCourses } from '../../../../../actions';
import { Table } from 'antd';

import './studentTable.scss'

const StudentCoursesTab = props => {
 

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

  const columns = [
    {
      title: 'Term',
      dataIndex: 'term',
      key: 1,
      // sorter: (a, b) => a.id - b.id,
      // sortDirections: ['ascend']
    },
    {
      title: 'Days',
      dataIndex: 'term',
      key: 2,
      sorter: (a, b) => b.cpr - a.cpr,
      sortDirections: ['descend']
    },
    {
    title: 'Type',
    dataIndex: 'course_type',
    key: 3,
    sorter: (a, b) => {
      return (b.first_name===null)-(a.first_name===null) || +(a.first_name>b.first_name)||-(a.first_name<b.first_name);
    },
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
      <Table dataSource={props.courseByStudentId} className="coursesTable" columns={columns} pagination={false} />
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