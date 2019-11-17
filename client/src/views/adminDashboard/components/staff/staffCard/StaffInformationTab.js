import React, { useState, useEffect } from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getStaffById, toggleStaffEditComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import StaffForm from './StaffForm';
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
        props.isLoading ? <Spin style={{ marginTop: '150px' }} size="large" /> :
            <div className="gridView" style={{ margin: '3%'}}>
                {
                    !props.isEditing ?
                        <Grid columns='equal' style={{margin: '10px 5px 0px 5px'}}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment>Staff ID</Segment>
                                    <Segment>{props.staffById.id}</Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>Name</Segment>
                                    <Segment>{props.staffById.name}</Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>Short Name</Segment>
                                    <Segment>{props.staffById.short_name}</Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>CPR</Segment>
                                    <Segment>{props.staffById.cpr}</Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment style={{ color: "#26ABBD", cursor: "pointer"}} onClick={editStaffInfo}>
                                        <Icon name="edit" style={{ color: "#26ABBD", cursor: "pointer" }} /> Edit
                    </Segment>
                                </Grid.Column>

                            </Grid.Row>


                            <Grid.Row>
                                <Grid.Column>
                                    <Segment>Mobile Number</Segment>
                                    <Segment>{props.staffById.mobile_number}</Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>Accent</Segment>
                                    <Segment>{props.staffById.accent}</Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>Gender</Segment>
                                    <Segment>{props.staffById.gender}</Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>Birth date</Segment>
                                    <Segment>{birthdate}</Segment>
                                </Grid.Column>

                                <Grid.Column>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                    <Segment>Teaching Rate</Segment>
                                    <Segment>{props.staffById.teaching_rate}</Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>Admin</Segment>
                                    <Segment>{props.staffById.admin}</Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>Active</Segment>
                                    <Segment>{props.staffById.active}</Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>User ID</Segment>
                                    <Segment>{props.staffById.user_id}</Segment>
                                </Grid.Column>

                                <Grid.Column>

                                </Grid.Column>

                            </Grid.Row>

                        </Grid>
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
