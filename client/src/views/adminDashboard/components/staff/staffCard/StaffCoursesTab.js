import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStaffCourses, getStudentsByCourseID } from '../../../../../actions';
import AttendanceModal from './AttendanceModal';
import { Table, Button, Spin } from 'antd';
import { timeConverter, dateConverter } from '../../../../../utils/helpers.js';
import '../../students/studentCard/studentTable.scss';

const StaffCoursesTab = props => {

    console.log("STAFF COURSE TAB PROPS", props)

  const { staffID, teacher } = props;

  useEffect(() => {
    props.getStaffCourses(staffID);
  }, []);

  const [modalVisible, setModalVisible] = useState({
    visible: false,
    loading: false,
  });

  const staffCourseColumns = [
    {
      title: 'Term',
      dataIndex: 'term',
      key: 1,
    },
    {
      title: 'Start Time',
      dataIndex: 'start_time',
      key: 2,
      render: (value, row, index) => {
        return <span>{timeConverter(value)}</span>;
      },
    },
    {
      title: 'End Time',
      dataIndex: 'end_time',
      key: 3,
      render: (value, row, index) => {
        return <span>{timeConverter(value)}</span>;
      },
    },
    {
      title: 'Group Type',
      dataIndex: 'group_type',
      key: 4,
    },
    {
      title: 'Course Type',
      dataIndex: 'course_type',
      key: 5,
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 6,
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 7,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 8,
    },
    {
      title: 'Attendance',
      key: 9,
      render: (text, record) => {
        return (
          <Button
            onClick={() => {
              props.getStudentsByCourseID(record.course_id);
              setModalVisible({ visible: true });
            }}
          >
            Take Attendance
          </Button>
        );
      },
    },
  ];

  return (
    <>
      {props.isLoading ? (
        <Spin style={{ marginTop: '150px' }} size='large' />
      ) : (
        <>
          <Table
            dataSource={props.coursesByStaffId}
            className='coursesTable'
            columns={staffCourseColumns}
            pagination={false}
          />
          <AttendanceModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            staffID={staffID}
            teacher={teacher}
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.staffCourseReducer.isLoading,
    coursesByStaffId: state.staffCourseReducer.coursesByStaffId,
    studentList: state.studentsByCourseIDReducer.studentByCourseId,
  };
};

export default withRouter(
  connect(mapStateToProps, { getStaffCourses, getStudentsByCourseID })(
    StaffCoursesTab
  )
);
