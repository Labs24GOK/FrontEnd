import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStaffById, toggleStaffEditComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StaffForm from './StaffForm';
import {
  FormWrap,
  Div,
  TextDiv,
  SaveButton,
  FormSet,
  ButtonDiv,
  Label
} from '../../mainStyle/styledComponent';

const StaffInformationTab = props => {
  useEffect(() => {
    props.getStaffById(props.staffID);
  }, []);

  let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
  let birthdate = new Date(props.staffById.birthdate)
    .toLocaleDateString
    // 'en-GB',
    // options
    ();

  const editStaffInfo = e => {
    e.preventDefault();
    props.toggleStaffEditComponent();
  };

  return (
    <div>
      {!props.isEditing ? (
        <FormWrap>
          <FormSet>
            <Div>
              <div>
                <Label>Staff ID</Label>
                <TextDiv>{props.staffById.staff_id || '-'}</TextDiv>
              </div>

              <div>
                <Label>Name</Label>
                <TextDiv>{props.staffById.name || '-'}</TextDiv>
              </div>

              <div>
                <Label>Short Name</Label>
                <TextDiv>{props.staffById.short_name || '-'}</TextDiv>
              </div>

              <div>
                <Label>CPR</Label>
                <TextDiv>{props.staffById.cpr || '-'}</TextDiv>
              </div>

              <div>
                <Label>Mobile Number</Label>
                <TextDiv>{props.staffById.mobile_number || '-'}</TextDiv>
              </div>

              <div>
                <Label>Accent</Label>
                <TextDiv>{props.staffById.accent || '-'}</TextDiv>
              </div>

              <div>
                <Label>Gender</Label>
                <TextDiv>{props.staffById.gender || '-'}</TextDiv>
              </div>

              <div>
                <Label>Birth date</Label>
                <TextDiv>{birthdate || '-'}</TextDiv>
              </div>

              <div>
                <Label>Teaching Rate</Label>
                <TextDiv>{props.staffById.teaching_rate || '-'}</TextDiv>
              </div>
              <div>
                <Label>Admin</Label>
                <TextDiv>
                  {props.staffById.user_type === 'admin' ? 'Yes' : 'No' || '-'}
                </TextDiv>
              </div>
              <div>
                <Label>Active</Label>
                <TextDiv>
                  {props.staffById.active ? 'Yes' : 'No' || '-'}
                </TextDiv>
              </div>
              <div>
                <Label>User ID</Label>
                <TextDiv>{props.staffById.user_id || '-'}</TextDiv>
              </div>
            </Div>
          </FormSet>
          <ButtonDiv>
            <SaveButton type="submit" onClick={editStaffInfo}>
              Edit
            </SaveButton>
          </ButtonDiv>
        </FormWrap>
      ) : (
        <StaffForm {...props} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.staffByIdReducer.isLoading,
    staffById: state.staffByIdReducer.staffById,
    isEditing: state.staffByIdReducer.isEditing
  };
};

export default withRouter(
  connect(mapStateToProps, { getStaffById, toggleStaffEditComponent })(
    StaffInformationTab
  )
);
