import React, { useState} from 'react';
import { connect } from 'react-redux'
import { addStaff, toggleAddStaffComponent } from '../../../../actions';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, Button} from '../mainStyle/styledComponent.js';


const StaffRegistrationForm = (props) => {
console.log ( 'staff registry props', props)


const testArr = ['yep', 'yep']
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
                    <label>Staff ID</label>
                    <div>
                    <Input 
                        type='text'
                        name='id'
                        placeholder='Staff Id'
                        onChange={handleChange}
                        value={state.id}
                    />
                </div>
                </div>
                <div>
                    <label>Name</label>
                    <div>
                    <Input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleChange}
                        value={state.name}
                    />
                 </div>
                </div>

                <div>
                    <label>Short Name</label>
                    <div>
                    <Input 
                        type='text'
                        name='short_name'
                        placeholder='Short Name'
                        onChange={handleChange}
                        value={state.short_name}
                    />
                    </div>
                    </div>
            <div>
                <label>CPR</label>
                <div>
                    <Input 
                        type='text'
                        name='cpr'
                        placeholder='CPR'
                        onChange={handleChange}
                        value={state.cpr}
                    />
                </div>
                </div>
            
                
                {/* row 2 */}
                <div>
            
                    <label>Mobile Number</label>
                    <div>
                    <Input 
                        type='text' //use date for calendar
                        name='mobile_number'
                        placeholder='Mobile Number'
                        onChange={handleChange}
                        value={state.mobile_number}
                        options={testArr}
                    />
                </div>
                </div>
    
                    <div>
                    {/* needs to be dropdown */}
                    <label>Accent</label>
                    <div>
                    <Dropdown
                        value={state.accent}
                        onChange={(e) => setState({ ...state, accent: e })}
                        controlClassName='myControlClassName'
                        className='dropdown'
                        options={testArr}
                    />
                </div>
                </div>

                <div>
                    {/* needs to be dropdown */}
                    <label>Gender</label>
                    <div>
                    <Dropdown
                        value={state.gender}
                        onChange={(e) => setState({ ...state, gender: e })}
                        controlClassName='myControlClassName'
                        className='dropdown'
                        options={testArr}
                    />
                </div>
                </div>
            
                <div>
                    <label>Birthdate</label>
                    <div>
                    <Input 
                        type='date'
                        name='birthdate'
                        placeholder='birthdate'
                        onChange={handleChange}
                        value={state.birthdate}
                    />
                </div>
                </div>
                
            
                <div>
                    <label>Teaching Rate</label>
                    <div>
                    <Input 
                        type='text'
                        name='teaching_rate'
                        placeholder='Teaching Rate'
                        onChange={handleChange}
                        value={state.teaching_rate}
                    />
                </div>
                </div>
              {/* row3 */}
            
            <div>
                    <label>Admin</label>
                    <div>
                    <Input 
                        type='text'
                        name='admin'
                        placeholder='Admin'
                        onChange={handleChange}
                        value={state.admin}
                    />
                </div>
                </div>
            
                <div>
                    <label>Active</label>
                    <div>
                    <Input 
                        type='text'
                        name='active'
                        placeholder='active'
                        onChange={handleChange}
                        value={state.active}
                    />
                </div>
                </div>
            
                <div>
                    <label>User Id</label>
                    <div>
                    <Input 
                        type='text'
                        name='user_id'
                        placeholder='User Id'
                        onChange={handleChange}
                        value={state.user_id}
                    />
                    </div>
                </div>
            </div>
            </fieldset>
            <div style={{ alignSelf: 'flex-end' }}>
            <Button onClick={cancelBtn} style={{ background: '#C73642', width: '80px' }}>
                Cancel
            </Button>
            <Button type="submit"> 
                Add student
            </Button>
        </div>

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





















































