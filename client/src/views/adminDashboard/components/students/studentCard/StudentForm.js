import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Icon} from 'semantic-ui-react'
import { editStudentById, editStudentDropDown, toggleEditComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, Div, FormSet, ButtonDiv, CancelButton, SaveButton, Label} from '../../mainStyle/styledComponent';

const StudentForm = (props) => {

    const { studentID } = props;
    let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    let birthdate = new Date(props.studentById.birthdate).toISOString().split("T")[0];
    let registration_date = new Date(props.studentById.registration_date).toLocaleDateString('en-GB', options)

    const [state, setState] = useState({
        cpr: props.studentById.cpr,
        id: studentID,
        first_name: props.studentById.first_name,
        additional_names: props.studentById.additional_names,
        gender: props.studentById.gender,
        birthdate: birthdate,
        home_telephone: props.studentById.home_telephone,
        mobile_telephone: props.studentById.mobile_telephone,
        email: props.studentById.email,
        preferred_contact_type_id: props.studentById.preferred_contact_type_id,
        location_id: props.studentById.location_id,
        block_code: props.studentById.block_code,
        road: props.studentById.road,
        flat: props.studentById.flat,
        building: props.studentById.building,
        school_name: props.studentById.school_name,
        no_call: props.studentById.no_call,
        delinquent: props.studentById.delinquent,
        expelled: props.studentById.expelled,
        notes: props.studentById.notes,
        family_id: props.studentById.family_id,
        registration_date: registration_date,
        grade_updated: props.studentById.grade_updated,
        school_grade_id: props.studentById.school_grade_id
    });

    useEffect(() => {
        props.editStudentDropDown();
      }, [])
    
console.log('STUDENT', props)

    const [error, setError] = useState({
        first_name: false,
        additional_names: false
    })

    // const handleChange = (e, result) => {
    //     const {name, value}= result || e.target;
    //     if(e.target.value === ''){
    //         setError({
    //             ...error,   
    //             [name]: true
    //         })
    //     }
    //     if(value.length !== 0){
    //         setError(false)
    //     }
    //     setState({
    //         ...state,
    //         [name]: value
    //     })
    // }

    function handleChange(event) {
        setState({
          ...state,
          [event.target.name]: event.target.value
        })
      }


    const handleSubmit = e => {
        e.preventDefault();
        console.log("this is state:", state)
    // if(error) {
    //     props.toggleEditComponent('true', 'false')
    // } else {
    //     props.toggleEditComponent('false', 'true')
            props.editStudentById(studentID, state)
        }
    

    const handleCancel = e => {
        props.toggleEditComponent('false', 'false');
    }

    const genderArr = ['F', 'M']

    
    return (
            <FormWrap onSubmit={handleSubmit}>
                <FormSet>
                    <Div>
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
                            <Label>First name</Label>
                            <div>
                             <Input 
                                type='text'
                                name='first_name'
                                placeholder='First Name'
                                onChange={handleChange}
                                value={state.first_name}
                                />  
                         </div>
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                            <Label>Additional names</Label>
                            <div>
                                <Input
                                type='text'
                                name='additional_names'
                                placeholder='Additional Names'
                                onChange={handleChange}
                                value={state.additional_names}
                                style={{ width: '100%'}}
                                /> 
                            </div>
                        </div>
                        <div>
                            <Label>Gender</Label>
                            <div>
                                <Dropdown 
                                controlClassName='myControlClassName'
                                className='dropdown'
                                value={state.gender} 
                                onChange= {(e) => setState({ ...state, gender: e.value })}
                                options={genderArr} 
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Email</Label>
                            <div>
                                <Input
                                    type='text'
                                    name='email'
                                    placeholder='email'
                                    onChange={handleChange}
                                    value={state.email}
                                />
                            </div>
                        </div>
                            <div>
                                <Label>School Name</Label>
                                <div>
                                    <Input
                                        type='text'
                                        name='school_name'
                                        placeholder='School Name'
                                        onChange={handleChange}
                                        value={state.school_name}
                                    />
                                </div>
                            </div>
                            <div>
                                <Label>Birthdate</Label>
                                <div>
                                    <Input
                                        type='date'
                                        name='birthdate'
                                        placeholder='Gender'
                                        onChange={handleChange}
                                        value={state.birthdate}
                                    />
                                </div>
                            </div>
                            <div>
                                <Label>Location</Label>
                                <div>
                                    <Dropdown
                                        controlClassName='myControlClassName'
                                        className='dropdown'
                                        onChange={(e) => setState({ ...state, location_id: e })}
                                        value={state.location_id}
                                        options={props.dropDownList1}
                                    />
                                </div>
                            </div>
                        <div>
                            <Label>Home Phone</Label>
                            <div>
                                <Input
                                    type='text'
                                    name='home_telephone'
                                    placeholder='Home Telephone'
                                    onChange={handleChange}
                                    value={state.home_telephone}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Mobile</Label>
                            <div>
                                <Input
                                    type='text'
                                    name='mobile_telephone'
                                    placeholder='Mobile Telephone'
                                    onChange={handleChange}
                                    value={state.mobile_telephone}
                                    error={{content: 'Please enter mobile telephone.', pointing: 'above'}}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Contact Method</Label>
                            <div>
                                <Dropdown
                                    controlClassName='myControlClassName'
                                    className='dropdown'
                                    onChange= {(e) => setState({ ...state, preferred_contact_type_id: e })}
                                    value={state.preferred_contact_type_id}
                                    options={props.dropDownList2}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Block Code</Label>
                            <div>
                                <Dropdown 
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={props.dropDownList4}
                                onChange={(e) => setState({ ...state, block_code: e })}
                                value={state.block_code}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Road</Label>
                            <div>
                                <Input
                                    type='text'
                                    name='road'
                                    placeholder='road'
                                    onChange={handleChange}
                                    value={state.road}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Building</Label>
                            <div>
                                <Input
                                    type='text'
                                    name='building'
                                    placeholder='building'
                                    onChange={handleChange}
                                    value={state.building}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Flat</Label>
                            <div>
                                <Input
                                    type='text'
                                    name='flat'
                                    placeholder='flat'
                                    onChange={handleChange}
                                    value={state.flat}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Delinquent</Label>
                            <div>
                                <Input
                                    type='boolean'
                                    name='delinquent'
                                    placeholder='Delinquent'
                                    onChange={handleChange}
                                    value={state.delinquent}
                                />
                        </div>
                        </div>
                        <div>
                            <Label>School Grade ID</Label>
                            <div>
                                <Dropdown
                                controlClassName='myControlClassName'
                                className='dropdown'
                                onChange={handleChange}
                                onChange={(e) => setState({ ...state, school_grade_id: e })}
                                options={props.dropDownList3}
                                value={state.school_grade_id}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Grade Updated</Label>
                            <div>
                                <Input
                                    type='date'
                                    name='grade_updated'
                                    placeholder='Grade Updated'
                                    onChange={handleChange}
                                    value={state.grade_updated}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Registration Date</Label>
                            <div>
                                <Input
                                    type='text'
                                    name='registration_date'
                                    placeholder='Registration Date'
                                    value={registration_date}
                                />
                        </div>
                      </div>
                    
                    <div style={{ gridColumn: 'span 4' }}>
                        <Label>Notes</Label>
                        <div>
                            <textarea
                            style={{
                            width: '100%', height: '80px', outline: 'none',
                            border: '1px solid transparent', borderRadius: '3px'
                            }}
                            type='text'
                            name='notes'
                            placeholder='Notes'
                            onChange={handleChange}
                            value={state.notes}
                            />
                            </div>
                        </div>
                    </Div>
                </FormSet>
                    <ButtonDiv>
                        <CancelButton onClick={handleCancel} >
                            Cancel
                        </CancelButton>
                        <SaveButton type="submit" onClick={handleSubmit}> 
                            Save
                        </SaveButton>
                    </ButtonDiv>
            </FormWrap>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEdited: state.studentByIdReducer.isEdited,
        isEditing: state.studentByIdReducer.isEditing,
        error: state.studentByIdReducer.error,
        dropDownList1: state.studentByIdReducer.dropDownList1,
        dropDownList2: state.studentByIdReducer.dropDownList2,
        dropDownList3: state.studentByIdReducer.dropDownList3,
        dropDownList4: state.studentByIdReducer.dropDownList4
    };
};


export default withRouter(
    connect(
        mapStateToProps,
        { editStudentById, toggleEditComponent, editStudentDropDown }
    )(StudentForm)
)