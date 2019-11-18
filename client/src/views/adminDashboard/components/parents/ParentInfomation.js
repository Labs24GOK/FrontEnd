import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getParentById, toggleEditParent } from '../../../../actions';
import { withRouter } from 'react-router-dom';
import ParentForm from './ParentForm'
import { FormWrap, Div, TextDiv, SaveButton, FormSet, ButtonDiv, Label } from '../mainStyle/styledComponent';
const ParentInfomation = props => {
    useEffect(() => {
        props.getParentById(props.parentId)
    }, [])

    const editParentInfo = e => {
        e.preventDefault();
        props.toggleEditParent();
    }

    return (
        <div>
            {!props.isEditing ?
            <FormWrap>
                <FormSet>
                <Div>
                    <div>
                        <Label>Father Name</Label>
                        <TextDiv>{props.parentById.father_name || "-" }</TextDiv>
                    </div>
                    <div>
                        <Label>Mother Name</Label>
                        <TextDiv>{props.parentById.mother_name || "-" }</TextDiv>
                    </div>
                    <div>
                        <Label>Primary Telephone</Label>
                        <TextDiv>{props.parentById.primary_telephone || "-" }</TextDiv>
                    </div>
                    <div>
                        <Label>Secondary Telephone</Label>
                        <TextDiv>{props.parentById.secondary_telephone || "-" }</TextDiv>
                    </div>
                   
                    <div>
                        <Label>Block Code</Label>
                        <TextDiv>{props.parentById.block_code || "-" }</TextDiv>
                    </div>
                    <div>
                        <Label>Building</Label>
                        <TextDiv>{props.parentById.building || "-" }</TextDiv>
                    </div>
                    <div>
                        <Label>Flat</Label>
                        <TextDiv>{props.parentById.flat || "-" }</TextDiv>
                    </div>
                    <div>
                        <Label>Road</Label>
                        <TextDiv>{props.parentById.road || "-" }</TextDiv>
                    </div>
                </Div>
                </FormSet>
                <ButtonDiv>
                    <SaveButton type="submit" onClick={editParentInfo}> 
                        Edit
                    </SaveButton>
                </ButtonDiv>
                
            </FormWrap>
                : <ParentForm {...props} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.parentReducer.isLoading,
        parentById: state.parentReducer.parentById,
        isEditing: state.parentReducer.isEditing,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getParentById, toggleEditParent }
    )(ParentInfomation)
)
 