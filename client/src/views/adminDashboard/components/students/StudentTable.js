import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudentTable, filterStudentTable } from '../../../../actions';
import { Table, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import StudentRegistrationForm from './StudentRegistrationForm';

import 'antd/dist/antd.css';
import '../mainStyle/mainTable.scss'; 

const StudentTable = props => {
  const [form, setForm] = useState(false);

  useEffect(() => {
    props.getStudentTable();
  }, [])


  const handleCancelButtonOnForm = () => {
    setForm(false);
  }

  const handleSearchInput = (e) => {
    const searchTerm = e.target.value;
    props.filterStudentTable(searchTerm)
  }

  const handleAddButton = () => {
    setForm(!form);
  }

  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'id',
      key: 1,
    },
    {
      title: 'CPR',
      dataIndex: 'cpr',
      key: 2,
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 3,
    },
    {
      title: 'Additional Name',
      dataIndex: 'additional_names',
      key: 4,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 5,
    },
    {
      title: 'Phone Number',
      dataIndex: 'mobile_telephone',
      key: 6,
    },
  ];

  const studentData = props.studentList.sort((a, b) => {
    return b.id - a.id
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
              value={props.searchTerm}
              onChange={handleSearchInput}
          />
        </div>
        <div className="create-new-entry">
          <div style={{ marginRight: '10px' }}>Create new entry</div>
          <div><FontAwesomeIcon onClick={handleAddButton} style={{ width: '25px', height: '25px', cursor: 'pointer' }} icon={faPlusCircle} size='lg' /></div>
        </div>
      </div>

      {form ? (
        <StudentRegistrationForm handleCancelButtonOnForm={handleCancelButtonOnForm} />
      ) : null}


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
                  props.setStudentView('studentCardView');
                  props.setStudentID(record.id)
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
    searchTerm: state.studentTableReducer.searchTerm
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getStudentTable, filterStudentTable }
  )(StudentTable)
)