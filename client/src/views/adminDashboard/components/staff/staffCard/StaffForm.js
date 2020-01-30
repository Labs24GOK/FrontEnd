import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editStaffById, toggleStaffEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, Button, Div, FormSet, ButtonDiv, CancelButton, SaveButton, Label } from '../../mainStyle/styledComponent';

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

    return (
        <FormWrap onSubmit={formSubmit}>
            <FormSet >
                <Div>
                    <div>
                        <Label>Staff ID</Label>
                        <div>
                            <Input
                                type='text'
                                name='id'
                                placeholder='Staff Id'
                                // onChange={handleChange} can not change id
                                value={state.id}
                            />
                        </div>
                    </div>

                    <div>
                        <Label>Name</Label>
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
                        <Label>Short Name</Label>
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
                        <Label>CPR</Label>
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

                    <div>
                        <Label>Mobile Number</Label>
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
                        <Label>Accent</Label>
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
                        <Label>Gender</Label>
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
                        <Label>Birthdate</Label>
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
                        <Label>Teaching Rate</Label>
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
                        <Label>Admin</Label>
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
                        <Label>Active</Label>
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
                        <Label>User Id</Label>
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
            <ButtonDiv>
                <CancelButton onClick={closeBtn}>
                    Cancel
                </CancelButton>
                <SaveButton type="submit">
                    Save
                </SaveButton>
            </ButtonDiv>
        </FormWrap>
    )
}


export default withRouter(
    connect(
        null,
        { editStaffById, toggleStaffEditComponent }
    )(StaffForm)
)
