import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStaffCourses, getStudentsByCourseID } from '../../../../../actions';
import AttendanceModal from './AttendanceModal';
import { Table, Button, Spin } from 'antd';

import '../../students/studentCard/studentTable.scss'

const StaffCoursesTab = props => {

    
    const {staffID, teacher} = props
    useEffect(() => {
        props.getStaffCourses(staffID)
    }, [])
    
    const [modalVisible, setModalVisible] = useState({
        visible: false,
        loading: false,
    })

    const staffCourseColumns = [
        {
            title: 'Term',
            dataIndex: 'term',
            key: 3,
        },
        {
            title: 'Days',
            dataIndex: 'term',
            key: 4,
        },
        {
            title: 'Type',
            dataIndex: 'course_type',
            key: 5,
        },
        {
            title: 'Group Type',
            dataIndex: 'group_type',
            key: 6,
        },
        {
            title: 'Level',
            dataIndex: 'level',
            key: 7,
        },
        {
            title: 'Section',
            dataIndex: 'section',
            key: 8,
        },
        {
            title: 'Subsection',
            dataIndex: 'subsection',
            key: 9,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 10,
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 11,
        },
        {
            title: 'Attendance',
            render: (text, record) => {
                return (
                    <Button onClick={() => {
                        props.getStudentsByCourseID(record.id);
                        setModalVisible({ visible: true })
                    }}>Take Attendance</Button>
                )
            }

        },
    ];

    return (
        <>
            {props.isLoading ? <Spin style={{ marginTop: '150px' }} size="large" />
                :
                <>
                    <Table dataSource={props.coursesByStaffId} className="coursesTable" columns={staffCourseColumns} pagination={false} />
                    <AttendanceModal modalVisible={modalVisible} 
                    setModalVisible={setModalVisible} 
                    staffID={staffID}
                    teacher={teacher}
                    />
                </>
            }

        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.staffCourseReducer.isLoading,
        coursesByStaffId: state.staffCourseReducer.coursesByStaffId,
        studentList: state.studentsByCourseIDReducer.studentByCourseId
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStaffCourses, getStudentsByCourseID }
    )(StaffCoursesTab)
)