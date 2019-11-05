import React, {useState, useEffect } from 'react'
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStaffById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import '../../students/studentCard/StudentInformationTab.css'



const StaffInformationTab = props => {
    console.log('staff info', props)
    useEffect(() => {
        props.getStaffById(props.staffID)
    }, [])

    const [edit, setEdit] = useState(false)

    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let birthdate = new Date(props.staffById.birthdate).toLocaleDateString('en-US', options) 
    // let registration_date = new Date(props.staffById.registration_date).toLocaleDateString('en-US', options)
    
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
                <h4>Staff ID</h4>
                <p>{props.staffById.id}</p>
                </div>
            <div className='row1'>
                <h4>Name</h4>
                <p>{props.staffById.name}</p>
                </div>
            <div className='row1'>
                <h4>Short Name</h4>
                <p>{props.staffById.short_name}</p>
                </div>
            <div className='row1'>
                <h4>CPR</h4>
                <p>{props.staffById.cpr}</p>
                </div>
                <div className='row1'>
                <h4>Mobile Number</h4>
                <p>{props.staffById.mobile_number}</p>
            </div>
            {/* <div className='row2'>
                <h4>Mobile Telephone</h4>
                <p>{props.staffById.mobile_telephone}</p>
            </div> */}
            {/* <div className='row2'>
                <h4>Email</h4>
                <p>{props.staffById.id}</p>
                </div> */}
            <div className='row2'>
                <h4>Accent</h4>
                <p>{props.staffById.accent}</p>
            </div>

            <div className='row2'>
                <h4>Gender</h4>
                <p>{props.staffById.gender}</p>
            </div>

                <div className='row3'>
                <h4>Birth date</h4>
                <p>{birthdate}</p>
                </div>

            <div className='row3'>
                <h4>Teaching Rate</h4>
                <p>{props.staffById.teaching_rate}</p>
                </div>
            <div className='row3'>
                <h4>Admin</h4>
                <p>{props.staffById.admin}</p>
                </div>
            <div className='row3'>
                <h4>Active</h4>
                <p>{props.staffById.active}</p>
                </div>
            {/* <div className='row3'>
                <h4>Road</h4>
                <p>{props.staffById.road}</p>
                </div>
            <div className='row3'>
                <h4>Flat</h4>
                <p>{props.staffById.flat}</p>
                </div>
            <div className='row3'>
                <h4>Building</h4>
                <p>{props.staffById.building}</p>
                </div>

            <div className='row4'>
                <h4>No Call</h4>
                <p>{props.staffById.no_call}</p>
                </div>
            <div className='row4'>
                <h4>Delinquent Account</h4>
                <p>{props.staffById.delinquent_account}</p>
                </div>
            <div className='row4'>
                <h4>Expelled</h4>
                <p>{props.staffById.expelled}</p>
                </div>

            <div className='row5'>
                <h4>Notes</h4>
                <p>{props.staffById.notes}</p>
                </div> */}

            <div className='button-container'>
                <button className='placement-button' onClick={editStudentInfo}>Edit</button>
            </div>

        </div> : null
        }
            
            
            
        </>
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.staffByIdReducer.isLoading,
        staffById: state.staffByIdReducer.staffById,
        isEditing: state.staffByIdReducer.isEditting,
    };
  };


  
  export default withRouter(
    connect(
      mapStateToProps,
      { getStaffById, toggleEditComponent}
  )(StaffInformationTab)
  )