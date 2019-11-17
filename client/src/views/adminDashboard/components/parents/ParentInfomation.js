import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getParentById, toggleEditParent } from '../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import ParentForm from './ParentForm'
import { FormWrap, Input, Button, Div, TextDiv } from '../mainStyle/styledComponent';
import { Icon } from 'semantic-ui-react';
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
                <Div>
                     <div style={{gridColumn: "span3", marginRight: "5px"}} >
                        <Icon name='edit' style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" }} onClick={editParentInfo}/>
                             Edit
                        
                    </div>
                </Div>
                <Div>
                    <div>
                        <label>Father Name</label>
                        <TextDiv>{props.parentById.father_name}</TextDiv>
                    </div>
                    <div>
                        <label>Mother Name</label>
                        <TextDiv>{props.parentById.mother_name}</TextDiv>
                    </div>
                    <div>
                        <label>Primary Telephone</label>
                        <TextDiv>{props.parentById.primary_telephone}</TextDiv>
                    </div>
                    <div>
                        <label>Secondary Telephone</label>
                        <TextDiv>{props.parentById.secondary_telephone}</TextDiv>
                    </div>
                   
                    <div>
                        <label>Block Code</label>
                        <TextDiv>{props.parentById.block_code}</TextDiv>
                    </div>
                    <div>
                        <label>Building</label>
                        <TextDiv>{props.parentById.building}</TextDiv>
                    </div>
                    <div>
                        <label>Flat</label>
                        <TextDiv>{props.parentById.flat}</TextDiv>
                    </div>
                    <div>
                        <label>Road</label>
                        <TextDiv>{props.parentById.road}</TextDiv>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </Div>
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
