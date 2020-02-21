import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudentCourses, getStudentAttendanceTable } from '../../../../../actions';
import { Table, Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import EnrollStudentForm from './EnrollStudentForm';
import ViewAttendanceModule from './ViewAttendanceModule';
import { dateConverter } from '../../../../../utils/helpers.js';

import './studentTable.scss'

const StudentCoursesTab = props => {
  const [form, setForm] = useState(false);
  const [ courseID, setCourseID] = useState();
  const [modalVisible, setModalVisible] = useState({
    visible: false,
    loading: false,
})  

  const handleCancelButtonOnForm = () => {
    setForm(false);
  };

  const handleEnrollButton = () => {
    setForm(!form);
  };

  useEffect(() => {
    props.getStudentCourses(props.studentID)
  }, [form])

useEffect(() => {
  props.getStudentAttendanceTable(courseID)
}, [courseID]);

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
      dataIndex: 'course_level',
      key: 5,
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 6,
    },
    {
      title: 'Student Status',
      dataIndex: 'student_result_type',
      key: 7,
    },
    {
      title: 'First Day',
      dataIndex: 'first_day',
      key: 8,
      render: (value, row, index) => {
        return <span>{dateConverter(value)}</span>;
      }
    },
    {
      title: 'Last Day',
      dataIndex: 'last_day',
      key: 9,
      render: (value, row, index) => {
        return <span>{dateConverter(value)}</span>;
      }
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 10,
      render: () => {
        return  <Button onClick={() => {
          props.getStudentAttendanceTable(courseID)
          setModalVisible({ visible: true })
      }}>View Attendance
      </Button>;
      }
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
          form={form}
        />
      ) : null}

      <Table dataSource={props.courseByStudentId} className="coursesTable" columns={studentCourseColumns} pagination={false} 
      onRow={record => {
        return {
          onClick: () => {
            setCourseID(record.course_enrollment_id);
          }
        };
      }}/>
    <ViewAttendanceModule 
    modalVisible={modalVisible} 
    setModalVisible={setModalVisible}
    setCourseID={setCourseID}
    courseID={courseID}
    />
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
    { getStudentCourses, getStudentAttendanceTable }
  )(StudentCoursesTab)
)