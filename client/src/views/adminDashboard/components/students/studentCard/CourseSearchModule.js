import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCourseTable } from '../../../../../actions';
import { Table, Button, Modal, Spin, Input, Icon,  } from 'antd';

import '../../students/studentCard/studentTable.scss'

const CourseSearchModule = props => {

    useEffect(() => {
        props.getCourseTable();
      }, []);

    const [course, setCourse] = useState({course: []})
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
  
    const handleReset = clearFilters => {
      clearFilters();
      setSearchText("");
    };

    function getColumnSearchProps(dataIndex) {
      return {
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters
        }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => { searchInput = node;}}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: "block" }}
            />
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button
              onClick={() => handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon
            type="search"
            style={{ color: filtered ? "#1890ff" : undefined }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => searchInput.select());
          }
        }
      };
    }

    let searchInput = null;

    const tableColumns = [
        {
          title: 'Course ID',
          dataIndex: 'course_id',
          key: 'course_id',
        },
        {
          title: 'Term',
          dataIndex: 'term',
          key: 'term',
          ...getColumnSearchProps("term")
        },
        {
          title: 'Section',
          dataIndex: 'section',
          key: 'section',
          ...getColumnSearchProps("section")
        },
        {
          title: 'Level',
          dataIndex: 'level',
          key: 'level',
          ...getColumnSearchProps("level")
        },
        {
          title: 'Course Type',
          dataIndex: 'course_type',
          key: 5,
        },
        {
          title: 'Group Type',
          dataIndex: 'group_type',
          key: 6,
        },
        {
          title: 'School Grade',
          dataIndex: 'school_grade',
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
        setTimeout(() => {
            props.setModalVisible({ loading: false, visible: false });
        }, 1000);
    };

    const handleCancel = () => {
        props.setModalVisible({ visible: false });
    };

    const courseData = props.courseList.sort((a, b) => {
        return b.id - a.id;
      });

     const rowSelection = {
        type: 'radio',
        onChange: (courseData) => {
            const courseNew = courseData.map(each => {
                console.log(courseData)
            })
            
        },
      };

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
                            pagination={true} 
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