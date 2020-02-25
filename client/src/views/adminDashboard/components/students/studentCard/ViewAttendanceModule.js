import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStudentAttendanceTable, getStudentById } from '../../../../../actions';
import { Table, Button, Modal, Spin, Input, Icon,  } from 'antd';
import { dateConverter } from '../../../../../utils/helpers.js';

import '../../students/studentCard/studentTable.scss'

const ViewAttendanceModule = props => {

    const tableColumns = [
        {
          title: 'Date',
          dataIndex: 'meeting_date',
          key: 'date',
          render: (value, row, index) => {
            return <span>{dateConverter(value)}</span>;
          }
        },
        {
          title: 'Attendance',
          dataIndex: 'attendance',
          key: 'attendance',
        }
      ];

    const handleOk = () => {
        setTimeout(() => {
            props.setModalVisible({ loading: false, visible: false });
        }, 10);
    };

    const handleCancel = () => {
        props.setModalVisible({ visible: false });
    };
  
    const attendanceData = props.attendanceList.attendanceList;
    
    return (
        <>
            {props.isLoading ? <Spin style={{ marginTop: '150px' }} size="large" />
                :
                <>
                    <Modal
                        width= "30%"
                        title={`Attendance Records - ${props.info.term} / Section ${props.info.section} / ${props.info.term}`}
                        visible={props.modalVisible.visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="submit" type="primary" onClick={handleOk}>
                                Return
                        </Button>,
                        ]}>
                        <p>{`Student - ${props.studentById.first_name} ${props.studentById.additional_names}`}</p>
                        <Table dataSource={attendanceData} 
                            columns={tableColumns} 
                          />
                    </Modal>
                </>
            }

        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.staffCourseReducer.isLoading,
        attendanceList: state.attendanceReducer.attendanceList,
        studentById: state.studentByIdReducer.studentById,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentAttendanceTable, getStudentById }
    )(ViewAttendanceModule)
)