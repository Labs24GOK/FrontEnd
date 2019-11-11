import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStudentTable } from '../../../../../actions';
import { Table, Spin } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import 'antd/dist/antd.css';
import '../../mainStyle/mainCard.scss'

const CoursesTab = props => {
  const [search, setSearch] = useState('');
  const [form, setForm] = useState(false);


  useEffect(() => {
    props.getStudentTable();
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
      title: 'Term',
      dataIndex: 'id',
      key: 10,
    },
    {
      title: 'Days',
      dataIndex: 'cpr',
      key: 11,
    },
    {
      title: 'Type',
      dataIndex: 'first_name',
      key: 12,
    },
    {
      title: 'Group',
      dataIndex: 'additional_names',
      key: 13,
    },
    {
      title: 'Level',
      dataIndex: 'gender',
      key: 14,
    },
    {
      title: 'Section',
      dataIndex: 'mobile_telephone',
      key: 15,
    },
    {
      title: 'Subsection',
      dataIndex: 'mobile_telephone',
      key: 16,
    },
    {
      title: 'Status',
      dataIndex: 'mobile_telephone',
      key: 17,
    },
  ];

  const studentData = props.studentList.sort((a, b) => {
    return b.id - a.id
  }
  )

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
            dataSource={studentData}
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
    isLoading: state.studentTableReducer.isLoading,
    studentList: state.studentTableReducer.studentList,
    error: state.studentTableReducer.error,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getStudentTable }
  )(CoursesTab)
)