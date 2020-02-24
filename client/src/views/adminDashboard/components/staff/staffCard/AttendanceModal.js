import 'react-dropdown/style.css';

import { Button, DatePicker, Modal, Spin, Table, notification } from 'antd';
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
import { DropdownLabel } from '../../mainStyle/styledComponent.js';

const AttendanceModal = props => {
  console.log("ATTENDANCE MODAL PROPS", props)
  //set initial State
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
  //manage the state of the Students array
  const [attendees, setAttendees] = useState([]);
  useEffect(() => {

    //Set courseID for Axios call (Some concerns this may cause issues in future as state is immediately used in below Axios call)
    setState({
      ...state,
      meeting: {
        ...state.meeting,
        course_id: props.courseID,
      },
    });

    //!!! See above note
    //AXIOS call to get all necessary information and (by not being in a Redux action) gives the ability to manipulate student array more effectively.
    if (state.meeting.meeting_date && props.courseID) {
      axios
        .get(
          `${API_URL}/attendance/date/${state.meeting.meeting_date}/course/${props.courseID}`
        )
        .then(res => {
          console.log(res.data.attendanceRecord)
          setAttendees(res.data.attendanceRecord);
        })
        .catch(err => {
          console.log('ERROR', err);
        });
    }
  }, [state.meeting.meeting_date, props.courseID]);

  //Array(datasource) for attendance dropdown menu
  const attendanceStatus = ['present', 'absent', 'late'];

  //Columns of Table to be rendered in Modal
  const attendanceColumns = [
    {
      title: 'Student ID',
      dataIndex: 'student_id',
      key: 1,
    },
    {
    title: 'Name',
    key: 2,
      render: (text, record) => (
        <span>
          <p>{record.student_name} {record.student_additional_names}</p>
        </span>
      )
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
            controlClassName='myControlClassNameModal'
            options={attendanceStatus}
            className='dropdown'
          />
        );
      },
    },
  ];

  //Handles the "Submit" button.
  const handleOk = () => {
    //maps student array to proper format before sending
    const studentsArr = attendees.map(each => {
      return {
        student_id: each.student_id,
        attendance: each.attendance,
      };
    });
    console.log('ATTENDANCE STATE', { ...state, students: studentsArr });
    props.postStudentAttendance({ ...state, students: studentsArr })
    //Closes modal
    props.setModalVisible({ loading: false, visible: false });
    //resets State to current date after submit
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
    // openNotification('success')
  };
  
  console.log("MESSAGE", props.attendanceResponse)


  //Handles the "Return" button (closes modal and resets state as seen below)
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

  //dateFormat for moment()
  const dateFormat = 'YYYY-MM-DD';

  //actual Rendering on web page
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
              size='default'
              className='attendanceDate'
              onChange={changeHandler}
              defaultValue={moment()}
              value={
                state.meeting.meeting_date
                  ? moment(state.meeting.meeting_date)
                  : moment()
              }
              format={dateFormat}
              />
            <span style={{ marginBotton: 8 }} />
            <div>
              <DropdownLabel>Teacher</DropdownLabel>
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
                controlClassName='myControlClassNameModal'
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
    teacherDropdown: state.coursesTableReducer.teacherTable,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    postStudentAttendance,
    getDropDownCourses,
  })(AttendanceModal)
);
