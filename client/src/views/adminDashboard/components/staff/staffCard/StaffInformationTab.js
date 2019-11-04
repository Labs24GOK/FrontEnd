import React, {useState, useEffect } from 'react'
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import StudentForm from './StudentForm';
import '../../students/studentCard/StudentInformationTab.css'



const StaffInformationTab = props => {
    useEffect(() => {
        props.getStudentById(props.match.params.id)
    }, [])

    const [edit, setEdit] = useState(false)

    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let birthdate = new Date(props.studentById.birthdate).toLocaleDateString('en-US', options) 
    // let registration_date = new Date(props.studentById.registration_date).toLocaleDateString('en-US', options)
    
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
                <h4>Name</h4>
                <p>{props.studentById.name}</p>
                </div>
            <div className='row1'>
                <h4>Short Name</h4>
                <p>{props.studentById.short_name}</p>
                </div>
            <div className='row1'>
                <h4>CPR</h4>
                <p>{props.studentById.cpr}</p>
                </div>
                <div className='row1'>
                <h4>Mobile Telephone</h4>
                <p>{props.studentById.mobile_telephone}</p>
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
                <h4>Accent</h4>
                <p>{props.studentById.accent}</p>
            </div>

            <div className='row2'>
                <h4>Gender</h4>
                <p>{props.studentById.gender}</p>
            </div>

                <div className='row3'>
                <h4>Birth date</h4>
                <p>{birthdate}</p>
                </div>

            <div className='row3'>
                <h4>Teaching Rate</h4>
                <p>{props.studentById.teaching_rate}</p>
                </div>
            <div className='row3'>
                <h4>Admin</h4>
                <p>{props.studentById.admin}</p>
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


  
  export default withRouter(
    connect(
      mapStateToProps,
      { getStudentById}
  )(StaffInformationTab)
  )