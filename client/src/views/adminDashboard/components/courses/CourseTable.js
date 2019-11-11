import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getCourseTable} from '../../../../actions';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import '../mainStyle/mainCard.scss'

const CourseTable = props => {
  const [search, setSearch] = useState('');
  const [form, setForm] = useState(false);


  useEffect(() => {
    props.getCourseTable();
  }, [])

  const handleCancelButtonOnForm = () => {
    setForm(false);
  }

  const handleSearchInput = () => {

  }

  const handleAddButton = () => {
    setForm(!form);
  }

  const columns = [
    {
      title: 'Course ID',
      dataIndex: 'id',
      key: 1,
    },
    {
      title: 'Term',
      dataIndex: 'term',
      key: 2,
    },
    {
      title: 'Course Type',
      dataIndex: 'course_type',
      key: 4,
    },
    {
      title: 'Group Type',
      dataIndex: 'group_type',
      key: 5,
    },
    {
      title: 'School Grade',
      dataIndex: 'school_grade',
      key: 6,
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 7,
    },
    {
      title: 'Course Schedule',
      dataIndex: 'course_schedule',
      key: 8,
    },{
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 9,
    },
  ];

  // const studentData = props.studentList.sort((a, b) => {
  //   return b.id - a.id
  // }
  // )

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
          <div style={{ marginRight: '10px' }}>Add Course</div>
          <div><FontAwesomeIcon onClick={handleAddButton} style={{ width: '18px', height: '21px' }} icon={faPlusCircle} size='lg' /></div>
        </div>
      </div>

      {props.isLoading ? (
        <Spin style={{ marginTop: '150px' }} size="large" />
      ) : (
          <Table
            className="rowHover"
            dataSource={props.courseList}
            columns={columns}
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
    courseList: state.coursesTableReducer.courseList,
    error: state.coursesTableReducer.error,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCourseTable }
  )(CourseTable)
)