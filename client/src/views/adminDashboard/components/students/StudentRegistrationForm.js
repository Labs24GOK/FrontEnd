import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCaretDown, faCalendar, faTimes } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './StudentTable.css';
import Calendar from 'react-calendar';
// import Calendar from 'react-calendar/dist/entry.nostyle';
import { Icon } from 'semantic-ui-react';

const FormWrap = styled.form`
  // background: #EDEEEF;
  border: 0px transparant;
  border-radius: 3px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease;
`

const Input = styled.input`
  outline: none;
  border-radius: 3px;
  border: 1px solid transparent;
  background: white;
  width: 100%;
  height: 26px;
`

const Button = styled.button`
  width: 120px;
  height: 25px;
  border-radius: 3px;
  margin: 10px;
  background: #EDEEEF;
  text-align: left;
`

const DropdownContent =  styled.div`
  display: block;
  position: absolute;
  width: 40px;
  background: red;
  z-index: 1;
`

function StudentRegistrationForm({ handleCancelButtonOnForm }) {
  const [student, setStudent] = useState({cpr: '', registrationDate: '', firstName: '', additionalNames: '', 
                                          gender: '', birthdate: '', schoolGradeId: '', schoolName: '', 
                                          gradeUpdated: '', homeTelephone: '', mobileTelephone: '', 
                                          block: '', road: '', building: '', flat: '', email: '', 
                                          notes: '', contactTypeId: '', noCall: false, delinquent: false,
                                          expelled: false, locationId: ''});

  const [gender, setGender] = useState(['select', 'F', 'M']);
  const [location, setLocation] = useState(['select', 'location 1', 'location 2']);
  const [contactMethod, setContactMethod] = useState(['select', 'contact1', 'contact2']);
  const [schoolGrade, setSchoolGrade] = useState(['select', 'grade1', 'grade2']);

  const [date, setDate] = useState(new Date());
  const [display, setDisplay] = useState('none');
  const [icon, setIcon] = useState("calendar alternate outline");

  useEffect(() => {

  })


  function handleChange(event) {
    if (event.target.name === 'noCall' || event.target.name === 'delinquent' || event.target.name === 'expelled') {
      // important: event.target.value for checkbox should have !! in front for it to work
      setStudent({...student, [event.target.name]: !!event.target.value})
    } else {
      setStudent({ ...student, [event.target.name]: event.target.value })
    }
  }                                        

  function handleSubmit(event) {
    event.preventDefault();
    console.log('STUDENT: ', student)
  }

  function handleCancel(event) {
    event.preventDefault();
    handleCancelButtonOnForm();
  }

  function displayCalendar() {
    if (display === 'none') {
      setDisplay('inline');
    } else {
      setDisplay('none');
    }
  }

  function calendarInput(date) {
    // console.log('DATE: ', {date}, new Date())
    console.log('DATE: ',  new Date(date))
    setStudent({...student, registrationDate: date})
    setDisplay('none');
  }

  function handleGenderDropdown(e) {
    console.log('Gender click ', e)
  }
  
  function handleLocationDropdown(e) {

  }

  function handleContactMethodDropdown(e) {

  }

  function handleSchoolGradeDropdown(e) {

  }

  return (
    <FormWrap onSubmit={handleSubmit} style={{margin: '30px 10px 20px 10px'}}>
      <fieldset style={{border: '1px solid transparent', margin: '10px 5px 0px 5px',  background: '#EDEEEF'}}>
        <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr',gridGap: '15px', margin: '10px'}}>
          <div >
            <label>CPR</label>
            <div>
              <Input
                type="text"
                name="cpr"
                value={student.cpr}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>First Name</label>
            <div>
              <Input
                type="text"
                name="firstName"
                value={student.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{gridColumn: 'span 2'}}>
            <label>Additional names</label>
            <div>
              <Input style={{width: '100%'}}
                type="text"
                name="additionalNames"
                value={student.additionalNames}
                onChange={handleChange}
              />
            </div>
          </div>
        <div>
          <label>Gender</label>
          <div>
            {/* <Input
              type="text"
              name="gender"
              value={student.gender}
              onChange={handleChange}
            /> */}
            {/* <FontAwesomeIcon onClick={handleGenderDropdown} icon={faCaretDown} style={{width: '20px', height: '20px', position: 'relative', marginLeft: '-25px', marginTop: '1px', color: '#afb2b5'}}/> */}
            <Dropdown onChange={handleGenderDropdown} controlClassName='myControlClassName' className='dropdownRoot' options={[<Calendar />]}   
            placeholder='' value={gender[0]}
            />
            {/* <DropdownContent>
              <p>F</p>
              <p>M</p>
            </DropdownContent> */}
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div >
          <label>Birth date</label>
          <div >
          <Input
            type="text"
            name="birthdate"
            value={student.birthdate}
            onChange={handleChange}
          />
          <FontAwesomeIcon  icon={faCalendar} style={{width: '15px', height: '15px', position: 'relative', marginLeft: '-22px', marginTop: '4px', color: '#737577'}}/>
          {/* <Icon style={{color: 'red',width: '15px', height: '15px', position: 'relative', marginLeft: '-22px', marginTop: '4px', color: '#737577'}}/> */}
          {/* <div style={{width: '200px', position: 'relative'}}><Calendar style={{width: '100%',zIndex: '5', overflow: 'scroll'}}/></div> */}
          </div>
        </div>
        <div style={{position: 'relative'}}>
          <label>Registration date</label>
          <div style={{position: 'absolute', width: '100%'}}>
          <Input
            type="text"
            name="registrationDate"
            value={student.registrationDate}
            onChange={handleChange}
          />
          <FontAwesomeIcon onClick={displayCalendar} icon={faCalendar} style={{width: '15px', height: '15px', position: 'relative', marginLeft: '-22px', marginTop: '4px', color: '#737577'}}/>
          <div style={{width: '200px', display: `${display}`}}>
              <Calendar style={{width: '100%',zIndex: '5', overflow: 'scroll', position: 'absolute'}} 
              value={date}
              onChange={calendarInput}
              />
          </div>
          </div>
        </div>
        <div>
          <label>Location</label>
          <div>
          {/* <Input
            type="text"
            name="locationId"
            value={student.locationId}
            onChange={handleChange}
          /> */}
          {/* <FontAwesomeIcon  icon={faCaretDown} style={{width: '20px', height: '20px', position: 'relative', marginLeft: '-25px', marginTop: '1px', color: '#afb2b5'}}/> */}
          <Dropdown value={location[0]} controlClassName='myControlClassName' className='dropdownRoot' options={location}   
            placeholder='' 
            />
          </div>
        </div>
        <div>
          <label>Home Telephone</label>
          <div>
          <Input
            type="text"
            name="homeTelephone"
            value={student.homeTelephone}
            onChange={handleChange}
          />
          </div>
        </div>
        <div>
          <label>Mobile Telephone</label>
          <div>
          <Input
            type="text"
            name="mobileTelephone"
            value={student.mobileTelephone}
            onChange={handleChange}
          />
          </div>
        </div>
        <div>
          <label>Preferred contact method</label>
          <div>
          {/* <Input
            type="text"
            name="contactTypeId"
            value={student.contactTypeId}
            onChange={handleChange}
          />
          <FontAwesomeIcon  icon={faCaretDown} style={{width: '20px', height: '20px', position: 'relative', marginLeft: '-25px', marginTop: '1px', color: '#afb2b5'}}/> */}
          <Dropdown value={contactMethod[0]} controlClassName='myControlClassName' className='dropdownRoot' options={contactMethod}   
            placeholder='' 
            />
          </div>
        </div>
        <div>
          <label>Block</label>
          <div>
          <Input
            type="text"
            name="block"
            value={student.block}
            onChange={handleChange}
          />
          </div>
        </div>
        <div>
          <label>Road</label>
          <div>
          <Input
            type="text"
            name="road"
            value={student.road}
            onChange={handleChange}
          />
          </div>
        </div>
        <div>
          <label>Building</label>
          <div>
          <Input
            type="text"
            name="building"
            value={student.building}
            onChange={handleChange}
          />
          </div>
        </div>
        <div>
          <label>Flat</label>
          <div>
          <Input
            type="text"
            name="flat"
            value={student.flat}
            onChange={handleChange}
          />
          </div>
        </div>
        <div>
          <label>School grade</label>
          <div>
          {/* <Input
            type="text"
            name="schoolGradeId"
            value={student.schoolGradeId}
            onChange={handleChange}
          />
          <FontAwesomeIcon  icon={faCaretDown} style={{width: '20px', height: '20px', position: 'relative', marginLeft: '-25px', marginTop: '1px', color: '#afb2b5'}}/> */}
          <Dropdown value={schoolGrade[0]} controlClassName='myControlClassName' className='dropdownRoot' options={schoolGrade}   
            placeholder='' 
            />
          </div>
        </div>
        <div>
          <label>School Name</label>
          <div>
          <Input
            type="text"
            name="schoolName"
            value={student.schoolName}
            onChange={handleChange}
          />
          </div>
        </div>
        <div style={{gridColumn: 'span 2', display: 'flex'}}>
          <div style={{marginRight: '30px'}}>
            <label>No call</label>
            <div>
            <Input 
              type="checkbox"
              name="noCall"
              onChange={handleChange}
            />
            </div>
          </div>
          <div style={{marginRight: '30px'}}>
            <label>Delinquent</label>
            <div>
            <Input 
              type="checkbox"
              name="delinquent"
              onChange={handleChange}
            />
            </div>
          </div>
          <div>
            <label>Expelled</label>
            <div>
            <Input 
              type="checkbox"
              name="expelled"
              onChange={handleChange}
            />
            </div>
            </div>
        </div>
        <div style={{gridColumn: 'span 4'}}>
          <label>Notes</label>
          <div>
          <textarea style={{width: '100%', height: '80px', outline: 'none', border: '1px solid transparent', borderRadius: '3px'}}
            type="text"
            name="notes"
            value={student.notes}
            onChange={handleChange}
          />
          </div>
        </div>
        </div>
      </fieldset>
      <div style={{alignSelf: 'flex-end'}}>
        <Button onClick={handleCancel} style={{background: '#dbddde'}}>
          Cancel
        </Button>
        <Button type="submit">
          Save
        </Button>
      </div>
    </FormWrap>
  )
}

export default StudentRegistrationForm;