import React, { useState} from 'react';
import { connect } from 'react-redux'
import { Grid, Segment, Input, Icon, Form } from 'semantic-ui-react'
// import { addStaff, toggleAddStaffComponent } from '../../../../actions';
import { withRouter, Link } from 'react-router-dom';




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
    // e.preventDefault()
    props.toggleAddStaffComponent()
}


  return(
    <div className="ui segment active tab editForm">
    <Grid columns='equal'>
      
            {/* row 1 */}
            <Grid.Row>
                <Grid.Column>
                    <Segment>Staff ID</Segment>
                    <Input 
                        type='text'
                        name='id'
                        placeholder='Staff Id'
                        onChange={handleChange}
                        value={state.id}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>Name</Segment>
                    <Input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleChange}
                        value={state.name}
                    />
                </Grid.Column>


                <Grid.Column>
                    <Segment>Short Name</Segment>
                    <Input 
                        type='text'
                        name='short_name'
                        placeholder='Short Name'
                        onChange={handleChange}
                        value={state.short_name}
                    />
                </Grid.Column>
                <Grid.Column>
                <Segment>CPR</Segment>
                    <Input 
                        type='text'
                        name='cpr'
                        placeholder='CPR'
                        onChange={handleChange}
                        value={state.cpr}
                    />
                </Grid.Column>



                <Grid.Column >
                    <Segment.Group horizontal style={{ background: "#E0EBF0" }}>
                        <Segment.Inline onClick={formSubmit} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" ,margin: 0}}>
                        <Icon name="save" type='submit' style={{ color: "#26ABBD", cursor: "pointer" }} /> Save
                        </Segment.Inline>
                        <Segment.Inline onClick={cancelBtn} style={{ color: "#C73642", cursor: "pointer", width: "fit-content", "margin-left": "10px" }}>
                        <Icon name="cancel" style={{ color: "#C73642", cursor: "pointer" }}  /> Cancel
                        </Segment.Inline>
                        </Segment.Group>
                </Grid.Column>
                </Grid.Row>
                
                {/* row 2 */}
                <Grid.Row>
                <Grid.Column>
                    <Segment>Mobile Number</Segment>
                    <Input 
                        type='text' //use date for calendar
                        name='mobile_number'
                        placeholder='Mobile Number'
                        onChange={handleChange}
                        value={state.mobile_number}
                    />
                </Grid.Column>
    
                <Grid.Column>
                    <Segment>Accent</Segment>
                    <Input 
                        type='text'
                        name='accent'
                        placeholder='Accent'
                        onChange={handleChange}
                        value={state.accent}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>Gender</Segment>
                    <Input 
                        type='text'
                        name='gender'
                        placeholder='Gender'
                        onChange={handleChange}
                        value={state.gender}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>Birthdate</Segment>
                    <Input 
                        type='date'
                        name='birthdate'
                        placeholder='birthdate'
                        onChange={handleChange}
                        value={state.birthdate}
                    />
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>
                    <Segment>Teaching Rate</Segment>
                    <Input 
                        type='text'
                        name='teaching_rate'
                        placeholder='Teaching Rate'
                        onChange={handleChange}
                        value={state.teaching_rate}
                    />
                </Grid.Column>
              
              {/* row3 */}
                <Grid.Column>
                    <Segment>Admin</Segment>
                    <Input 
                        type='text'
                        name='admin'
                        placeholder='Admin'
                        onChange={handleChange}
                        value={state.admin}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>Active</Segment>
                    <Input 
                        type='text'
                        name='active'
                        placeholder='active'
                        onChange={handleChange}
                        value={state.active}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>User Id</Segment>
                    <Input 
                        type='text'
                        name='user_id'
                        placeholder='User Id'
                        onChange={handleChange}
                        value={state.user_id}
                    />
                </Grid.Column>
            </Grid.Row>
           </Grid>
    </div>
  )
}


const mapStateToProps = state => {
  return {
      isLoading: state.addStaffReducer.isLoading,
      staffList: state.addStaffReducer.staff,
      // isEditing: state.staffByIdReducer.isEditing,
  };
};



export default withRouter(
  connect(
    mapStateToProps,
    // { addStaff, toggleAddStaffComponent}
)(StaffRegistrationForm)
)



