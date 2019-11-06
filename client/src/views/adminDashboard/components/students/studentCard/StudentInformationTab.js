import React, { useState, useEffect } from 'react'
import { Grid, Segment, Form, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StudentForm from './StudentForm';

const StudentInformationTab = props => {

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
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>First name</Segment>
                                <Segment>{props.studentById.first_name}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Additional names</Segment>
                                <Segment>{props.studentById.additional_names}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Gender</Segment>
                                <Segment>{props.studentById.gender}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Birthdate</Segment>
                                <Segment>{birthdate}</Segment>
                            </Grid.Column>
                            <Grid.Column >
                                <Segment style={{color: "#26ABBD", cursor:"pointer", width:"fit-content"}} onClick={editStudentInfo}>
                                <Icon name="edit" style = {{color:"#26ABBD",cursor:"pointer"}}/> Edit 
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>Home Phone</Segment>
                                <Segment>{props.studentById.home_telephone}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Mobile</Segment>
                                <Segment>{props.studentById.mobile_telephone}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Email</Segment>
                                <Segment>{props.studentById.email}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Contact Method</Segment>
                                <Segment>{props.studentById.preferred_contact_method}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>Location</Segment>
                                <Segment>{props.studentById.location}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Registration Date</Segment>
                                <Segment>{registration_date}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Road</Segment>
                                <Segment>{props.studentById.road}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Flat</Segment>
                                <Segment>{props.studentById.flat}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Building</Segment>
                                <Segment>{props.studentById.building}</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>Notes</Segment>
                                <Segment><Form> <Form.TextArea placeholder='Enter any notes here...' style={{ "padding-left": "0" }} /></Form></Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    : <StudentForm {...props} />
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