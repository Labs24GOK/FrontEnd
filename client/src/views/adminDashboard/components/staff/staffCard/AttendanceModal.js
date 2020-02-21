import 'react-dropdown/style.css';
import '../StaffTable.scss';

import { Button, DatePicker, Modal, Spin, Table } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getDropDownCourses,
  postStudentAttendance,
} from '../../../../../actions';
import API_URL from '../../../../../config/apiUrl';
import { Label } from '../../mainStyle/styledComponent.js';

const AttendanceModal = props => {
  const [state, setState] = useState({
    meeting: {
      teacher_id: props.staffID,
      course_id: props.courseID,
      meeting_date: moment().format('YYYY-MM-DD'),
      notes: 'testing',
      material_covered: 'testing',
    },
    students: [],
  });

  useEffect(() => {
    props.getDropDownCourses();
  }, []);
  const [attendees, setAttendees] = useState([]);
  useEffect(() => {
    setState({
      ...state,
      meeting: {
        ...state.meeting,
        course_id: props.courseID,
      },
    });

    // !!!

    if (state.meeting.meeting_date && props.courseID) {
      axios
        .get(
          `${API_URL}/attendance/date/${state.meeting.meeting_date}/course/${props.courseID}`
        )
        .then(res => {
          setAttendees(res.data.attendanceRecord);
        })
        .catch(err => {
          console.log('ERROR', err);
        });
    }
  }, [state.meeting.meeting_date, props.courseID]);

  const attendanceStatus = ['present', 'absent', 'late'];

  const attendanceColumns = [
    {
      title: 'Student ID',
      dataIndex: 'student_id',
      key: 1,
    },
    {
      title: 'Name',
      dataIndex: `student_name`,
      key: 2,
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 3,
      render: (text, row, index) => {
        return (
          <Dropdown
            value={attendees[index].attendance}
            onChange={e =>
              setAttendees(
                attendees.map((each, i) => {
                  if (i === index) {
                    return { ...each, attendance: e.value };
                  } else {
                    return each;
                  }
                })
              )
            }
            controlClassName='myControlClassName'
            options={attendanceStatus}
            className='dropdown'
          />
        );
      },
    },
  ];

  console.log('STATE', state);

  const handleOk = () => {
    const studentsArr = attendees.map(each => {
      return {
        student_id: each.student_id,
        attendance: each.attendance,
      };
    });
    console.log('ATTENDANCE STATE', { ...state, students: studentsArr });
    props.postStudentAttendance({ ...state, students: studentsArr });

    props.setModalVisible({ loading: false, visible: false });

    setState({
      meeting: {
        teacher_id: props.staffID,
        course_id: props.courseID,
        meeting_date: moment().format('YYYY-MM-DD'),
        notes: 'testing',
        material_covered: 'testing',
      },
      students: [],
    });
  };

  const handleCancel = () => {
    setState({
      meeting: {
        teacher_id: '',
        course_id: '',
        meeting_date: moment().format('YYYY-MM-DD'),
        notes: '',
        material_covered: '',
      },
      students: [],
    });
    props.setModalVisible({ visible: false });
  };

  const changeHandler = (date, dateString) => {
    setState({
      ...state,
      meeting: {
        ...state.meeting,
        meeting_date: dateString,
      },
    });
  };

  const dateFormat = 'YYYY-MM-DD';

  return (
    <>
      {props.isLoading ? (
        <Spin style={{ marginTop: '150px' }} size='large' />
      ) : (
        <>
          <Modal
            title='Student List'
            visible={props.modalVisible.visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key='back' onClick={handleCancel}>
                Return
              </Button>,
              <Button key='submit' type='primary' onClick={handleOk}>
                Submit
              </Button>,
            ]}
          >
            <DatePicker
              size='small'
              onChange={changeHandler}
              defaultValue={moment()}
              value={
                state.meeting.meeting_date
                  ? moment(state.meeting.meeting_date)
                  : moment()
              }
              format={dateFormat}
            />
            <div>
              <Label>Teacher</Label>
              <Dropdown
                value={props.teacher}
                onChange={e =>
                  setState(state => ({
                    ...state,
                    meeting: {
                      ...state.meeting,
                      teacher_id: e.value,
                    },
                  }))
                }
                controlClassName='myControlClassName'
                className='dropdown'
                options={props.teacherDropdown}
              />
            </div>
            <span style={{ marginLeft: 8 }} />
            <Table
              dataSource={attendees}
              columns={attendanceColumns}
              pagination={false}
            />
          </Modal>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.staffCourseReducer.isLoading,
    studentList: state.studentsByCourseIDReducer.studentByCourseId,
    teacherDropdown: state.coursesTableReducer.teacherTable,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    postStudentAttendance,
    getDropDownCourses,
  })(AttendanceModal)
);
