import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCourseTable } from '../../../../../actions';
import { Table, Button, Modal, Spin, Input, Icon,  } from 'antd';

import '../../students/studentCard/studentTable.scss'

const ViewAttendanceModule = props => {

    useEffect(() => {
      }, []);

    const tableColumns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Pacing Guide',
          dataIndex: 'pacing_guide',
          key: 'pacing_guide',
        },
        {
          title: 'Content',
          dataIndex: 'content',
          key: 'content',
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

    return (
        <>
            {props.isLoading ? <Spin style={{ marginTop: '150px' }} size="large" />
                :
                <>
                    <Modal
                        width= "50%"
                        title="Attendance Records"
                        visible={props.modalVisible.visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Return
                        </Button>,
                            <Button key="submit" type="primary" onClick={handleOk}>
                                Submit
                        </Button>,
                        ]}>
                        <Table dataSource={null} 
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
        courseList: state.coursesTableReducer.courseList,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getCourseTable }
    )(ViewAttendanceModule)
)