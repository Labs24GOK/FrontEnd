import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Grid, Segment, Input, Icon } from 'semantic-ui-react'
import { editStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';
const StudentForm = (props) => {
    console.log("props from student form", props.studentById)
    
    const { studentID } = props;

    let birthdate = new Date(props.studentById.birthdate).toISOString().split("T")[0];
    let registration_date = new Date(props.studentById.registration_date).toISOString().split("T")[0];

    const [state, setState] = useState({
        cpr:'6',
        first_name: props.studentById.first_name,
        additional_names: props.studentById.additional_names,
        gender: props.studentById.gender,
        birthdate: birthdate,
        home_telephone: props.studentById.home_telephone,
        mobile_telephone: props.studentById.mobile_telephone,
        email: props.studentById.email,
        preferred_contact_type_id: props.studentById.preferred_contact_method,
        location_id: props.studentById.location_id,
        registration_date: registration_date,
        // block: props.studentById.block,
        road: props.studentById.road,
        flat: props.studentById.flat,
        building: props.studentById.building,
        no_call: props.studentById.no_call,
        // delinquent_account: props.studentById.delinquent_account,
        expelled: props.studentById.expelled,
        notes: props.studentById.notes,
        family_id: '1'
    })
    
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        console.log('state we are sending', state)
        e.preventDefault();
        props.editStudentById(studentID, state)
    }

    const handleCancel = e => {
        props.toggleEditComponent();
    }

    return (

        <>
            <div className="ui segment active tab editForm">
                {/* <form onSubmit={handleSubmit}> */}
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>
                                First name
                        </Segment>
                            <Input
                                type='text'
                                name='first_name'
                                placeholder='First Name'
                                onChange={handleChange}
                                value={state.first_name}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Additional names</Segment>
                            <Input
                                type='text'
                                name='additional_names'
                                placeholder='Additional Names'
                                onChange={handleChange}
                                value={state.additional_names}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Gender</Segment>
                            <Input
                                type='text'
                                name='gender'
                                placeholder='Gender'
                                onChange={handleChange}
                                value={state.gender}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Birthdate</Segment>
                            <Input
                                type='date'
                                name='birthdate'
                                placeholder='Gender'
                                onChange={handleChange}
                                value={state.birthdate}
                            />
                        </Grid.Column>
                        <Grid.Column >
                            <Segment.Group horizontal style={{ background: "#E0EBF0", "box-shadow":"none", border:"none" }}>
                                <Segment.Inline onClick={handleSubmit} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" ,margin: 0}}>
                                    <Icon name="save" style={{ color: "#26ABBD", cursor: "pointer" }} /> Save
                            </Segment.Inline>
                                <Segment.Inline onClick={handleCancel} style={{ color: "#C73642", cursor: "pointer", width: "fit-content", "margin-left": "10px" }}>
                                    <Icon name="cancel" style={{ color: "#C73642", cursor: "pointer" }} /> Cancel
                            </Segment.Inline>
                            </Segment.Group>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column>
                            <Segment>Home Phone</Segment>
                            <Input
                                type='text'
                                name='home_telephone'
                                placeholder='Home Telephone'
                                onChange={handleChange}
                                value={state.home_telephone}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Mobile</Segment>
                            <Input
                                type='text'
                                name='mobile_telephone'
                                placeholder='Mobile Telephone'
                                onChange={handleChange}
                                value={state.mobile_telephone}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Email</Segment>
                            <Input
                                type='text'
                                name='gender'
                                placeholder='Gender'
                                onChange={handleChange}
                                value={state.gender}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Contact Method</Segment>
                            <Input
                                type='text'
                                name='preferred_contact_type_id'
                                placeholder='Preferred Contact Method'
                                onChange={handleChange}
                                value={state.preferred_contact_method}
                            />
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column>
                            <Segment>Location</Segment>
                            <Input
                                type='text'
                                name='location_id'
                                placeholder='Location'
                                onChange={handleChange}
                                value={state.location}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Registration Date</Segment>
                            <Input
                                type='date'
                                name='registration_date'
                                placeholder='registration'
                                onChange={handleChange}
                                value={state.registration_date}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Road</Segment>
                            <Input
                                type='text'
                                name='road'
                                placeholder='road'
                                onChange={handleChange}
                                value={state.road}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Flat</Segment>
                            <Input
                                type='text'
                                name='flat'
                                placeholder='flat'
                                onChange={handleChange}
                                value={state.flat}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Building</Segment>
                            <Input
                                type='text'
                                name='building'
                                placeholder='building'
                                onChange={handleChange}
                                value={state.building}
                            />
                        </Grid.Column>
                    </Grid.Row>
                   
                </Grid>
               {/* </form> */}
            </div>
        </>
    )
}



export default withRouter(
    connect(
        null,
        { editStudentById, toggleEditComponent }
    )(StudentForm)
)