import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Grid, Segment, Input, Icon, Form } from 'semantic-ui-react'
// import { addStaff  } from '../../../../actions';
import { withRouter, Link } from 'react-router-dom';




const StaffRegistrationForm = (props) => {

  const [state, setState] = useState({
    id: '',
    name: '',
    short_name: '',
    cpr: '',
    mobile_number: '',
    gender: '',
    accent: '',
    gender: '',
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
  e.preventDefault();
  props.addStaff(state)
}

  return(
    <div>
      <Form onSubmit={formSubmit}>
            {/* <RowRight>
                <button>X</button>
            </RowRight> */}
            <Grid.Row>
                <Grid.Column>
                    <Segment>Staff ID</Segment>
                    <input 
                        type='text'
                        name='id'
                        placeholder='Staff Id'
                        onChange={handleChange}
                        value={state.id}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>Name</Segment>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleChange}
                        value={state.name}
                    />
                </Grid.Column>


                <Grid.Column>
                    <Segment>Short Name</Segment>
                    <input 
                        type='text'
                        name='short_name'
                        placeholder='Short Name'
                        onChange={handleChange}
                        value={state.short_name}
                    />
                </Grid.Column>
                <Grid.Column>
                <Segment>CPR</Segment>
                    <input 
                        type='text'
                        name='cpr'
                        placeholder='CPR'
                        onChange={handleChange}
                        value={state.cpr}
                    />
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column>
                    <Segment>Mobile Number</Segment>
                    <input 
                        type='text' //use date for calendar
                        name='mobile_number'
                        placeholder='Mobile Number'
                        onChange={handleChange}
                        value={state.mobile_number}
                    />
                </Grid.Column>
    
                <Grid.Column>
                    <Segment>Accent</Segment>
                    <input 
                        type='text'
                        name='accent'
                        placeholder='Accent'
                        onChange={handleChange}
                        value={state.accent}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>Gender</Segment>
                    <input 
                        type='text'
                        name='gender'
                        placeholder='Gender'
                        onChange={handleChange}
                        value={state.gender}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>Birthdate</Segment>
                    <input 
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
                    <input 
                        type='text'
                        name='teaching_rate'
                        placeholder='Teaching Rate'
                        onChange={handleChange}
                        value={state.teaching_rate}
                    />
                </Grid.Column>
              
                <Grid.Column>
                    <Segment>Admin</Segment>
                    <input 
                        type='text'
                        name='admin'
                        placeholder='Admin'
                        onChange={handleChange}
                        value={state.admin}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>Active</Segment>
                    <input 
                        type='text'
                        name='active'
                        placeholder='active'
                        onChange={handleChange}
                        value={state.active}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Segment>User Id</Segment>
                    <input 
                        type='text'
                        name='user_id'
                        placeholder='User Id'
                        onChange={handleChange}
                        value={state.user_id}
                    />
                </Grid.Column>
            </Grid.Row>

            {/* <RowRight> */}
                <button type='submit'>Save</button>
                <button type='button' onClick={ () => props.toggleStaffEditComponent()} >Cancel</button>
            {/* </RowRight> */}
            </Form>
    </div>
  )
}


const mapStateToProps = state => {
  console.log(state)
  return {
      isLoading: state.addStaffReducer.isLoading,
      staffList: state.addStaffReducer.staff,
      // isEditing: state.staffByIdReducer.isEditing,
  };
};



export default withRouter(
  connect(
    mapStateToProps,
    // { addStaff}
)(StaffRegistrationForm)
)



