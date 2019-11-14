import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getParentTable } from '../../../../actions';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import ParentRegistrationForm from './ParentRegistrationForm';


function ParentList(props) {
 
  const [search, setSearch] = useState('');
  const [form, setForm] = useState(false);


  useEffect(() => {
    props.getParentTable();
  }, [])


  const handleCancelButtonOnForm = () => {
    setForm(false);
  }

  const handleSearchInput = () => {

  }

  const handleAddButton = () => {
    setForm(!form);
  }


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
            <ParentRegistrationForm handleCancelButtonOnForm={handleCancelButtonOnForm}/>
          ) : null}
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