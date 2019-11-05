import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudentTable } from '../../../../actions';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import './StudentTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import StudentRegistrationForm from './StudentRegistrationForm';

const StudentTable = props => {
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
      console.log('Click');
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
              key: 4,
          },
          {
              title: 'Additional Name',
              dataIndex: 'additional_names',
              key: 5,
          },
          {
              title: 'Gender',
              dataIndex: 'gender',
              key: 6,
          },
          {
            title: 'Phone Number',
            dataIndex: 'mobile_telephone',
            key: 7,
        },
      ];
      
    const studentData = props.studentList.sort((a,b) => { 
        return b.id - a.id }
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
              <div className="create-new-entry">
                <div style={{marginRight: '10px'}}>Create new entry</div>
                <div><FontAwesomeIcon onClick={handleAddButton} style={{width: '25px', height: '25px', cursor: 'pointer'}} icon={faPlusCircle} size='lg'/></div>
              </div>
            </div>

            {form ? (
              <StudentRegistrationForm handleCancelButtonOnForm={handleCancelButtonOnForm}/>
            ) : null}
            
            
            {props.isLoading ? (
              <Spin style={{marginTop: '20px'}}size="large" />
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
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getStudentTable }
  )(StudentTable)
  )