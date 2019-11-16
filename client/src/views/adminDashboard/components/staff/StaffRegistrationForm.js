import React, { useState} from 'react';
import { connect } from 'react-redux'
import { Icon, Segment } from 'semantic-ui-react'
import { addStaff, toggleAddStaffComponent } from '../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { FormWrap, Input, Button} from '../mainStyle/styledComponent.js';


const StaffRegistrationForm = (props) => {
console.log ( 'staff registry props', props)

  const [state, setState] = useState({
    id: '',
    name: '',
    short_name: '',
    cpr: '',
    mobile_number: '',
    gender: '',
    accent: '',
    birthdate: '',
    mobile_number: '',
    teaching_rate: '',
    admin: '',
    active: '',
    user_id: ''
  })
//admin and active ar booleans that need to be added for post to work 
  


  const handleChange = e => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
}


const formSubmit = e => {
    console.log('state sent', state)
  e.preventDefault();
  props.addStaff(state)
}

const cancelBtn = e => {
    e.preventDefault()
    props.toggleAddStaffComponent()
}


  return(
    <FormWrap onSubmit={formSubmit} style={{ margin: '30px 10px 20px 10px' }}>
        <fieldset style={{ border: '1px solid transparent', margin: '10px 5px 0px 5px', background: '#E0EBF0' }}>
        <div style={{
          display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridGap: '15px', margin: '10px'
        }}>
            {/* row 1 */}
            <div>
                    <Segment>Staff ID</Segment>
                    <Input 
                        type='text'
                        name='id'
                        placeholder='Staff Id'
                        onChange={handleChange}
                        value={state.id}
                    />
                
            
                    <Segment>Name</Segment>
                    <Input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleChange}
                        value={state.name}
                    />
                


                <div style={{ gridColumn: 'span 2' }}>
                    <Segment>Short Name</Segment>
                    <Input 
                        type='text'
                        name='short_name'
                        placeholder='Short Name'
                        onChange={handleChange}
                        value={state.short_name}
                    />
                    </div>
            
                <Segment>CPR</Segment>
                    <Input 
                        type='text'
                        name='cpr'
                        placeholder='CPR'
                        onChange={handleChange}
                        value={state.cpr}
                    />
                



            
                    <Segment.Group horizontal style={{ background: "#E0EBF0" }}>
                        <Segment.Inline onClick={formSubmit} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" ,margin: 0}}>
                        <Icon name="save" type='submit' style={{ color: "#26ABBD", cursor: "pointer" }} /> Save
                        </Segment.Inline>
                        <Segment.Inline onClick={cancelBtn} style={{ color: "#C73642", cursor: "pointer", width: "fit-content", "margin-left": "10px" }}>
                        <Icon name="cancel" style={{ color: "#C73642", cursor: "pointer" }}  /> Cancel
                        </Segment.Inline>
                        </Segment.Group>
                
                </div>
                
                {/* row 2 */}
                <div>
            
                    <Segment>Mobile Number</Segment>
                    <Input 
                        type='text' //use date for calendar
                        name='mobile_number'
                        placeholder='Mobile Number'
                        onChange={handleChange}
                        value={state.mobile_number}
                    />
                
    
                    {/* needs to be dropdown */}
                    <Segment>Accent</Segment>
                    <Input
                        name='accent'
                        placeholder='Accent'
                        onChange={handleChange}
                        value={state.accent}
                        className='dropdown'
                        controlClassName='myControlClassName'
                    />
                
                    {/* needs to be dropdown */}
                    <Segment>Gender</Segment>
                    <Input
                        name='gender'
                        placeholder='Gender'
                        onChange={handleChange}
                        value={state.gender}
                        className='dropdown'
                        controlClassName='myControlClassName'
                    />
                
            
                    <Segment>Birthdate</Segment>
                    <Input 
                        type='date'
                        name='birthdate'
                        placeholder='birthdate'
                        onChange={handleChange}
                        value={state.birthdate}
                    />
                
                </div>
                <div>
            
                    <Segment>Teaching Rate</Segment>
                    <Input 
                        type='text'
                        name='teaching_rate'
                        placeholder='Teaching Rate'
                        onChange={handleChange}
                        value={state.teaching_rate}
                    />
                
              
              {/* row3 */}
            
                    <Segment>Admin</Segment>
                    <Input 
                        type='text'
                        name='admin'
                        placeholder='Admin'
                        onChange={handleChange}
                        value={state.admin}
                    />
                
            
                    <Segment>Active</Segment>
                    <Input 
                        type='text'
                        name='active'
                        placeholder='active'
                        onChange={handleChange}
                        value={state.active}
                    />
                
            
                    <Segment>User Id</Segment>
                    <Input 
                        type='text'
                        name='user_id'
                        placeholder='User Id'
                        onChange={handleChange}
                        value={state.user_id}
                    />
                
            </div>
                </div>
            </fieldset>
        </FormWrap>
  )
}


const mapStateToProps = state => {
  return {
      isLoading: state.addStaffReducer.isLoading,
      staffList: state.addStaffReducer.staff,
      isPosting: state.addStaffReducer.isPosting,
      isPosted: state.addStaffReducer.isPosted
  };
};



export default withRouter(
  connect(
    mapStateToProps,
    { addStaff, toggleAddStaffComponent}
)(StaffRegistrationForm)
)



