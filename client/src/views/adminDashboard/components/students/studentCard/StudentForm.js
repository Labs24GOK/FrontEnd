import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { editStudentById } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import './StudentForm.css'
import './StudentInformationTab.css'



//might need status 
const StudentForm = (props) => {
    const studentId = props.match.params.id;
    console.log('props from studentInfoTab', props.props.studentById)


    const [state, setState] = useState({
        first_name: '',
        additional_names: '',
        gender: '',
        birthdate: '',
        home_telephone: '',
        mobile_telephone: '',
        email: '',
        preferred_contact_method: '',
        location: '',
        registration_date: '',
        block: '',
        road: '',
        flat: '',
        building: '',
        no_call: '',
        delinquent_account: '',
        expelled: '',
        notes: ''
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
        props.editStudentById(studentId, state)
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
                    defaultValue={props.props.studentById.first_name}
                    //value={state.first_name}
                />
            </div>
            <div className='row1'>
                <label>Additional Names</label>
                <input 
                    type='text'
                    name='additional_names'
                    placeholder='Additional Names'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.additional_names}
                />
            </div>
            <div className='row1'>
             <label>Gender</label>
                <input 
                    type='text'
                    name='gender'
                    placeholder='Gender'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.gender}
                />
            </div>
            <div className='row1'>
                <label>Birth Date</label>
                <input 
                    type='date'
                    name='birthdate'
                    placeholder='Gender'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.birthdate}
                />
            </div>
            <div className='row2'>            
                <label>Home Telephone</label>
                <input 
                    type='text'
                    name='home_telephone'
                    placeholder='Home Telephone'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.home_telephone}
                />
            </div>
            <div className='row2'>
                <label>Mobile Telephone</label>
                <input 
                    type='text'
                    name='mobile_telephone'
                    placeholder='Mobile Telephone'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.mobile_telephone}
                />
            </div>
            <div className='row2'>
                <label>Email</label>
                <input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.email}
                />
            </div>
            <div className='row2'>
                <label>Preferred Contact Method</label>
                <input 
                    type='text'
                    name='preferred_contact_method'
                    placeholder='Preferred Contact Method'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.preferred_contact_method}
                />
            </div>
            <div className='row3'>
                <label>Location</label>
                <input 
                    type='text'
                    name='location'
                    placeholder='Location'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.location}
                />
            </div>
            <div className='row3'>
                <label>Registration Date</label>
                <input 
                    type='date'
                    name='registration'
                    placeholder='registration'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.registration_date}
                />
            </div>
            <div className='row3'>
                <label>Block</label>
                <input 
                    type='text'
                    name='block'
                    placeholder='block'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.block}
                />
            </div>
            <div className='row3'>
                <label>Road</label>
                <input 
                    type='text'
                    name='road'
                    placeholder='road'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.road}
                />
            </div>
            <div className='row3'>
                <label>Flat</label>
                <input 
                    type='text'
                    name='flat'
                    placeholder='flat'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.flat}
                />
            </div>
            <div className='row4'>
                 <label>Building</label>
                <input 
                    type='text'
                    name='building'
                    placeholder='building'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.building}
                />
            </div>
            <div className='row4'>
            <label >No Call</label>
                <input 
                    type='text'
                    name='no_call'
                    placeholder='No Call'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.no_call}
                />
            </div>
            <div className='row4'>
                 <label>Delinquent Account</label>
                <input 
                    type='text'
                    name='delinquent_account'
                    placeholder='Delinquent Account'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.delinquent_account}
                />
            </div>
            <div className='row4'>
                <label>Expelled</label>
                <input 
                    type='text'
                    name='expelled'
                    placeholder='Expelled'
                    onChange={handleChange}
                    defaultValue={props.props.studentById.expelled}
                />
            </div>
            <div className='row4'>
                 <label>Notes</label>
            <input 
                type='text'
                name='notes'
                placeholder='Notes'
                onChange={handleChange}
                defaultValue={props.props.studentById.notes}
                />
            </div>
            </div>
            <button type='submit'>Save</button>
            <button type="reset" >Cancel</button>
           </form>
           
        </div>
    )
}



export default withRouter(
    connect(
        null,
        { editStudentById }
    )(StudentForm)
)