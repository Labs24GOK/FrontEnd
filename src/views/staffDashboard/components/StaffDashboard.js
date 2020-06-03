import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { Button, Spin, Table } from 'antd';
import moment from 'moment';
import { timeConverter } from '../../../utils/helpers';
import AttendanceModal from '../../adminDashboard/components/staff/staffCard/AttendanceModal';
import './staffDashboard.scss';

function StaffDashboard() {
    const [staffCourses, setStaffCourses] = useState([]);
    const [staffId, setStaffId] = useState();
    const { push } = useHistory();
  

    // GetuserId from JWT
    let token = localStorage.getItem('token');
    let tokenData = JSON.parse(atob(token.split('.')[1]));

    let user = tokenData.subject;
    let name = tokenData.name;
    
    
    //Get staffId from userId
    useEffect(() => {
            axiosWithAuth()
            .get(`/staffdashboard/${user}`)
            .then(res => {
                setStaffId(res.data.staff_id);
            })
            .catch(err => {
                console.log(err);
            })   
    }, [user]);

    //Get staff courses with staffId
    useEffect(() => {
        if(staffId){
            axiosWithAuth()
            .get(`/staff/${staffId}/courses`)
            .then(res => {
                // console.log(res.data);
                setStaffCourses(res.data);
            })
            .catch(err => console.log(err))
        }
    }, [staffId]);

    const [modalVisible, setModalVisible] = useState({
        visible: false,
        loading: false,
      });
    
      const [courseID, setCourseID] = useState(0);
    
      const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
      const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));
    
      const staffCourseColumns = [
        {
          title: 'ID',
          dataIndex: 'course_id',
          key: 1,
        },
        // {
        //   title: 'Term',
        //   dataIndex: 'term',
        //   key: 2,
        // },
        // {
        //   title: 'Group Type',
        //   dataIndex: 'group_type',
        //   key: 3,
        // },
        // {
        //   title: 'Level',
        //   dataIndex: 'level',
        //   key: 4,
        // },
        // {
        //   title: 'Section',
        //   dataIndex: 'section',
        //   key: 5,
        // },
        // {
        //   title: 'Course Type',
        //   dataIndex: 'course_type',
        //   key: 6,
        // },
        {
          title: 'Course Schedule',
          dataIndex: 'course_schedule',
          key: 7,
        },
        {
          title: 'Start Time',
          dataIndex: 'start_time',
          key: 8,
          render: (value, row, index) => {
            return <span>{timeConverter(value)}</span>;
          },
        },
        {
          title: 'End Time',
          dataIndex: 'end_time',
          key: 9,
          render: (value, row, index) => {
            return <span>{timeConverter(value)}</span>;
          },
        },
        // {
        //   title: 'Status',
        //   dataIndex: 'status',
        //   key: 10,
        // },
        {
          title: 'Attendance',
          key: 11,
          render: (text, record) => {
            return (
              <Button
                onClick={() => {
                  setCourseID(record.course_id);
                  setStartDate(record.start_date);
                  setEndDate(record.end_date);
                  setModalVisible({ visible: true });
                }}
              >
                Record
              </Button>
            );
          },
        },
      ];
    
      return (
        <>
            <div className="staff">
                <h1>Welcome {name}. </h1>      
            </div>    

          {
            <>
              <Table
                dataSource={staffCourses}
                className='coursesTable'
                columns={staffCourseColumns}
                pagination={false}
                rowKey="course_id"
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            push(`dashboard/staffCourses/${record.course_id}`)
                        }
                    };
                }}
              />
              <AttendanceModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                staffID={staffId}
                teacher={name}
                courseID={courseID}
                startDate={startDate}
                endDate={endDate}
              />
            </>
          }
        </>
      );
};

export default StaffDashboard;