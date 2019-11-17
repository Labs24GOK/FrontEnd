import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editStaffById, toggleStaffEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
// import { Grid, label, Input, Icon, Form } from 'semantic-ui-react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, Button, Div, FormSet} from '../../mainStyle/styledComponent';

const StaffForm = props => {
    const { staffID } = props;

    const [state, setState] = useState({
        id: props.staffById.id,
        name: props.staffById.name,
        short_name: props.staffById.short_name,
        cpr: props.staffById.cpr,
        mobile_number: props.staffById.mobile_number,
        gender: props.staffById.gender,
        accent: props.staffById.accent,
        gender: props.staffById.gender,
        mobile_number: props.staffById.mobile_number,
        teaching_rate: props.staffById.teaching_rate,
        admin: props.staffById.admin,
        active: props.staffById.active,
        user_id: props.staffById.user_id
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const formSubmit = e => {
        e.preventDefault();
        props.editStaffById(staffID, state)
    }

    const closeBtn = e => {
        e.preventDefault()
        props.toggleStaffEditComponent()
    }

    const TestArr = ['test', 'test']

    return(
        <FormWrap onSubmit={formSubmit}>
             <FormSet >
             <Div>
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
                    {/* <label.Group horizontal style={{ background: "#E0EBF0" }}>
                        <label.Inline onClick={formSubmit} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" ,margin: 0}}>
                        <Icon name="save" tyoe='submit' style={{ color: "#26ABBD", cursor: "pointer" }} /> Save
                        </label.Inline>
                        <label.Inline onClick={closeBtn} style={{ color: "#C73642", cursor: "pointer", width: "fit-content", "margin-left": "10px" }}>
                        <Icon name="cancel" style={{ color: "#C73642", cursor: "pointer" }}  /> Cancel
                        </label.Inline>
                        </label.Group> */}
                <div>
                    <label>Mobile Number</label>
                    <div>
                    <Input 
                        type='text' //use date for calendar
                        name='mobile_number'
                        placeholder='Mobile Number'
                        onChange={handleChange}
                        value={state.mobile_number}
                    />
                </div>
                </div>
    
                <div>
                    <label>Accent</label>
                    <div>
                    <Dropdown 
                        // type='text'
                        // name='accent'
                        // placeholder='Accent'
                        controlClassName='myControlClassName'
                        options={TestArr}
                        className='dropdown'
                        onChange={handleChange}
                        value={state.accent}
                    />
                    </div>
                    </div>

                    <div>
                    <label>Gender</label>
                    <div>
                    <Dropdown  
                        // type='text'
                        // name='gender'
                        // placeholder='Gender'
                        onChange={handleChange}
                        value={state.gender}
                        controlClassName='myControlClassName'
                        options={TestArr}
                        className='dropdown'
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
                </Div>
            </FormSet>
            <div style={{ alignSelf: 'flex-end' }}>
            <Button onClick={closeBtn} style={{ background: '#C73642', color:'#FFFFFF', width: '80px' }}>
                Cancel
            </Button>
            <Button type="submit"  style={{ background: '#E0EBF0', color: '#26ABBD' }}> 
                 Save
            </Button>
        </div>
        </FormWrap>
    )
}


export default withRouter(
    connect(
        null,
        {editStaffById, toggleStaffEditComponent}
    )(StaffForm)
)
