import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCourseTable } from '../../../../../actions';
import { Table, Button, Modal, Spin, DatePicker } from 'antd';

import '../../students/studentCard/studentTable.scss'

const CourseSearchModule = props => {

    useEffect(() => {
        props.getCourseTable();
      }, []);

    const [attendance, setAttendance] = useState({
        meeting: {},
        students: []
    })

    const tableColumns = [
        {
          title: 'Course ID',
          dataIndex: 'course_id',
          key: 1,
        },
        {
          title: 'Term',
          dataIndex: 'term',
          key: 2,
        },
        {
          title: 'Course Type',
          dataIndex: 'course_type',
          key: 4,
        },
        {
          title: 'Group Type',
          dataIndex: 'group_type',
          key: 5,
        },
        {
          title: 'School Grade',
          dataIndex: 'school_grade',
          key: 6,
        },
        {
          title: 'Level',
          dataIndex: 'level',
          key: 7,
        },
        {
          title: 'Course Schedule',
          dataIndex: 'course_schedule',
          key: 8,
        },
        {
          title: 'Teacher',
          dataIndex: 'teacher',
          key: 9,
        },
      ];

      
  console.log('Course List:', props.courseList);

    const handleOk = () => {
        props.postStudentAttendance(attendance)
        setTimeout(() => {
            props.setModalVisible({ loading: false, visible: false });
        }, 3000);
    };

    const handleCancel = () => {
        props.setModalVisible({ visible: false });
    };

    const courseData = props.courseList.sort((a, b) => {
        return b.id - a.id;
      });

     const rowSelection = {
        type: 'radio',
        onChange: (selectedRowKeys, selectedRows) => {
            const studentOld = attendance.students.map(each => {
                const studentsNew = selectedRows.map(each => {
                    return each.student_id
                })
                if(studentsNew.includes(each.student_id)){
                    let student = {attendance: true, student_id: each.student_id}
                    return student;
                } else {
                    let student = {attendance: false, student_id: each.student_id}
                    return student;
                }
            })
            setAttendance({
                ...attendance,
                students: studentOld
            })
        },
      };

    const hasSelected = attendance.students.map(each =>{
        return each.attendance
    })

    return (
        <>
            {props.isLoading ? <Spin style={{ marginTop: '150px' }} size="large" />
                :
                <>
                    <Modal
                        width= "70%"
                        title="Course Search"
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
                        <Table dataSource={courseData} 
                            columns={tableColumns} 
                            pagination={false} 
                            rowSelection={rowSelection}
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
    )(CourseSearchModule)
)