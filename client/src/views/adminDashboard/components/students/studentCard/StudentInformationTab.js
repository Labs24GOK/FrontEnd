import React, { useState, useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent, toggleEditPlacement } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StudentForm from './StudentForm';
import { FormWrap, Div, TextDiv } from '../../mainStyle/styledComponent'


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
        <div>
            {
                !props.isEditing ?
                    <FormWrap>
                        <Div>
                        <div onClick={editStudentInfo} style={{gridColumn: "span3", marginRight: "15px",color: "#26ABBD", cursor: "pointer", width: "fit-content"}}>
                            <Icon name="edit" style = {{color:"#26ABBD",cursor:"pointer"}}/> Edit 
                        </div>
                        </Div>
                        <Div>
                            <div>
                                <label>First name</label>
                                <TextDiv>{props.studentById.first_name}</TextDiv>
                            </div>
                            <div>
                                <label>Additional names</label>
                                <TextDiv>{props.studentById.additional_names}</TextDiv>
                            </div>
                            <div>
                                <label>Gender</label>
                                <TextDiv>{props.studentById.gender}</TextDiv>
                            </div>
                            <div>
                                <label>Birthdate</label>
                                <TextDiv>{birthdate}</TextDiv>
                            </div>
                            
                            <div>
                                <label>Home Phone</label>
                                <TextDiv>{props.studentById.home_telephone}</TextDiv>
                            </div>
                            <div>
                                <label>Mobile</label>
                                <TextDiv>{props.studentById.mobile_telephone}</TextDiv>
                            </div>
                            <div>
                                <label>Email</label>
                                <TextDiv>{props.studentById.email}</TextDiv>
                            </div>
                            <div>
                                <label>Contact Method</label>
                                <TextDiv>{props.studentById.preferred_contact_type_id}</TextDiv>
                            </div>
                            <div>
                                <label>Location</label>
                                <TextDiv>{props.studentById.location_id}</TextDiv>
                            </div>
                            <div>
                                <label>Registration Date</label>
                                <TextDiv>{registration_date}</TextDiv>
                            </div>
                            <div>
                                <label>Road</label>
                                <TextDiv>{props.studentById.road}</TextDiv>
                            </div>
                            <div>
                                <label>Flat</label>
                                <TextDiv>{props.studentById.flat}</TextDiv>
                            </div>
                            <div>
                                <label>Building</label>
                                <TextDiv>{props.studentById.building}</TextDiv>
                            </div>
                            <div>
                                <label>Block Code</label>
                                <TextDiv>{props.studentById.block_code}</TextDiv>
                            </div>
                            {/* row 4 */}
                            <div>
                                <label>Delinquent</label>
                                <TextDiv>{props.studentById.delinquent ? 'Yes' : 'No'}</TextDiv>
                            </div>
                            <div>
                                <label>CPR</label>
                                <TextDiv>{props.studentById.cpr}</TextDiv>
                            </div>
                            <div>
                                <label>ID</label>
                                <TextDiv>{props.studentById.id}</TextDiv>
                            </div>
                            <div>
                                <label>School Name</label>
                                <TextDiv>{props.studentById.school_name}</TextDiv>
                            </div>
                            <div>
                                <label>School Grade ID</label>
                                <TextDiv>{props.studentById.school_grade_id}</TextDiv>
                            </div>
                        {/* row 5 */}
                        <div>
                                <label>Grade Updated</label>
                                <TextDiv>{grade_updated}</TextDiv> 
                        </div>
                        <div>
                                <label>Family ID</label>
                                <TextDiv>{props.studentById.family_id}</TextDiv> 
                        </div>
                        <div>
                                <label>Expelled</label>
                                <TextDiv>{props.studentById.expelled ? 'Yes' : 'No'}</TextDiv> 
                        </div>
                        <div>
                                <label>No Call</label>
                                <TextDiv>{props.studentById.no_call ? 'Yes': 'No'}</TextDiv> 
                        </div>
                        <div>
                        </div>
                        </Div>
                    </FormWrap>
                    : <StudentForm {...props} />
            }
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