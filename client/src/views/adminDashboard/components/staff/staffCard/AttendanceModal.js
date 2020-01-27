import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStudentsByCourseID, postStudentAttendance } from '../../../../../actions';
import { Table, Button, Modal, Spin, DatePicker } from 'antd';

import '../../students/studentCard/studentTable.scss'

const AttendanceModal = props => {

    useEffect(() => {
        props.getStudentsByCourseID(props.staffID)
        const studentsNew = props.studentList.map(each => {
            let student = {attendance: false, student_id: each.student_id}
            return student;
        })
        setAttendance({...attendance, 
            students:studentsNew})
    },[])

    const [attendance, setAttendance] = useState({
        meeting: {},
        students: []
    })

    const attendanceColumns = [
        {
            title: 'Student ID',
            dataIndex: 'student_id',
            key: 1,
        },
        {
            title: 'Name',
            dataIndex: 'first_name',
            dataIndex: 'additional_names',
            key: 2,
        },

    ] 

    const handleOk = () => {
        props.postStudentAttendance(attendance)
        setTimeout(() => {
            props.setModalVisible({ loading: false, visible: false });
        }, 3000);
    };

    const handleCancel = () => {
        props.setModalVisible({ visible: false });
    };

    const changeHandler = (date, dateString) => {
        setAttendance({
            ...attendance,
            meeting: {course_id: props.studentList[0].course_id,
                meeting_date:dateString, 
                teacher: props.teacher,
                material_covered: '',
                notes:'',
                unpaid: false
            }
        })

    }

     const rowSelection = {
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
                        title="Student List"
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
                        <DatePicker size='small'  onChange={changeHandler}/>
                        <span style={{ marginLeft: 8 }}>
                            {hasSelected.includes(true) ? `Selected ${attendance.students.filter(each => {
                                return each.attendance !== false
                            }).length} students` : ''}
                        </span>
                        <Table dataSource={props.studentList} 
                            columns={attendanceColumns} 
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
        studentList: state.studentsByCourseIDReducer.studentByCourseId
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentsByCourseID, postStudentAttendance }
    )(AttendanceModal)
)