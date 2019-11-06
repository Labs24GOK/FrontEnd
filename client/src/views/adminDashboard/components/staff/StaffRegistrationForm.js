import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Row, RowRight, Column4, H4, P} from '../../../../styles/styledComponents'
import { addStaff  } from '../../../../actions';
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
      <form onSubmit={formSubmit}>
            <RowRight>
                <button>X</button>
            </RowRight>
            <Row>
                <Column4>
                    <H4>Staff ID</H4>
                    <input 
                        type='text'
                        name='id'
                        placeholder='Staff Id'
                        onChange={handleChange}
                        value={state.id}
                    />
                </Column4>
                <Column4>
                    <H4>Name</H4>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleChange}
                        value={state.name}
                    />
                </Column4>


                <Column4>
                    <H4>Short Name</H4>
                    <input 
                        type='text'
                        name='short_name'
                        placeholder='Short Name'
                        onChange={handleChange}
                        value={state.short_name}
                    />
                </Column4>
                <Column4>
                <H4>CPR</H4>
                    <input 
                        type='text'
                        name='cpr'
                        placeholder='CPR'
                        onChange={handleChange}
                        value={state.cpr}
                    />
                </Column4>
                </Row>

                <Row>
                <Column4>
                    <H4>Mobile Number</H4>
                    <input 
                        type='text' //use date for calendar
                        name='mobile_number'
                        placeholder='Mobile Number'
                        onChange={handleChange}
                        value={state.mobile_number}
                    />
                </Column4>
    
                <Column4>
                    <H4>Accent</H4>
                    <input 
                        type='text'
                        name='accent'
                        placeholder='Accent'
                        onChange={handleChange}
                        value={state.accent}
                    />
                </Column4>
                <Column4>
                    <H4>Gender</H4>
                    <input 
                        type='text'
                        name='gender'
                        placeholder='Gender'
                        onChange={handleChange}
                        value={state.gender}
                    />
                </Column4>
                <Column4>
                    <H4>Birthdate</H4>
                    <input 
                        type='date'
                        name='birthdate'
                        placeholder='birthdate'
                        onChange={handleChange}
                        value={state.birthdate}
                    />
                </Column4>
                </Row>
                <Row>
                <Column4>
                    <H4>Teaching Rate</H4>
                    <input 
                        type='text'
                        name='teaching_rate'
                        placeholder='Teaching Rate'
                        onChange={handleChange}
                        value={state.teaching_rate}
                    />
                </Column4>
              
                <Column4>
                    <H4>Admin</H4>
                    <input 
                        type='text'
                        name='admin'
                        placeholder='Admin'
                        onChange={handleChange}
                        value={state.admin}
                    />
                </Column4>
                <Column4>
                    <H4>Active</H4>
                    <input 
                        type='text'
                        name='active'
                        placeholder='active'
                        onChange={handleChange}
                        value={state.active}
                    />
                </Column4>
                <Column4>
                    <H4>User Id</H4>
                    <input 
                        type='text'
                        name='user_id'
                        placeholder='User Id'
                        onChange={handleChange}
                        value={state.user_id}
                    />
                </Column4>
            </Row>

            <RowRight>
                <button type='submit'>Save</button>
                <button type='button' onClick={ () => props.toggleStaffEditComponent()} >Cancel</button>
            </RowRight>
            </form>
    </div>
  )
}


const mapStateToProps = state => {
  console.log(state)
  return {
      isLoading: state.addStaffReducer.isLoading,
      staffList: state.addStaffReducer.staff,
      // isEditing: state.staffByIdReducer.isEditting,
  };
};



export default withRouter(
  connect(
    mapStateToProps,
    { addStaff}
)(StaffRegistrationForm)
)



