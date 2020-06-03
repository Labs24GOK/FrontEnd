import 'antd/dist/antd.css';
import '../mainStyle/mainCard.scss';

import { Spin, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getCourseTable,
  getDropDownCourses
} from '../../../../actions';
import { timeConverter } from '../../../../utils/helpers.js';
import CourseRegistrationForm from './CourseRegistrationForm';
import SearchCourseTable from './SearchCourseTable';

const CourseTable = props => {
  const [form, setForm] = useState(false);

  useEffect(() => {
    props.getCourseTable();
  }, []);

  useEffect(
    () => {
      if (props.isPosted) props.getCourseTable();
    },
    [props.isPosted]
  );

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
      title: 'Level',
      dataIndex: 'level',
      key: 4
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 5
    },
    {
      title: 'Course Type',
      dataIndex: 'course_type',
      key: 6
    },
    {
      title: 'School Grade',
      dataIndex: 'school_grade',
      key: 7
    },
    {
      title: 'Course Schedule',
      dataIndex: 'course_schedule',
      key: 8
    },
    {
      title: 'Start Time',
      dataIndex: 'start_time',
      key: 9,
      render: value => {
        return (
          <span>
            {timeConverter(value)}
          </span>
        );
      }
    },
    {
      title: 'End Time',
      dataIndex: 'end_time',
      key: 10,
      render: value => {
        return (
          <span>
            {timeConverter(value)}
          </span>
        );
      }
    },
    {
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 11
    },
    {
      title: 'Students',
      dataIndex: 'total_students',
      key: 12
    },
    {
      title: 'Confirmed',
      dataIndex: 'confirmed_students',
      key: 13
    },
    {
      title: 'Unconfirmed',
      dataIndex: 'unconfirmed_students',
      key: 14
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 15
    }
  ];

  const courseData = props.courseList.sort((a, b) => {
    return b.id - a.id;
  });
  return (
    <>
      <h2
        style={{ textAlign: 'left', marginLeft: '1.3rem' }}
      >
        Courses Table
      </h2>
      <div className="row-above">
        <div>
          <SearchCourseTable />
        </div>
        <div
          className="create-new-entry"
          style={{ cursor: 'pointer', color: '#26ABBD' }}
          onClick={handleAddButton}
        >
          <div style={{ marginRight: '10px' }}>
            Add Course
          </div>
          <div>
            <FontAwesomeIcon
              style={{ width: '18px', height: '21px' }}
              icon={faPlusCircle}
              size="lg"
            />
          </div>
        </div>
      </div>

      {form
        ? <CourseRegistrationForm
            handleCancelButtonOnForm={
              handleCancelButtonOnForm
            }
            setForm={setForm}
          />
        : null}

      {props.isLoading
        ? <Spin
            style={{ marginTop: '150px' }}
            size="large"
          />
        : <Table
            className="rowHover"
            dataSource={courseData}
            columns={tableColumns}
            pagination={false}
            rowKey="course_id"
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  props.setCourseView('courseCardView');
                  props.setCourseID(record.course_id);
                }
              };
            }}
          />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.coursesTableReducer.isLoading,
    isPosted: state.coursesTableReducer.isPosted,
    courseList: state.coursesTableReducer.courseList,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getCourseTable,
    getDropDownCourses
  })(CourseTable)
);
