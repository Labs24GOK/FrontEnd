import React, {useState, useEffect } from 'react'
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import StudentForm from './StudentForm';
import './StudentInformationTab.css'
import { Row, RowRight, Column4, H4, P} from '../../../../../styles/styledComponents'


const StudentInformationTab = props => {
    console.log('props from studnet information tab',props)
    useEffect(() => {
        props.getStudentById(props.studentID)
    }, [])

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
                !props.isEditing ?
                <>
                <RowRight>
                <button className='placement-button' onClick={editStudentInfo}>Edit</button>
                </RowRight>
                <Row>
                    <Column4>
                        <H4>First Name</H4>
                        <P>{props.studentById.first_name}</P>
                    </Column4>
                    <Column4>
                        <H4>Additional Names</H4>
                        <P>{props.studentById.additional_names}</P>
                    </Column4>
                    <Column4>
                        <H4>Gender</H4>
                        <P>{props.studentById.gender}</P>
                    </Column4>
                    <Column4>
                        <H4>Birth date</H4>
                        <P>{birthdate}</P>
                    </Column4>
                </Row>
                <Row>
                    <Column4>
                        <H4>Home Telephone</H4>
                        <P>{props.studentById.home_telephone}</P>
                    </Column4>
                    <Column4>
                        <H4>Mobile Telephone</H4>
                        <P>{props.studentById.mobile_telephone}</P>
                    </Column4>
                    <Column4>
                        <H4>Email</H4>
                        <P>{props.studentById.email}</P>
                    </Column4>
                    <Column4>
                        <H4>Preferred Contact Method</H4>
                        <P>{props.studentById.preferred_contact_method}</P>
                    </Column4>
                </Row>
                <Row>
                    <Column4>
                        <H4>Location</H4>
                        <P>Not done</P>
                    </Column4>
                    <Column4>
                        <H4>Registration Date</H4>
                        <P>{registration_date}</P>
                    </Column4>
                    <Column4>
                        <H4>Block</H4>
                        <P>{props.studentById.block}</P>
                    </Column4>
                    <Column4>
                        <H4>Road</H4>
                        <P>{props.studentById.road}</P>
                    </Column4>
                </Row>
                <Row>
                    <Column4>
                        <H4>Flat</H4>
                        <P>{props.studentById.flat}</P>
                    </Column4>
                    <Column4>
                        <H4>Building</H4>
                        <P>{props.studentById.building}</P>
                    </Column4>
                    <Column4>
                        <H4>No Call</H4>
                        <P>{props.studentById.no_call}</P>
                    </Column4>
                    <Column4>
                        <H4>Delinquent Account</H4>
                        <P>{props.studentById.delinquent_account}</P>
                    </Column4>
                </Row>
                <Row>
                    <Column4>
                        <H4>Expelled</H4>
                        <P>{props.studentById.expelled}</P>
                    </Column4>
                    <Column4>
                        <H4>Notes</H4>
                        <P>{props.studentById.notes}</P>
                    </Column4>
                    <Column4>
                        <div></div>
                    </Column4>
                    <Column4>
                    <button className='placement-button' >Placement Test</button>
                    </Column4>
                </Row>
                    
                    
            </>
            : <StudentForm {...props}/>      
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
      { getStudentById, toggleEditComponent }
  )(StudentInformationTab)
  )