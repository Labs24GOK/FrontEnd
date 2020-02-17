import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createNewStudent, getDropDown, getStudentTable } from '../../../../actions';
import { Spin } from 'antd';
import moment from 'moment';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import '../mainStyle/mainTable.scss';

import { FormWrap, Input, Button, Div, FormSet, ButtonDiv, CancelButton, AddButton, Label} from '../mainStyle/styledComponent';

const StudentRegistrationForm = (props) => {
  console.log("STUDENT REGISTRATION FORM PROPS", props)
  const [student, setStudent] = useState({
    cpr: '',
    // registration_date: moment(new Date()).format("YYYY-MM-DD"),
    first_name: '',
    additional_names: '',
    gender: '',
    birthdate: '',
    school_grade_id: '',
    school_name: '',
    // grade_updated: moment(new Date()).format("YYYY-MM-DD"),
    home_telephone: '',
    mobile_telephone: '',
    block_code: '',
    road: '',
    building: '',
    flat: '',
    email: '',
    notes: '',
    preferred_contact_type_id: '',
    no_call: false,
    delinquent: false,
    expelled: false,
    location_id: '',
    family_id: 1
  });


  useEffect(() => {
    props.getDropDown();
  }, [])





  // set arrays of foreign key values to use in the dropdown (except 'gender' array it's not a foreign key)
  const genderArr = ['F', 'M'];

  // handle required fields (make them all required for now)
  const [errorBorderCpr, setErrorBorderCpr] = useState('transparent'); //error #C73642
  const [errorBorderFirstName, setErrorBorderFirstName] = useState('transparent'); //error #C73642
  const [errorBorderAdditionalNames, setErrorBorderAdditionalNames] = useState('transparent'); //error #C73642
  const [errorBorderGender, setErrorBorderGender] = useState('transparent'); //error #C73642
  const [errorBorderBirthdate, setErrorBorderBirthdate] = useState('transparent'); //error #C73642
  const [errorBorderSchoolGrade, setErrorBorderSchoolGrade] = useState('transparent'); //error #C73642
  const [errorBorderSchoolName, setErrorBorderSchoolName] = useState('transparent'); //error #C73642
  const [errorBorderHomeTelephone, setErrorBorderHomeTelephone] = useState('transparent'); //error #C73642
  const [errorBorderMobileTelephone, setErrorBorderMobileTelephone] = useState('transparent'); //error #C73642
  const [errorBorderBlock, setErrorBorderBlock] = useState('transparent'); //error #C73642
  const [errorBorderRoad, setErrorBorderRoad] = useState('transparent'); //error #C73642
  const [errorBorderBuilding, setErrorBorderBuilding] = useState('transparent'); //error #C73642
  const [errorBorderFlat, setErrorBorderFlat] = useState('transparent'); //error #C73642
  const [errorBorderEmail, setErrorBorderEmail] = useState('transparent'); //error #C73642
  const [errorBorderNotes, setErrorBorderNotes] = useState('transparent'); //error #C73642
  const [errorBorderContactType, setErrorBorderContactType] = useState('transparent'); //error #C73642
  const [errorBorderLocation, setErrorBorderLocation] = useState('transparent'); //error #C73642




  function handleChange(event) {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    })
  }


  function handleSubmit(event) {
    event.preventDefault();

    // check for required fields
    if (student.cpr === '' || student.firstName === '' || 
        student.additionalNames === '' || student.gender === '' ||
        student.birthdate === '' || student.school_grade_id === '' || 
        student.schoolName === '' || student.homeTelephone === '' ||
        student.mobileTelephone === '' || student.block === '' || 
        student.road === '' || student.building === '' ||
        student.flat === '' || student.email === '' || 
        student.notes === '' || student.contactTypeId === '' ||
        student.locationId === '') 
      { 
        // highlight all that were missed
        if (student.cpr === '') {
          setErrorBorderCpr('#ef6570');
        } 
        if (student.firstName === '') {
          setErrorBorderFirstName('#ef6570');
        } 
        if (student.additionalNames === '') {
          setErrorBorderAdditionalNames('#ef6570');
        }
        if (student.gender === '') {
          setErrorBorderGender('#ef6570');
        }
        if (student.birthdate === '') {
          setErrorBorderBirthdate('#ef6570');
        }
        if (student.school_grade_id === '') {
          setErrorBorderSchoolGrade('#ef6570');
        }
        if (student.schoolName === '') {
          setErrorBorderSchoolName('#ef6570');
        }
        if (student.homeTelephone === '') {
          setErrorBorderHomeTelephone('#ef6570');
        }
        if (student.mobileTelephone === '') {
          setErrorBorderMobileTelephone('#ef6570');
        }
        if (student.block === '') {
          setErrorBorderBlock('#ef6570');
        }
        if (student.road === '') {
          setErrorBorderRoad('#ef6570');
        }
        if (student.building === '') {
          setErrorBorderBuilding('#ef6570');
        }
        if (student.flat === '') {
          setErrorBorderFlat('#ef6570');
        }
        if (student.email === '') {
          setErrorBorderEmail('#ef6570');
        }
        if (student.notes === '') {
          setErrorBorderNotes('#ef6570');
        }
        if (student.contactTypeId === '') {
          setErrorBorderContactType('#ef6570');
        }
        if (student.locationId === '') {
          setErrorBorderLocation('#ef6570');
        }

    } else {
    console.log("Student request body", student)
    // const birthdateDate = moment(student.birthdate).toDate();
    // const birthdateISO = birthdateDate.toISOString()
    props.createNewStudent(student)
    // if(props.createNewStudentSuccessMessage === 'Student has been successfuly added')
    // setTimeout(()=>{
    //   props.getStudentTable()
    // },1000)

    props.setForm(false)

  }
}

  const handleCancel = e => {
    e.preventDefault();
    props.setForm(false)
  }
  // {if (props.createNewStudentIsLoading) {
  //   return <Spin style={{marginTop: '90px'}}size="large" />
  // } else {

  return (
    <FormWrap onSubmit={handleSubmit}>
      <FormSet>
        <Div>
          <div>
            <Label>CPR</Label>
            <div style={{ border: `1px solid ${errorBorderCpr}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="cpr"
                value={student.cpr}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label>First Name</Label>
            <div style={{ border: `1px solid ${errorBorderFirstName}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="first_name"
                value={student.first_name}
                onChange={handleChange} />
            </div>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <Label>Additional names</Label>
            <div style={{ border: `1px solid ${errorBorderAdditionalNames}`, borderRadius: '3px' }}>
              <Input
                style={{ width: '100%' }}
                type="text"
                name="additional_names"
                value={student.additional_names}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label>Gender</Label>
            <div style={{ border: `1px solid ${errorBorderGender}`, borderRadius: '3px' }}>
              <Dropdown
                value={student.gender}
                onChange={(e) => setStudent({ ...student, gender: e.value })}
                controlClassName='myControlClassName'
                options={genderArr}
                className='dropdown'
              />
            </div>
          </div>
          <div>
            <Label>Email</Label>
            <div style={{ border: `1px solid ${errorBorderEmail}`, borderRadius: '3px' }}>
              <Input
                type="email"
                name="email"
                value={student.email}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label>School Name</Label>
            <div style={{ border: `1px solid ${errorBorderSchoolName}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="school_name"
                value={student.school_name}
                onChange={handleChange} />
            </div>
          </div>
          <div >
            <Label>Birth date</Label>
            <div style={{ border: `1px solid ${errorBorderBirthdate}`, borderRadius: '3px' }}>
              <Input
                type="date"
                name="birthdate"
                value={student.birthdate}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label>Location</Label>
            <div style={{ border: `1px solid ${errorBorderLocation}`, borderRadius: '3px' }}>
              <Dropdown
                value={student.location_id}
                onChange={(e) => setStudent({ ...student, location_id: e })}
                controlClassName='myControlClassName'
                options={props.locationsTable}
                className='dropdown' />
            </div>
          </div>
          <div>
            <Label>Home Telephone</Label>
            <div style={{ border: `1px solid ${errorBorderHomeTelephone}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="home_telephone"
                value={student.home_telephone}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label>Mobile Telephone</Label>
            <div style={{ border: `1px solid ${errorBorderMobileTelephone}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="mobile_telephone"
                value={student.mobile_telephone}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label>Preferred Contact Method</Label>
            <div style={{ border: `1px solid ${errorBorderContactType}`, borderRadius: '3px' }}>
              <Dropdown
                onChange={(e) => setStudent({ ...student, preferred_contact_type_id: e })}
                value={student.preferred_contact_type_id}
                controlClassName='myControlClassName'
                options={props.contactTypesTable}
                className='dropdown'
                 />
            </div>
          </div>
          <div>
            <Label>Block</Label>
            <div style={{ border: `1px solid ${errorBorderBlock}`, borderRadius: '3px' }}>
              <Dropdown
                onChange={(e) => { setStudent({ ...student, block_code: e }) }}
                controlClassName='myControlClassName'
                options={props.blocksTable}
                value={student.block_code} 
                className='dropdown'
                />
            </div>
          </div>
          <div>
            <Label>Road</Label>
            <div style={{ border: `1px solid ${errorBorderRoad}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="road"
                value={student.road}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label>Building</Label>
            <div style={{ border: `1px solid ${errorBorderBuilding}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="building"
                value={student.building}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label>Flat</Label>
            <div style={{ border: `1px solid ${errorBorderFlat}`, borderRadius: '3px' }}>
              <Input
                type="text"
                name="flat"
                value={student.flat}
                onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label>School Grade</Label>
            <div style={{ border: `1px solid ${errorBorderSchoolGrade}`, borderRadius: '3px' }}>
              <Dropdown
                onChange={(e) => { setStudent({...student, school_grade_id: e }) }}
                value={student.school_grade_id}
                controlClassName='myControlClassName'
                className='dropdownRoot'
                options={props.schoolGradeTable}
                className='dropdown' 
                />
            </div>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <Label>Notes</Label>
            <div style={{ border: `1px solid ${errorBorderNotes}`, borderRadius: '3px' }}>
              <textarea
                style={{
                  width: '100%', height: '80px', outline: 'none',
                  border: '1px solid transparent', borderRadius: '3px'
                }}
                type="text"
                name="notes"
                value={student.notes}
                onChange={handleChange} />
            </div>
          </div>
        </Div>
      </FormSet>
      <ButtonDiv >
        <CancelButton onClick={handleCancel}>
          Cancel
            </CancelButton>
        <AddButton type="submit">
          Add student
            </AddButton>
      </ButtonDiv>
    </FormWrap>
  )
}



const mapStateToProps = state => {
  return {
    createNewStudentIsLoading: state.studentTableReducer.createNewStudentIsLoading,
    schoolGradeTable: state.studentTableReducer.schoolGradeTable,
    blocksTable: state.studentTableReducer.blocksTable,
    contactTypesTable: state.studentTableReducer.contactTypesTable,
    locationsTable: state.studentTableReducer.locationsTable,
    createNewStudentSuccessMessage: state.studentTableReducer.createNewStudentSuccessMessage
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createNewStudent, getDropDown, getStudentTable }
  )(StudentRegistrationForm)
);