import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { editStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import './StudentForm.css'
import './StudentInformationTab.css'



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
        location: props.studentById.location,
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
           <div className='grid-container'>
           <div className='row1'>
                <label>First Name</label>
                <input 
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    onChange={handleChange}
                    value={state.first_name}
                />
            </div>
            <div className='row1'>
                <label>Additional Names</label>
                <input 
                    type='text'
                    name='additional_names'
                    placeholder='Additional Names'
                    onChange={handleChange}
                    value={state.additional_names}
                />
            </div>
            <div className='row1'>
             <label>Gender</label>
                <input 
                    type='text'
                    name='gender'
                    placeholder='Gender'
                    onChange={handleChange}
                    value={state.gender}
                />
            </div>
            <div className='row1'>
                <label>Birth Date</label>
                <input 
                    type='date'
                    name='birthdate'
                    placeholder='Gender'
                    onChange={handleChange}
                    value={state.birthdate}
                />
            </div>
            <div className='row2'>            
                <label>Home Telephone</label>
                <input 
                    type='text'
                    name='home_telephone'
                    placeholder='Home Telephone'
                    onChange={handleChange}
                    value={state.home_telephone}
                />
            </div>
            <div className='row2'>
                <label>Mobile Telephone</label>
                <input 
                    type='text'
                    name='mobile_telephone'
                    placeholder='Mobile Telephone'
                    onChange={handleChange}
                    value={state.mobile_telephone}
                />
            </div>
            <div className='row2'>
                <label>Email</label>
                <input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={state.email}
                />
            </div>
            <div className='row2'>
                <label>Preferred Contact Method</label>
                <input 
                    type='text'
                    name='preferred_contact_method'
                    placeholder='Preferred Contact Method'
                    onChange={handleChange}
                    value={state.preferred_contact_method}
                />
            </div>
            <div className='row3'>
                <label>Location</label>
                <input 
                    type='text'
                    name='location'
                    placeholder='Location'
                    onChange={handleChange}
                    value={state.location}
                />
            </div>
            <div className='row3'>
                <label>Registration Date</label>
                <input 
                    type='date'
                    name='registration'
                    placeholder='registration'
                    onChange={handleChange}
                    value={state.registration_date}
                />
            </div>
            <div className='row3'>
                <label>Block</label>
                <input 
                    type='text'
                    name='block'
                    placeholder='block'
                    onChange={handleChange}
                    value={state.block}
                />
            </div>
            <div className='row3'>
                <label>Road</label>
                <input 
                    type='text'
                    name='road'
                    placeholder='road'
                    onChange={handleChange}
                    value={state.road}
                />
            </div>
            <div className='row3'>
                <label>Flat</label>
                <input 
                    type='text'
                    name='flat'
                    placeholder='flat'
                    onChange={handleChange}
                    value={state.flat}
                />
            </div>
            <div className='row4'>
                 <label>Building</label>
                <input 
                    type='text'
                    name='building'
                    placeholder='building'
                    onChange={handleChange}
                    value={state.building}
                />
            </div>
            <div className='row4'>
            <label >No Call</label>
                <input 
                    type='text'
                    name='no_call'
                    placeholder='No Call'
                    onChange={handleChange}
                    value={state.no_call}
                />
            </div>
            <div className='row4'>
                 <label>Delinquent Account</label>
                <input 
                    type='text'
                    name='delinquent_account'
                    placeholder='Delinquent Account'
                    onChange={handleChange}
                    value={state.delinquent_account}
                />
            </div>
            <div className='row4'>
                <label>Expelled</label>
                <input 
                    type='text'
                    name='expelled'
                    placeholder='Expelled'
                    onChange={handleChange}
                    value={state.expelled}
                />
            </div>
            <div className='row4'>
                 <label>Notes</label>
            <input 
                type='text'
                name='notes'
                placeholder='Notes'
                onChange={handleChange}
                value={state.notes}
                />
            </div>
            </div>
            <button type='submit'>Save</button>
           <button type='button' onClick={ () => props.toggleEditComponent()} >Cancel</button>
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