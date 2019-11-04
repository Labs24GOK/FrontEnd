import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStaffTable } from '../../../../actions';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import '../students/studentCard/StudentCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import StaffRegistrationForm from './StaffRegistrationForm';

const StaffTable = props => {

  // const [search, setSearch] = useState('');
  // const [form, setForm] = useState(false);
  
 
    
    useEffect(() => {
        props.getStaffTable();
    }, [])

    // const handleCancelButtonOnForm = () => {
    //   setForm(false);
    // }

    // const handleSearchInput = () => {

    // }

    // const handleAddButton = () => {
    //   console.log('Click');
    //   setForm(!form);
    // }

    const columns = [
      
        {
              title: 'Name',
              dataIndex: 'name',
              key: 1,
          },
          {
              title: 'Short Name',
              dataIndex: 'short_name',
              key: 2,
          },
          {
              title: 'CPR',
              dataIndex: 'cpr',
              key: 4,
          },
          {
              title: 'Mobile Number',
              dataIndex: 'mobile_number',
              key: 5,
          },
          {
              title: 'Email',
              dataIndex: 'email',
              key: 6,
          },
          {
              title: 'Accent',
              dataIndex: 'accent',
              key: 7,
           },
          {
              title: 'Gender',
              dataIndex: 'gender',
              key: 8,
          },
          {
              title: 'BirthDate',
              dataIndex: 'birthdate',
              key: 9,
          },
          {
              title: 'Teaching Rate',
              dataIndex: 'teaching_rate',
              key: 10,
          },
          {
              title: 'Admin',
              ataIndex: 'admin ',
              key: 12,
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 12,
        },
        {
            title: 'User ID',
            dataIndex: 'user_id',
            key: 13,
          },
          {
            title: 'Student ID',
            dataIndex: 'id',
            key: 14,
          },
      ];
      
    const staffData = props.staffList.sort((a,b) => { 
        return b.id - a.id }
    )



    return (
      <div>
        {props.isLoading ? (
                <Spin style={{marginTop: '20px'}}size="large" />
              ) : (
              <Table
                className="rowHover"
                dataSource={staffData} 
                columns={columns} 
                pagination={{ pageSize: 15 }} 
                rowKey='id'
                onRow={(record, rowIndex) => {
                  return {
                    onClick: event => {
                      props.setStaffId(record.id);
                      props.setStaffView("staffInfo")
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
    isLoading: state.staffTableReducer.isLoading,
    staffList: state.staffTableReducer.staffList,
    error: state.staffTableReducer.error,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getStaffTable }
)(StaffTable)
)
