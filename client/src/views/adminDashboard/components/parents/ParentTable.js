import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getParentTable } from '../../../../actions';
import SearchParentTable from './SearchParentTable';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';


function ParentList(props) {
 
  useEffect(() => {
    props.getParentTable();
  }, [])


  const parentListColumns = [
    {
          title: 'Parent ID',
          dataIndex: 'id',
          key: 1,
      },
      {
          title: 'Father Name',
          dataIndex: 'father_name',
          key: 2,
      },
      {
          title: 'Mother Name',
          dataIndex: 'mother_name',
          key: 3,
      },
      {
          title: 'Primary Telephone',
          dataIndex: 'primary_telephone',
          key: 4,
      },
      {
        title: 'Secondary Telephone',
        dataIndex: 'secondary_telephone',
        key: 5,
    },
  ];
  
  const parentData = props.parentList.sort((a,b) => { 
    return b.id - a.id }
)
  return (
    <div>
      <div>
        <SearchParentTable />
      </div>
      {props.isLoading ? (
              <Spin style={{marginTop: '150px'}}size="large" />
            ) : (
            <Table
              className="rowHover"
              dataSource={parentData} 
              columns={parentListColumns} 
              pagination={{ pageSize: 15 }} 
              rowKey='id'
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    props.setParentId(record.id);
                    props.setParentView("parentCard")
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