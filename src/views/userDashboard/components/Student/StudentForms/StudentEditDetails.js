import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    Typography,
    Row,
    Col,
    Layout,
  } from 'antd';
  import { connect } from 'react-redux';
  import { editStudentById } from '../../../../../actions/adminDashboardActions/studentByIdAction';
import { useHistory } from 'react-router-dom';
  import moment from 'moment-timezone';

  const StudentEditDetails = props => {
    const { Title } = Typography;
    const { Option } = Select;
    const { Content } = Layout;
    const dateFormat = 'DD/MM/YYYY';

    console.log("Edit: ", props.student);

    return (
        <h1>
            Edit Student!
        </h1>
    )

  }

export default StudentEditDetails;

