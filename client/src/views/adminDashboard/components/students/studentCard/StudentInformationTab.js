import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent, toggleEditPlacement } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StudentForm from './StudentForm';
import { FormWrap, Div, TextDiv, SaveButton, FormSet, ButtonDiv, Label } from '../../mainStyle/styledComponent'


const StudentInformationTab = props => {
    useEffect(() => {
        props.getStudentById(props.studentID)
    }, [])

    let options = { year: 'numeric', month: 'numeric', day: 'numeric'}; //'long'
    let birthdate = new Date(props.studentById.birthdate).toLocaleDateString('en-GB', options)
    let registration_date = new Date(props.studentById.registration_date).toLocaleDateString('en-GB', options)
    let grade_updated = new Date(props.studentById.grade_updated).toLocaleDateString('en-GB', options)

    const editStudentInfo = e => {
        e.preventDefault();
        props.toggleEditComponent('true');
    }
console.log("props.studentById.birthdate:", props.studentById.birthdate)
console.log("birthdate:", birthdate)

    return (
        <div>
            {
            !props.isEditing ?
                <FormWrap>
                    <FormSet>
                    <Div>
                        <div>
                            <Label>CPR</Label>
                            <TextDiv>{props.studentById.cpr || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>First Name</Label>
                            <TextDiv>{props.studentById.first_name || "-" }</TextDiv>
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                            <Label>Additional Names</Label>
                            <TextDiv>{props.studentById.additional_names || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Gender</Label>
                            <TextDiv>{props.studentById.gender || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Email</Label>
                            <TextDiv>{props.studentById.email || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>School Name</Label>
                            <TextDiv>{props.studentById.school_name || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Birthdate</Label>
                            <TextDiv>{birthdate || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Location</Label>
                            <TextDiv>{props.studentById.location || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Home Phone</Label>
                            <TextDiv>{props.studentById.home_telephone || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Mobile</Label>
                            <TextDiv>{props.studentById.mobile_telephone || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Contact Method</Label>
                            <TextDiv>{props.studentById.preferred_contact_type || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>No Call</Label>
                            <TextDiv>{props.studentById.no_call ? 'Yes' : 'No' || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Block Code</Label>
                            <TextDiv>{props.studentById.block_code || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Road</Label>
                            <TextDiv>{props.studentById.road || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Building</Label>
                            <TextDiv>{props.studentById.building || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Flat</Label>
                            <TextDiv>{props.studentById.flat || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>School Grade</Label>
                            <TextDiv>{props.studentById.school_grade || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Grade Updated</Label>
                            <TextDiv>{grade_updated || "-" }</TextDiv> 
                        </div>
                        <div>
                            <Label>Registration Date</Label>
                            <TextDiv>{registration_date || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Delinquent</Label>
                            <TextDiv>{props.studentById.delinquent ? 'Yes' : 'No' || "-" }</TextDiv>
                        </div>
                        <div>
                            <Label>Expelled</Label>
                            <TextDiv>{props.studentById.expelled ? 'Yes' : 'No' || "-" }</TextDiv>
                        </div>
                        {/* <div>
                            <Label>Family ID</Label>
                            <TextDiv>{props.studentById.family_id || "-" }</TextDiv> 
                        </div> */}
                        <div style={{ gridColumn: 'span 4'}}>
                            <Label>Notes</Label>
                            <div>
                                <TextDiv style={{height: '80px' }}>{props.studentById.notes || "-" }</TextDiv> 
                            </div>
                        </div>
                    </Div>
                </FormSet>
                    <ButtonDiv >
                        <SaveButton type="submit" onClick={editStudentInfo}> 
                            Edit
                        </SaveButton>
                    </ButtonDiv>
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