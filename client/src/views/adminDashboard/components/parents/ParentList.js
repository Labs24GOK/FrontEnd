import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getParentTable } from '../../../../actions';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';


function ParentList(props) {
 
  useEffect(() => {
    props.getParentTable();
  }, [])


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
  
  const parentData = props.parentList.sort((a,b) => { 
    return b.id - a.id }
)
  return (
    <div>
      {props.isLoading ? (
              <Spin style={{marginTop: '20px'}}size="large" />
            ) : (
            <Table
              className="rowHover"
              dataSource={parentData} 
              columns={columns} 
              pagination={{ pageSize: 15 }} 
              rowKey='id'
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    props.setParentId(record.id);
                    props.setParentView("parentInfo")
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
    isLoading: state.parentReducer.isLoading,
    parentList: state.parentReducer.parentList,
    error: state.parentReducer.error,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getParentTable }
)(ParentList)
)