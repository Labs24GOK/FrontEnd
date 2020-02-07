import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Icon} from 'semantic-ui-react'
import { editStudentById, editStudentDropDown, toggleEditComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, Div, FormSet, ButtonDiv, CancelButton, SaveButton, Label} from '../../mainStyle/styledComponent';

const StudentForm = (props) => {
    console.log("STUDENT FORM PROPS", props)
   
    const { studentID } = props;
    
    let birthdate = new Date(props.studentById.birthdate).toISOString().split("T")[0];
    let grade_updated = new Date(props.studentById.grade_updated).toISOString().split("T")[0];
    
    // console.log("BIRTHDATE IN EDIT STUDENT FORM", birthdate)

    const [state, setState] = useState({
        cpr: props.studentById.cpr,
        first_name: props.studentById.first_name,
        additional_names: props.studentById.additional_names,
        gender: props.studentById.gender,
        birthdate: birthdate,
        school_grade_id: props.studentById.school_grade_id,
        school_name: props.studentById.school_name,
        home_telephone: props.studentById.home_telephone,
        mobile_telephone: props.studentById.mobile_telephone,
        block_code: props.studentById.block_code,
        road: props.studentById.road,
        flat: props.studentById.flat,
        building: props.studentById.building,
        email: props.studentById.email,
        notes: props.studentById.notes,
        preferred_contact_type_id: props.studentById.preferred_contact_type_id,
        location_id: props.studentById.location_id,
        family_id: props.studentById.family_id,
        no_call: props.studentById.no_call,
        delinquent: props.studentById.delinquent,
        expelled: props.studentById.expelled,
        grade_updated: grade_updated,
    });

    useEffect(() => {
        props.editStudentDropDown();
      }, [])

    function handleChange(event) {
        setState({
          ...state,
          [event.target.name]: event.target.value
        })
      }

    const handleSubmit = e => {
        console.log("THIS IS STATE:", state)
        e.preventDefault();
        props.editStudentById(studentID, state)
        }
    

    const handleCancel = e => {
        props.toggleEditComponent('false', 'false');
    }

    const genderArr = ['F', 'M']

    let delinquentNum = 0;
    if (props.studentById.delinquent === false){
      delinquentNum = 1;
    }

    let expelledNum = 0;
    if (props.studentById.expelled === false){
      expelledNum = 1;
    }

    let no_callNum = 0;
    if (props.studentById.expelled === false){
      expelledNum = 1;
    }

      const delinquent = [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
      ];
      const expelled = [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
      ];
      const no_call = [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
      ];
    
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
                        <Label>First Name</Label>
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
                        <Label>Additional Names</Label>
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
                                    placeholder='Birthdate'
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
                                onChange={(e) => setState({ ...state, location_id: e.value })}
                                value={props.studentById.location}
                                options={props.locationsTable}
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
                        <Label>Preferred Contact Method</Label>
                        <div>
                            <Dropdown
                                controlClassName='myControlClassName'
                                className='dropdown'
                                onChange= {(e) => { setState({ ...state, preferred_contact_type_id: e.value }) }}
                                value={props.studentById.preferred_contact_type}
                                options={props.contactTypesTable}
                            />
                        </div>
                    </div>
                    <div>
                        <Label>No Call</Label>
                            <div>
                                <Dropdown
                                   controlClassName="myControlClassName"
                                   className="dropdown"
                                   name='no_call'
                                   onChange={e => setState({ ...state, no_call: e.value })}
                                   value={no_call[no_callNum].label}
                                   options={no_call}
                                />
                            </div>
                        </div>
                    <div>
                        <Label>Block Code</Label>
                        <div>
                            <Dropdown 
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={props.blocksTable}
                            onChange={(e) => setState({ ...state, block_code: e.value })}
                            value={`${state.block_code}`}
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
                        <Label>School Grade</Label>
                        <div>
                            <Dropdown
                            controlClassName='myControlClassName'
                            className='dropdown'
                            onChange={(e) => setState({ ...state, school_grade_id: e.value })}
                            options={props.schoolGradeTable}
                            value={props.studentById.school_grade}
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
                        {/* <div>
                        <Label>Registration Date</Label>
                            <div>
                                <Input
                                    type='date'
                                    name='registration_date'
                                    placeholder='Registration Date'
                                    onChange={handleChange}
                                    value={state.registration_date}
                                />
                            </div>
                        </div> */}
                        <div>
                            <Label>Delinquent</Label>
                            <div>
                                <Dropdown
                                    controlClassName="myControlClassName"
                                    className="dropdown"
                                    name='delinquent'
                                    onChange={e => setState({ ...state, delinquent: e.value })}
                                    value={delinquent[delinquentNum].label}
                                    options={delinquent}
                                />
                            </div>
                        </div>
                        <div>
                            <Label>Expelled</Label>
                            <div>
                            <Dropdown
                                    controlClassName="myControlClassName"
                                    className="dropdown"
                                    name='expelled'
                                    onChange={e => setState({ ...state, expelled: e.value })}
                                    value={expelled[expelledNum].label}
                                    options={expelled}
                                />
                            </div>
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
        schoolGradeTable: state.studentByIdReducer.schoolGradeTable,
        blocksTable: state.studentByIdReducer.blocksTable,
        contactTypesTable: state.studentByIdReducer.contactTypesTable,
        locationsTable: state.studentByIdReducer.locationsTable
    };
};


export default withRouter(
    connect(
        mapStateToProps,
        { editStudentById, toggleEditComponent, editStudentDropDown }
    )(StudentForm)
)