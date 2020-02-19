import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getStudentById,
  toggleEditComponent,
  toggleEditPlacement,
  toggleDeleteModel,
  deleteStudentById
} from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StudentForm from './StudentForm';
import {
  FormWrap,
  Div,
  TextDiv,
  SaveButton,
  DeleteButton,
  FormSet,
  ButtonDiv,
  Label
} from '../../mainStyle/styledComponent';
import Modal from '../../modals/DeleteModal';

const StudentInformationTab = props => {
  console.log(props);
  useEffect(() => {
    props.getStudentById(props.studentID);
  }, []);

  let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
  let birthdate = new Date(
    props.studentById && props.studentById.birthdate
  ).toLocaleDateString('en-GB', options);
  let registration_date = new Date(
    props.studentById && props.studentById.registration_date
  ).toLocaleDateString('en-GB', options);
  let grade_updated = new Date(
    props.studentById && props.studentById.grade_updated
  ).toLocaleDateString('en-GB', options);

  const editStudentInfo = e => {
    e.preventDefault();
    props.toggleEditComponent('true');
  };

  const areYouSureYouWantToDelete = e => {
    e.preventDefault();
    props.toggleDeleteModel(true);
  };

  const deleteStudentInfo = async () => {
    await props.deleteStudentById(props.studentById.student_id);
    props.setStudentView('studentTableView');
  };

  return (
    <div>
      {!props.isEditing ? (
        <>
          <FormWrap>
            <FormSet>
              <Div>
                <div>
                  <Label>CPR</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.cpr) || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>First Name</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.first_name) || '-'}
                  </TextDiv>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <Label>Additional Names</Label>
                  <TextDiv>
                    {(props.studentById &&
                      props.studentById.additional_names) ||
                      '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Gender</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.gender) || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Email</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.email) || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>School Name</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.school_name) ||
                      '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Birthdate</Label>
                  <TextDiv>{birthdate || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Location</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.location) || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Home Phone</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.home_telephone) ||
                      '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Mobile</Label>
                  <TextDiv>
                    {(props.studentById &&
                      props.studentById.mobile_telephone) ||
                      '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Preferred Contact Method</Label>
                  <TextDiv>
                    {(props.studentById &&
                      props.studentById.preferred_contact_type) ||
                      '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>No Call</Label>
                  <TextDiv>
                    {props.studentById && props.studentById.no_call
                      ? 'Yes'
                      : 'No' || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Block Code</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.block_code) || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Road</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.road) || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Building</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.building) || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Flat</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.flat) || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>School Grade</Label>
                  <TextDiv>
                    {(props.studentById && props.studentById.school_grade) ||
                      '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Grade Updated</Label>
                  <TextDiv>{grade_updated || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Registration Date</Label>
                  <TextDiv>{registration_date || '-'}</TextDiv>
                </div>
                <div>
                  <Label>Delinquent</Label>
                  <TextDiv>
                    {props.studentById && props.studentById.delinquent
                      ? 'Yes'
                      : 'No' || '-'}
                  </TextDiv>
                </div>
                <div>
                  <Label>Expelled</Label>
                  <TextDiv>
                    {props.studentById && props.studentById.expelled
                      ? 'Yes'
                      : 'No' || '-'}
                  </TextDiv>
                </div>
                {/* <div>
                            <Label>Family ID</Label>
                            <TextDiv>{props.studentById.family_id || "-" }</TextDiv> 
                        </div> */}
                <div style={{ gridColumn: 'span 4' }}>
                  <Label>Notes</Label>
                  <div>
                    <TextDiv style={{ height: '80px' }}>
                      {(props.studentById && props.studentById.notes) || '-'}
                    </TextDiv>
                  </div>
                </div>
              </Div>
            </FormSet>
            <ButtonDiv>
              <SaveButton type="submit" onClick={editStudentInfo}>
                Edit
              </SaveButton>
              <DeleteButton type="submit" onClick={areYouSureYouWantToDelete}>
                Delete
              </DeleteButton>
            </ButtonDiv>
          </FormWrap>
          <Modal submitActionCB={deleteStudentInfo} />
        </>
      ) : (
        <StudentForm {...props} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.studentByIdReducer.isLoading,
    studentById: state.studentByIdReducer.studentById,
    isEditing: state.studentByIdReducer.isEditing,
    isTestEditing: state.placementTestReducer.isTestEditing
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getStudentById,
    toggleEditComponent,
    toggleEditPlacement,
    toggleDeleteModel,
    deleteStudentById
  })(StudentInformationTab)
);
