import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { getStudentTable } from '../../../../actions';
import { Table, Tag, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import StudentRegistrationForm from './StudentRegistrationForm';
import SearchStundentTable from './SearchStudentTable';
import 'antd/dist/antd.css';
import '../mainStyle/mainTable.scss';
import StudentCard from './studentCard/StudentCard';

const StudentTable = props => {
  const { push } = useHistory()
  const [form, setForm] = useState(false);

  useEffect(() => {
    props.getStudentTable();
  }, []);

  const handleCancelButtonOnForm = () => {
    setForm(false);
  };

  const handleAddButton = () => {
    setForm(!form);
  };

  const studentData = props.studentList.sort((a, b) => {
    return b.id - a.id;
  });
 
  
  // registration_date: "2020-06-01T07:00:00.000Z" (How a students registration date looks)
  const studentStatus = studentData.map(student => {
    const regDate = new Date(student.registration_date)
    const month = regDate.getMonth();
    const currentMonth = new Date().getMonth()
    console.log("current Month", currentMonth)
    console.log("reg Month", month)
    if(month <= currentMonth && !(month < currentMonth - 1)) {
      return {
        ...student,
        status: student.status ? [...student.status, 'new'] : ['new']
      }
    } else {
      return {
        ...student,
        status: []
      }
    }
  })

  const studentTableColumns = [
    {
      title: 'Student ID',
      dataIndex: 'student_id',
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
      key: 3,
    },
    {
      title: 'Additional Names',
      dataIndex: 'additional_names',
      key: 4,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: status => (
        <>
          {status.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'new') {
              color = 'geekblue';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 5,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 6,
    },
  ];

  return (
    <div>
      {console.log("student data", studentData)}
      {console.log("student data2", studentStatus)}
        <h2 style={{textAlign: "left", marginLeft: "1.3rem"}}>
          Student Table
        </h2>
      <div className='row-above'>
        <div>
          <SearchStundentTable />
        </div>
      </div>

      {form ? (
        <StudentRegistrationForm
          handleCancelButtonOnForm={handleCancelButtonOnForm}
          setForm={setForm}
        />
      ) : null}

      {props.isLoading ? (
        <Spin style={{ marginTop: '150px' }} size='large' />
      ) : (
        <Table
          className='rowHover'
          dataSource={studentStatus}
          columns={studentTableColumns}
          pagination={false}
          rowKey='id'
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                push(`/dashboard/students/${record.student_id}`)
              },
            };
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.studentTableReducer.isLoading,
    studentList: state.studentTableReducer.studentList,
    error: state.studentTableReducer.error,
  };
};

export default withRouter(
  connect(mapStateToProps, { getStudentTable })(StudentTable)
);
