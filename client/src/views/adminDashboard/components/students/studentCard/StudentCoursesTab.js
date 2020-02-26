import './studentTable.scss'

import { Button, Table } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { editEnrollStudent, getStudentAttendanceTable, getStudentCourses, toggleDeleteModel, unenrollEnrollStudent } from '../../../../../actions';
import { dateConverter } from '../../../../../utils/helpers.js';
import Modal from '../../modals/DeleteModal';
import EnrollStudentForm from './EnrollStudentForm';
import ViewAttendanceModule from './ViewAttendanceModule';

const StudentCoursesTab = props => {
  const [form, setForm] = useState(false);
  const [ courseID, setCourseID] = useState();
  const [ info, setInfo] = useState({
    student_id: '',
    course_id: ''
  });
  const [modalVisible, setModalVisible] = useState({
    visible: false,
    loading: false,
})  

const [state, setState] = useState({
  result_type_code : null,
  notes : 'test'
});

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

const areYouSureYouWantToDelete = e => {
  e.preventDefault();
  props.toggleDeleteModel(true);
};

function editStudentStatus(e) {
  setState({ ...state, result_type_code: e.value })
}

const deleteStudentInfo = async () => {
  await props.unenrollEnrollStudent( info.student_id, info.course_id)
  // props.getStudentCourses(props.studentID)
};

  const handleCancelButtonOnForm = () => {
    setForm(false);
  };

  const handleEnrollButton = () => {
    setForm(!form);
  };

  /* Use Effects */
  useEffect(() => {
    if(props.studentID) {
      props.getStudentCourses(props.studentID)
    }
  }, [props.studentID])

  useEffect(() => {

    if(props.isEdited && props.studentID) {
      props.getStudentCourses(props.studentID)
    }
  }, [props.isEdited, props.studentID])

  useEffect(() => {
    // !isNaN() handles occurrence of falsey value when 
    // value of result_type_code is 0
    // it will return false if data-type is not a number, 
    // i.e. when data-type is undefined
    if (!isNaN(state.result_type_code)) {
      props.editEnrollStudent(info.student_id, info.course_id, state)
    }

  }, [state.result_type_code])

  useEffect(() => {
    if (courseID) {
      props.getStudentAttendanceTable(courseID)
    }
  }, [courseID])

  /* End Use Effects */

  const studentCourseColumns = [
    {
      title: 'Term',
      dataIndex: 'term',
      key: 1,
    },
    {
      title: 'Days',
      dataIndex: 'course_days',
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
      title: 'Status',
      dataIndex: 'result_type_code',
      key: 7,
      render: (value) => {
        return  <Dropdown
        controlClassName='myControlClassName'
        className='dropdown'
        name='result_type_code'
        onChange={(e) => editStudentStatus(e)}
        value={statusArr[value+3]}
        options={statusArr}
    />
      }
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
    {
      title: 'Unenroll',
      dataIndex: 'unenroll',
      key: 11,
      render: () => {
        return          <Button
        onClick={areYouSureYouWantToDelete}
        style={{ background: '#C73642', width: '80px' , color: 'white'}}>
        Unenroll
      </Button>
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
            setInfo(record)
            setCourseID(record.course_enrollment_id);
          }
        };
      }}/>
    <Modal submitActionCB={deleteStudentInfo} />
    <ViewAttendanceModule 
    modalVisible={modalVisible} 
    setModalVisible={setModalVisible}
    setCourseID={setCourseID}
    courseID={courseID}
    info={info}
    />
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.studentCourseReducer.isLoading,
    courseByStudentId: state.studentCourseReducer.courseByStudentId,
    error: state.studentCourseReducer.error,
    isEdited: state.studentByIdReducer.isEdited
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getStudentCourses, getStudentAttendanceTable, toggleDeleteModel, unenrollEnrollStudent, editEnrollStudent }
  )(StudentCoursesTab)
)