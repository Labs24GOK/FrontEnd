import React, {useState, useEffect } from 'react'
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import StudentForm from './StudentForm';
import './StudentInformationTab.css'



const StudentInformationTab = props => {
    useEffect(() => {
        props.getStudentById(props.match.params.id)
    }, [])

    const [edit, setEdit] = useState(false)

    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let birthdate = new Date(props.studentById.birthdate).toLocaleDateString('en-US', options) 
    let registration_date = new Date(props.studentById.registration_date).toLocaleDateString('en-US', options)
    
    const editStudentInfo = e => {
        console.log('hi')
        e.preventDefault();
        props.toggleEditComponent();
   }

    return (
        <>
        {
            !props.isEditing ? <div className='grid-container'>
            <div className='row1'>
                <h4>First Name</h4>
                <p>{props.studentById.first_name}</p>
                </div>
            <div className='row1'>
                <h4>Additional Names</h4>
                <p>{props.studentById.additional_names}</p>
                </div>
            <div className='row1'>
                <h4>Gender</h4>
                <p>{props.studentById.gender}</p>
                </div>
            <div className='row1'>
                <h4>Birth date</h4>
                <p>{birthdate}</p>
                </div>

            <div className='row2'>
                <h4>Home Telephone</h4>
                <p>{props.studentById.home_telephone}</p>
                </div>
            <div className='row2'>
                <h4>Mobile Telephone</h4>
                <p>{props.studentById.mobile_telephone}</p>
            </div>
            <div className='row2'>
                <h4>Email</h4>
                <p>{props.studentById.email}</p>
                </div>
            <div className='row2'>
                <h4>Preferred Contact Method</h4>
                <p>{props.studentById.preferred_contact_method}</p>
            </div>

            <div className='row3'>
                <h4>Location</h4>
                <p>Not done</p>
                </div>
            <div className='row3'>
                <h4>Registration Date</h4>
                <p>{registration_date}</p>
                </div>
            <div className='row3'>
                <h4>Block</h4>
                <p>{props.studentById.block}</p>
                </div>
            <div className='row3'>
                <h4>Road</h4>
                <p>{props.studentById.road}</p>
                </div>
            <div className='row3'>
                <h4>Flat</h4>
                <p>{props.studentById.flat}</p>
                </div>
            <div className='row3'>
                <h4>Building</h4>
                <p>{props.studentById.building}</p>
                </div>

            <div className='row4'>
                <h4>No Call</h4>
                <p>{props.studentById.no_call}</p>
                </div>
            <div className='row4'>
                <h4>Delinquent Account</h4>
                <p>{props.studentById.delinquent_account}</p>
                </div>
            <div className='row4'>
                <h4>Expelled</h4>
                <p>{props.studentById.expelled}</p>
                </div>

            <div className='row5'>
                <h4>Notes</h4>
                <p>{props.studentById.notes}</p>
                </div>

            <div className='button-container'>
                <button className='placement-button' onClick={editStudentInfo}>Edit</button>
            </div>

        </div> : <StudentForm props={props}/>
        }
            
            
            
        </>
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEditing: state.studentByIdReducer.isEditting,
    };
  };

const mapDispatchToProps = dispatch => {
    return {

    }
}
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getStudentById, toggleEditComponent }
  )(StudentInformationTab)
  )