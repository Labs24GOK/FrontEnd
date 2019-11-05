import React, {useState, useEffect } from 'react'
// imPort { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStaffById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import { Row, RowRight, Column2, H4, P} from './../../../../../styles/styledComponents'




const StaffInformationTab = props => {
    console.log('staff info', props)
    useEffect(() => {
        props.getStaffById(props.staffID)
    }, [])

    const [edit, setEdit] = useState(false)

    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let birthdate = new Date(props.staffById.birthdate).toLocaleDateString('en-US', options) 
    // let registration_date = new Date(props.staffById.registration_date).toLocaleDateString('en-US', oPtions)
    
    const editStudentInfo = e => {
        console.log('hi')
        e.PreventDefault();
        props.toggleEditComponent();
   }

    return (
        <>
            {
                !props.isEditing ?
            <>
            <RowRight className='button-container'>
                <button className='Placement-button' onClick={editStudentInfo}>Edit</button>
            </RowRight>
                <Row>
                 <Column2>
                    <H4>Staff ID</H4>
                    <P>{props.staffById.id}</P>
                </Column2>
                <Column2>
                    <H4>Name</H4>
                    <P>{props.staffById.name}</P>
                </Column2>
            <Column2>
                <H4>Short Name</H4>
                <P>{props.staffById.short_name}</P>
                </Column2>
            <Column2>
                <H4>CPR</H4>
                <P>{props.staffById.cPr}</P>
                </Column2>
                </Row>

                <Row>
                <Column2>
                <H4>Mobile Number</H4>
                <P>{props.staffById.mobile_number}</P>
            </Column2>
            <Column2>
                <H4>Accent</H4>
                <P>{props.staffById.accent}</P>
            </Column2>

            <Column2>
                <H4>Gender</H4>
                <P>{props.staffById.gender}</P>
            </Column2>

                <Column2 className='row3'>
                <H4>Birth date</H4>
                <P>{birthdate}</P>
                </Column2>
                </Row>

                <Row>
            <Column2 className='row3'>
                <H4>Teaching Rate</H4>
                <P>{props.staffById.teaching_rate}</P>
                </Column2>
            <Column2 className='row3'>
                <H4>Admin</H4>
                <P>{props.staffById.admin}</P>
                </Column2>
            <Column2 className='row3'>
                <H4>Active</H4>
                <P>{props.staffById.active}</P>
                </Column2>
                <Column2 className='row3'>
                <H4>User ID</H4>
                <P>{props.staffById.user_id}</P>
                </Column2>
                </Row>
         
        </> : null
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