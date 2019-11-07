import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudentTable } from '../../../../../actions';
import { Table } from 'semantic-ui-react';

const StudentCoursesTab = props => {
  return (
    <>
      <Table selectable singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Term</Table.HeaderCell>
            <Table.HeaderCell>Days</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Group</Table.HeaderCell>
            <Table.HeaderCell>Level</Table.HeaderCell>
            <Table.HeaderCell>Section</Table.HeaderCell>
            <Table.HeaderCell>Subsection</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            props.studentList.map(each => {
              return (
                <Table.Row>
                  <Table.Cell>{each.id}</Table.Cell>
                  <Table.Cell>{each.cpr}</Table.Cell>
                  <Table.Cell>{each.first_name}</Table.Cell>
                  <Table.Cell>{each.additional_names}</Table.Cell>
                  <Table.Cell>{each.gender}</Table.Cell>
                  <Table.Cell>{each.mobile_telephone}</Table.Cell>
                  <Table.Cell>{each.id}</Table.Cell>
                  <Table.Cell>Completed</Table.Cell>
                </Table.Row>
                )
            })
          }
        </Table.Body>
      </Table>
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
  )(StudentCoursesTab)
)