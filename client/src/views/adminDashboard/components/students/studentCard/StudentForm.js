import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Grid, Segment, Input, Icon, Dropdown } from 'semantic-ui-react'
import { editStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter, Link } from 'react-router-dom';


const StudentForm = (props) => {

    const { studentID } = props;

    let birthdate = new Date(props.studentById.birthdate).toISOString().split("T")[0];

    const [state, setState] = useState({
        cpr: props.studentById.cpr,
        id: studentID,
        first_name: props.studentById.first_name,
        additional_names: props.studentById.additional_names,
        gender: props.studentById.gender,
        birthdate: birthdate,
        home_telephone: props.studentById.home_telephone,
        mobile_telephone: props.studentById.mobile_telephone,
        email: props.studentById.email,
        preferred_contact_type_id: props.studentById.preferred_contact_type_id,
        location_id: props.studentById.location_id,
        block_code: props.studentById.block_code,
        road: props.studentById.road,
        flat: props.studentById.flat,
        building: props.studentById.building,
        no_call: props.studentById.no_call,
        delinquent: props.studentById.delinquent,
        expelled: props.studentById.expelled,
        notes: props.studentById.notes,
        family_id: props.studentById.family_id
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.editStudentById(studentID, state)
        props.toggleEditComponent('false', 'true')
    }

    const handleCancel = e => {
        props.toggleEditComponent('false', 'false');
    }

    const genderOptions = [
        { key: 'M', text: 'M', value: state.gender },
        { key: 'F', text: 'F', value: state.gender }
    ]

    const blockCode = [
        {key: , integer: 363, value: state.block_code},
        {key: , integer: 431, value: state.block_code},
        {key: 432, integer: 433, value: state.block_code},
        {key: 432, integer: 435, value: state.block_code},
        {key: 432, integer: 439, value: state.block_code},
        {key: 432, integer: 441, value: state.block_code},
    ]
    
    return (
        <>
            <div className="ui segment active tab editForm">
                {!props.isEdited ? <h3 style={{color: 'red'}}>{props.error}</h3> : null}
                <Grid columns='equal'>
                    <Grid.Row>
                        {/* row 1 */}
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
                            {/* <Input
                                type='text'
                                name='gender'
                                placeholder='Gender'
                                onChange={handleChange}
                                value={state.gender}
                            /> */}
                            <Dropdown placeholder='Gender' search selection options={genderOptions} />
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
                            <Segment.Group horizontal style={{ background: "#E0EBF0", "box-shadow": "none", border: "none" }}>
                                <Segment.Inline onClick={handleSubmit} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content", margin: 0 }}>
                                    <Icon name="save" style={{ color: "#26ABBD", cursor: "pointer" }} /> Save
                            </Segment.Inline>
                                <Segment.Inline onClick={handleCancel} style={{ color: "#C73642", cursor: "pointer", width: "fit-content", "margin-left": "10px" }}>
                                    <Icon name="cancel" style={{ color: "#C73642", cursor: "pointer" }} /> Cancel
                            </Segment.Inline>
                            </Segment.Group>
                        </Grid.Column>
                    </Grid.Row>
                    {/* row 2 */}

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
                                name='email'
                                placeholder='email'
                                onChange={handleChange}
                                value={state.email}
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
                            <Segment>Location</Segment>
                            <Input
                                type='text'
                                name='location_id'
                                placeholder='Location'
                                onChange={handleChange}
                                value={state.location_id}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    {/* row 3  */}
                    <Grid.Row>
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
                        <Grid.Column>
                            <Segment>Block Code</Segment>
                            <Dropdown 
                            placeholder='Block Code' 
                            search selection options={block_code}
                            />
                            {/* <Input
                                type='text'
                                name='block_code'
                                placeholder='Block Code'
                                onChange={handleChange}
                                value={state.block_code}
                            /> */}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        {/* row 4 */}
                        <Grid.Column>
                            <Segment>Delinquent</Segment>
                            <Input
                                type='boolean'
                                name='delinquent'
                                placeholder='Delinquent'
                                onChange={handleChange}
                                value={state.delinquent}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>CPR</Segment>
                            <Input
                                type='text'
                                name='cpr'
                                placeholder='CPR'
                                onChange={handleChange}
                                value={state.cpr}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>ID</Segment>
                            <Input
                                type='text'
                                name='id'
                                placeholder='ID'
                                onChange={handleChange}
                                value={state.id}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>School Name</Segment>
                            <Input
                                type='text'
                                name='school_name'
                                placeholder='School Name'
                                onChange={handleChange}
                                value={state.school_name}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>School Grade ID</Segment>
                            <Input
                                type='text'
                                name='school_grade_id'
                                placeholder='School Grade ID'
                                onChange={handleChange}
                                value={state.school_grade_id}
                            />
                        </Grid.Column>

                        {/* row 5 */}
                        <Grid.Column>
                            <Segment>Grade Updated</Segment>
                            <Input
                                type='date'
                                name='grade_updated'
                                placeholder='Grade Updated'
                                onChange={handleChange}
                                value={state.grade_updated}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Family ID</Segment>
                            <Input
                                type='text'
                                name='family_id'
                                placeholder='Family ID'
                                onChange={handleChange}
                                value={state.family_id}
                            />
                        </Grid.Column>

                    </Grid.Row>
                    {/* row 6 */}
                    <Grid.Column>
                        <Segment>Notes</Segment>
                        <Input
                            type='text'
                            name='notes'
                            placeholder='Notes'
                            onChange={handleChange}
                            value={state.notes}
                        />

                    </Grid.Column>
                </Grid>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEdited: state.studentByIdReducer.isEdited,
        isEditing: state.studentByIdReducer.isEditing,
        error: state.studentByIdReducer.error
    };
};


export default withRouter(
    connect(
        mapStateToProps,
        { editStudentById, toggleEditComponent }
    )(StudentForm)
)