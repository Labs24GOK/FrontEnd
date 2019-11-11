import React, { useState, useEffect } from 'react'
import { Grid, Segment, Form, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent, toggleEditPlacement } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StudentForm from './StudentForm';
import PlacementTest from '../placementTest/placementTest'
import PlacementForm from '../placementTest/placementForm'
import { Modal } from 'antd';
import { RedButton } from '../../mainStyle/styledComponent'

const StudentInformationTab = props => {
    const [modalState, setModalState]= useState(false)

    const openModal = () => {
        setModalState(true)
    }
    const cancelModal = () => {
        setModalState(false)
    }
 
    useEffect(() => {
        props.getStudentById(props.studentID)
    }, [])

    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let birthdate = new Date(props.studentById.birthdate).toLocaleDateString('en-GB', options)
    let registration_date = new Date(props.studentById.registration_date).toLocaleDateString('en-GB', options)
    let grade_updated = new Date(props.studentById.grade_updated).toLocaleDateString('en-GB', options)
    
    const editStudentInfo = e => {
        e.preventDefault();
        props.toggleEditComponent('true');
    }

    return (
        <div className='gridView'>
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
                        {/* row 2 */}
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
                                <Segment>{props.studentById.preferred_contact_type_id}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>Location</Segment>
                                <Segment>{props.studentById.location_id}</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        {/* row 3  */}
                        <Grid.Row>
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
                            <Grid.Column>
                                <Segment>Block Code</Segment>
                                <Segment>{props.studentById.block_code}</Segment>
                            </Grid.Column>
                            </Grid.Row> 
                            {/* row 4 */}
                            <Grid.Row>
                            <Grid.Column>
                                <Segment>Delinquent</Segment>
                                <Segment>{props.studentById.delinquent ? 'Yes' : 'No'}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>CPR</Segment>
                                <Segment>{props.studentById.cpr}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>ID</Segment>
                                <Segment>{props.studentById.id}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>School Name</Segment>
                                <Segment>{props.studentById.school_name}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>School Grade ID</Segment>
                                <Segment>{props.studentById.school_grade_id}</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        {/* row 5 */}
                        <Grid.Row>
                        <Grid.Column>
                                <Segment>Grade Updated</Segment>
                                <Segment>{grade_updated}</Segment> 
                        </Grid.Column>
                        <Grid.Column>
                                <Segment>Family ID</Segment>
                                <Segment>{props.studentById.family_id}</Segment> 
                        </Grid.Column>
                        <Grid.Column>
                                <Segment>Expelled</Segment>
                                <Segment>{props.studentById.expelled ? 'Yes' : 'No'}</Segment> 
                        </Grid.Column>
                        <Grid.Column>
                                <Segment>No Call</Segment>
                                <Segment>{props.studentById.no_call ? 'Yes': 'No'}</Segment> 
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        </Grid.Row>
                        {/* row 6 */}
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>Notes</Segment>
                                <Segment>{props.studentById.notes}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <RedButton onClick={openModal}>Placement Exam</RedButton>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    : <StudentForm {...props} />
            }

            <Modal
            title="Placement Exam"
            width="60%"
            visible={modalState}
            onCancel={cancelModal}
            footer={null}
            >
                {!props.isTestEditing
                ? 
                <PlacementTest {...props} />
                 : <PlacementForm {...props} />
             }
            </Modal>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEditing: state.studentByIdReducer.isEditing,
        isTestEditing: state.placementTestReducer.isTestEditing,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentById, toggleEditComponent, toggleEditPlacement }
    )(StudentInformationTab)
)