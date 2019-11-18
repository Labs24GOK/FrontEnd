import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addStaff, toggleAddStaffComponent, getStaffTable } from '../../../../actions';
import { withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, Button, Div, FormSet} from '../mainStyle/styledComponent';


const StaffRegistrationForm = (props) => {

    const gender = ['M', 'F']
    const admin = [{ label: 'True', value: true }, { label: 'False', value: false }]
    const active = [{ label: 'True', value: true }, { label: 'False', value: false }]
    const [state, setState] = useState({
        id: props.availableID,
        name: '',
        short_name: '',
        cpr: '',
        mobile_number: '',
        gender: '',
        email: '',
        accent: '',
        birthdate: '',
        mobile_number: '',
        teaching_rate: '',
        admin: '',
        active: '',
        // user_id: '',
    })
    //admin and active ar booleans that need to be added for post to work 



    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }




    const formSubmit = e => {
        e.preventDefault();
        props.addStaff(state);
        props.getStaffTable();
        setTimeout(() => {
            props.setForm(false)
        }, 2000)
    }

    const cancelBtn = e => {
        e.preventDefault()
        props.setForm(false)
    }


  return(
    <FormWrap onSubmit={formSubmit}>
        <FormSet>
            <Div>
            {/* row 1 */}
                <div>
                    <label>Staff ID</label>
                    <div>
                    <Input 
                        type='text'
                        name='id'
                        placeholder= {`Next ID ${props.availableID}`}
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
                            />
                        </div>
                    </div>

                    <div>
                        {/* needs to be dropdown */}
                        <label>Accent</label>
                        <div>
                            <Input
                                type='text' //use date for calendar
                                name='accent'
                                placeholder='Accent'
                                onChange={handleChange}
                                value={state.accent}
                            />
                        </div>
                    </div>

                    <div>
                        {/* needs to be dropdown */}
                        <label>Gender</label>
                        <div>
                            <Dropdown
                                value={state.gender}
                                onChange={(e) => setState({ ...state, gender: e.value })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={gender}
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
                            <Dropdown
                                value={state.admin}
                                onChange={(e) => setState({ ...state, admin: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={admin}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Active</label>
                        <div>
                            <Dropdown
                                value={state.active}
                                onChange={(e) => setState({ ...state, active: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={active}
                            />
                        </div>
                    </div>

                    {/* <div>
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
                </div> */}
                    <div>

                        <label>Email</label>
                        <div>
                            <Input
                                type='email' //use date for calendar
                                name='email'
                                placeholder='Email'
                                onChange={handleChange}
                                value={state.email}
                            />
                        </div>
                    </div>
                </Div>
            </FormSet>
            <div style={{ alignSelf: 'flex-end' }}>
                <Button type="button" value="cancel" onClick={cancelBtn} style={{ background: '#C73642', width: '80px' }}>
                    Cancel
            </Button>
                <Button type="submit">
                    Add Staff
            </Button>
            </div>
            {/* <h3  onTimeout={props.isPosted}  timeout={3000}> Hey </h3> */}
        </FormWrap>

    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.staffTableReducer.isLoading,
        staffList: state.staffTableReducer.staff,
        isPosting: state.staffTableReducer.isPosting,
        isPosted: state.staffTableReducer.isPosted
    };
};



export default withRouter(
    connect(
        mapStateToProps,
        { addStaff, toggleAddStaffComponent, getStaffTable }
    )(StaffRegistrationForm)
)





















































