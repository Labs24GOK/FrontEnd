import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { editStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import './StudentForm.css'
import './StudentInformationTab.css'
import { Row, RowRight, Column4, H4, P} from '../../../../../styles/styledComponents'


//might need status 
const StudentForm = (props) => {
    const {studentID} = props;

    const [state, setState] = useState({
        first_name: props.studentById.first_name,
        additional_names: props.studentById.additional_names,
        gender: props.studentById.gender,
        birthdate: props.studentById.birthdate,
        home_telephone: props.studentById.home_telephone,
        mobile_telephone: props.studentById.mobile_telephone,
        email: props.studentById.email,
        preferred_contact_method: props.studentById.preferred_contact_method,
        location_id: props.studentById.location_id,
        registration_date: props.studentById.registration_date,
        block: props.studentById.block,
        road: props.studentById.road,
        flat: props.studentById.flat,
        building: props.studentById.building,
        no_call: props.studentById.no_call,
        delinquent_account: props.studentById.delinquent_account,
        expelled: props.studentById.expelled,
        notes: props.studentById.notes
    })

    const handleChange = e => {
        console.log('e', e)
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.editStudentById(studentID, state)
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <RowRight>
                <button onClick={ () => props.toggleEditComponent()}>X</button>
            </RowRight>
            <Row>
            <Column4>
                    <H4>First Name</H4>
                    <input 
                        type='text'
                        name='first_name'
                        placeholder='First Name'
                        onChange={handleChange}
                        value={state.first_name}
                    />
                </Column4>
                <Column4>
                    <H4>Additional Names</H4>
                    <input 
                        type='text'
                        name='additional_names'
                        placeholder='Additional Names'
                        onChange={handleChange}
                        value={state.additional_names}
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
                    <H4>Birth Date</H4>
                    <input 
                        type='date'
                        name='birthdate'
                        placeholder='Gender'
                        onChange={handleChange}
                        value={state.birthdate}
                    />
                </Column4>
            </Row>
            <Row>
                <Column4>            
                    <H4>Home Telephone</H4>
                    <input 
                        type='text'
                        name='home_telephone'
                        placeholder='Home Telephone'
                        onChange={handleChange}
                        value={state.home_telephone}
                    />
                </Column4>
                <Column4>
                    <H4>Mobile Telephone</H4>
                    <input 
                        type='text'
                        name='mobile_telephone'
                        placeholder='Mobile Telephone'
                        onChange={handleChange}
                        value={state.mobile_telephone}
                    />
                </Column4>
                <Column4>
                    <H4>Email</H4>
                    <input 
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={state.email}
                    />
                </Column4>
                <Column4>
                    <H4>Preferred Contact Method</H4>
                    <input 
                        type='text'
                        name='preferred_contact_method'
                        placeholder='Preferred Contact Method'
                        onChange={handleChange}
                        value={state.preferred_contact_method}
                    />
                </Column4>
            </Row>
            <Row>
                <Column4>
                    <H4>Location</H4>
                    <input 
                        type='text'
                        name='location'
                        placeholder='Location'
                        onChange={handleChange}
                        value={state.location_id}
                    />
                </Column4>
                <Column4>
                    <H4>Registration Date</H4>
                    <input 
                        type='date'
                        name='registration'
                        placeholder='registration'
                        onChange={handleChange}
                        value={state.registration_date}
                    />
                </Column4>
                <Column4>
                    <H4>Block</H4>
                    <input 
                        type='text'
                        name='block'
                        placeholder='block'
                        onChange={handleChange}
                        value={state.block}
                    />
                </Column4>
                <Column4>
                    <H4>Road</H4>
                    <input 
                        type='text'
                        name='road'
                        placeholder='road'
                        onChange={handleChange}
                        value={state.road}
                    />
                </Column4>
            </Row>
            <Row>
                <Column4>
                    <H4>Flat</H4>
                    <input 
                        type='text'
                        name='flat'
                        placeholder='flat'
                        onChange={handleChange}
                        value={state.flat}
                    />
                </Column4>
                <Column4>
                    <H4>Building</H4>
                    <input 
                        type='text'
                        name='building'
                        placeholder='building'
                        onChange={handleChange}
                        value={state.building}
                    />
                </Column4>
                <Column4>
                <H4 >No Call</H4>
                    <input 
                        type='text'
                        name='no_call'
                        placeholder='No Call'
                        onChange={handleChange}
                        value={state.no_call}
                    />
                </Column4>
                <Column4>
                    <H4>Delinquent Account</H4>
                    <input 
                        type='text'
                        name='delinquent_account'
                        placeholder='Delinquent Account'
                        onChange={handleChange}
                        value={state.delinquent_account}
                    />
                </Column4>
                </Row>
                <Row>
                <Column4>
                    <H4>Expelled</H4>
                    <input 
                        type='text'
                        name='expelled'
                        placeholder='Expelled'
                        onChange={handleChange}
                        value={state.expelled}
                    />
                </Column4>
                <Column4>
                    <H4>Notes</H4>
                <input 
                    type='text'
                    name='notes'
                    placeholder='Notes'
                    onChange={handleChange}
                    value={state.notes}
                    />
                </Column4>
                <Column4><div></div></Column4>
                <Column4><div></div></Column4>
            </Row>
            <RowRight>
                <button type='submit'>Save</button>
                <button type='button' onClick={ () => props.toggleEditComponent()} >Cancel</button>
            </RowRight>
            
           </form>
           
        </div>
    )
}



export default withRouter(
    connect(
        null,
        { editStudentById, toggleEditComponent}
    )(StudentForm)
)