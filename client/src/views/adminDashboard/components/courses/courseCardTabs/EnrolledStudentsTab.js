import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStudentTableByCourseID } from '../../../../../actions';
import { Table, Spin } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import 'antd/dist/antd.css';
import '../../mainStyle/mainCard.scss'

const EnrolledStudentsTab = props => {
  const [search, setSearch] = useState('');
  const [form, setForm] = useState(false);


  useEffect(() => {
    props.getStudentTableByCourseID(props.courseId);
  }, [])

  const handleCancelButtonOnForm = () => {
    setForm(false);
  }

  const handleSearchInput = () => {
    
  }

  const handleAddButton = () => {
    setForm(!form);
  }



  const courseColumns = [
    {
      title: 'Course ID',
      dataIndex: 'course_id',
      key: 1,
    },
    {
      title: 'Student ID',
      dataIndex: 'student_id',
      key: 2,
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 3,
    },
    {
      title: 'Additional Names',
      dataIndex: 'additional_names',
      key: 4,
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 5,
    },
    {
      title: 'First Day',
      dataIndex: 'first_day',
      key: 6,
    },
    {
      title: 'last Day',
      dataIndex: 'last_day',
      key: 7,
    },
    {
      title: 'Result',
      dataIndex: 'result',
      key: 8,
    },
  ];


  const studentData = props.enrolledStudents.map(each=> {
    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let firstDay = new Date(each.first_day).toLocaleDateString('en-GB', options)
    let lastDay = new Date(each.last_day).toLocaleDateString('en-GB', options)
    each.first_day = firstDay;
    each.last_day = lastDay;
    return each;
    }
  ).sort((a,b)=> {
    return a.student_id - b.student_id;
  })

  

  return (
    <div>
      <div className="row-above">
        <div>
          <input
            className="row-above-input"
            type="text"
            name="Search"
            placeholder="Search by registration date, name, cpr, etc..."
            value={search}
            onChange={handleSearchInput}
          />
        </div>
        <div className="create-new-entry" style={{ cursor: 'pointer', color: '#26ABBD' }}>
          <div style={{ marginRight: '10px' }}>Enroll Student</div>
          <div><FontAwesomeIcon onClick={handleAddButton} style={{ width: '18px', height: '21px' }} icon={faPlusCircle} size='lg' /></div>
        </div>
      </div>

      {props.isLoading ? (
        <Spin style={{ marginTop: '150px' }} size="large" />
      ) : (
          <Table
            className="rowHover"
            dataSource={studentData}
            columns={courseColumns}
            pagination={{ pageSize: 15 }}
            rowKey='id'
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  props.setCourseView('courseCardView')
                  props.setCourseID(record.id)
                }
              };
            }}
          />
        )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.coursesTableReducer.isLoading,
    enrolledStudents: state.coursesTableReducer.studentsById,
    error: state.coursesTableReducer.error,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getStudentTableByCourseID }
  )(EnrolledStudentsTab)
)