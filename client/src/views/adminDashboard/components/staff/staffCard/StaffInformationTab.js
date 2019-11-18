import React, { useState, useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getStaffById, toggleStaffEditComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StaffForm from './StaffForm';
import { FormWrap, Div, TextDiv } from '../../mainStyle/styledComponent';
import { Spin, Table } from 'antd';


const StaffInformationTab = props => {
    useEffect(() => {
        props.getStaffById(props.staffID)
    }, [])

    let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; //'long'
    let birthdate = new Date(props.staffById.birthdate).toLocaleDateString('en-GB', options)


    const editStaffInfo = e => {
        e.preventDefault();
        props.toggleStaffEditComponent();
    }

    return (
        <div>
        {!props.isEditing ?
            <FormWrap>
                    <div style={{padding: "15px",color: "#26ABBD", cursor: "pointer", textAlign: "right"}} onClick={editStaffInfo}>
                        <Icon name='edit' style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" }}/> Edit
                    </div>
                <Div>
                    <div>
                        <label>Staff ID</label>
                        <TextDiv>{props.staffById.id}</TextDiv>
                    </div>

                    <div>
                        <label>Name</label>
                        <TextDiv>{props.staffById.name}</TextDiv>
                    </div>

                    <div>
                        <label>Short Name</label>
                        <TextDiv>{props.staffById.short_name}</TextDiv>
                    </div>

                    <div>
                        <label>CPR</label>
                        <TextDiv>{props.staffById.cpr}</TextDiv>
                    </div>

                    <div>
                        <label>Mobile Number</label>
                        <TextDiv>{props.staffById.mobile_number}</TextDiv>
                    </div>

                    <div>
                        <label>Accent</label>
                        <TextDiv>{props.staffById.accent}</TextDiv>
                    </div>

                    <div>
                        <label>Gender</label>
                        <TextDiv>{props.staffById.gender}</TextDiv>
                    </div>

                    <div>
                        <label>Birth date</label>
                        <TextDiv>{birthdate}</TextDiv>
                    </div>
    
                    <div>
                        <label>Teaching Rate</label>
                        <TextDiv>{props.staffById.teaching_rate}</TextDiv>
                    </div>
                    <div>
                        <label>Admin</label>
                        <TextDiv>{props.staffById.admin}</TextDiv>
                    </div>
                    <div>
                        <label>Active</label>
                        <TextDiv>{props.staffById.active}</TextDiv>
                    </div>
                    <div>
                        <label>User ID</label>
                        <TextDiv>{props.staffById.user_id}</TextDiv>
                    </div>

                    <div>
                    </div>
                </Div>
                </FormWrap>
                : <StaffForm {...props} />
        }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.staffByIdReducer.isLoading,
        staffById: state.staffByIdReducer.staffById,
        isEditing: state.staffByIdReducer.isEditing,
    };
};



export default withRouter(
    connect(
        mapStateToProps,
        { getStaffById, toggleStaffEditComponent }
    )(StaffInformationTab)
)
