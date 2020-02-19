import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getCourseTable, getDropDownCourses } from '../../../../actions';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import CourseRegistrationForm from './CourseRegistrationForm';
import SearchCourseTable from './SearchCourseTable';
import '../mainStyle/mainCard.scss';
import { timeConverter } from '../../../../utils/helpers.js';

const CourseTable = props => {
  const [form, setForm] = useState(false);

  useEffect(() => {
    props.getCourseTable();
  }, []);

  const handleCancelButtonOnForm = () => {
    setForm(false);
  };

  const handleAddButton = () => {
    setForm(!form);
  };

  const tableColumns = [
    {
      title: 'Course ID',
      dataIndex: 'course_id',
      key: 1
    },
    {
      title: 'Term',
      dataIndex: 'term',
      key: 2
    },
    {
      title: 'Group Type',
      dataIndex: 'group_type',
      key: 3
    },
    {
      title: 'Course Type',
      dataIndex: 'course_type',
      key: 4
    },
    {
      title: 'School Grade',
      dataIndex: 'school_grade',
      key: 5
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 6
    },
    {
      title: 'Course Schedule',
      dataIndex: 'course_schedule',
      key: 7
    },
    {
      title: 'Start Time',
      dataIndex: 'start_time',
      key: 8,
      render: (value, row, index) => {
        return <span>{timeConverter(value)}</span>;
      }
    },
    {
      title: 'End Time',
      dataIndex: 'end_time',
      key: 9,
      render: (value, row, index) => {
        return <span>{timeConverter(value)}</span>;
      }
    },
    {
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 10
    },
    {
      title: 'Students',
      dataIndex: 'students',
      //this is for total number of students once the endpoints/functionality is built
      key: 11
    },
    {
      title: 'Confirmed',
      dataIndex: 'confirmed',
      key: 12
    },
    {
      title: 'Unconfirmed',
      dataIndex: 'unconfirmed',
      key: 13
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 14
    }
  ];

  //console.log('Course List:', props.courseList);

  const courseData = props.courseList.sort((a, b) => {
    return b.id - a.id;
  });
  return (
    <div>
      <h2 style={{ textAlign: 'left', marginLeft: '1.3rem' }}>Courses Table</h2>
      <div className="row-above">
        <div>
          <SearchCourseTable />
        </div>
        <div
          className="create-new-entry"
          style={{ cursor: 'pointer', color: '#26ABBD' }}
          onClick={handleAddButton}
        >
          <div style={{ marginRight: '10px' }}>Add Course</div>
          <div>
            <FontAwesomeIcon
              style={{ width: '18px', height: '21px' }}
              icon={faPlusCircle}
              size="lg"
            />
          </div>
        </div>
      </div>

      {form ? (
        <CourseRegistrationForm
          handleCancelButtonOnForm={handleCancelButtonOnForm}
          setForm={setForm}
        />
      ) : null}

      {props.isLoading ? (
        <Spin style={{ marginTop: '150px' }} size="large" />
      ) : (
        <Table
          className="rowHover"
          dataSource={courseData}
          columns={tableColumns}
          pagination={false}
          // pagination={{ pageSize: 10, total: 50 }}
          rowKey="course_id"
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                props.setCourseView('courseCardView');
                console.log('Record.course_id', record.course_id);
                props.setCourseID(record.course_id);
              }
            };
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.coursesTableReducer.isLoading,
    courseList: state.coursesTableReducer.courseList,
    error: state.coursesTableReducer.error
  };
};

export default withRouter(
  connect(mapStateToProps, { getCourseTable, getDropDownCourses })(CourseTable)
);
