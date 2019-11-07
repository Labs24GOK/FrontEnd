import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudentTable, } from '../../../../../actions';
import { Table, Button, Modal } from 'antd';

import '../../students/studentCard/studentTable.scss'

const StaffCoursesTab = props => {
    const [modalVisible, setModalVisible] = useState({
        visible: false,
        loading: false,
    })

    const attendanceColumns = [
        {
            title: 'ID',
        dataIndex: 'id',
        key: 1,
        },
        {
            title: 'Name',
    dataIndex: 'first_name',
    key: 3,
        }
    ]

  const columns = [
    {
      title: 'Term',
      dataIndex: 'id',
      key: 1,
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['ascend']
    },
    {
      title: 'Days',
      dataIndex: 'cpr',
      key: 2,
      sorter: (a, b) => b.cpr - a.cpr,
      sortDirections: ['descend'],
    },
    {
    title: 'Type',
    dataIndex: 'first_name',
    key: 3,
    sorter: (a, b) => {
      return (b.first_name===null)-(a.first_name===null) || +(a.first_name>b.first_name)||-(a.first_name<b.first_name);
    },
    sortDirections: ['descend']
    },
    {
      title: 'Group',
      dataIndex: 'additional_names',
      key: 4,
    },
    {
      title: 'Level',
      dataIndex: 'gender',
      key: 5,
    },
    {
      title: 'Section',
      dataIndex: 'mobile_telephone',
      key: 6,
    },
    {
      title: 'Subsection',
      dataIndex: 'mobile_telephone',
      key: 7,
    },
    {
      title: 'Status',
      dataIndex: 'mobile_telephone',
      key: 8,
    },
    {
        title: 'Attendance',
        render: (text, record) => {
            return(
                <Button onClick={()=>setModalVisible({visible:true})}>Take Attendance</Button>
            )
        }
        
      },
  ];

  const handleOk = () => {
    setModalVisible({ loading: true });
    setTimeout(() => {
      setModalVisible({ loading: false, visible: false });
    }, 3000);
  };

  const handleCancel = () => {
    setModalVisible({ visible: false });
  };

  return (
    <>
        <Table dataSource={props.studentList} className="coursesTable" columns={columns} pagination={false} />
    <Modal
    title="Student List"
    visible={modalVisible.visible}
    onOk={handleOk}
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel}>
        Return
      </Button>,
      <Button key="submit" type="primary"  onClick={handleOk}>
        Submit
      </Button>,
    ]}
  >
    <Table dataSource={props.studentList} columns={attendanceColumns} pagination={false}/>

  </Modal>
    }
    
    </>
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
  )(StaffCoursesTab)
)