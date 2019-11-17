import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getParentById, toggleEditParent } from '../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import ParentForm from './ParentForm'
import { FormWrap, Input, Button, Div, FormSet} from '../mainStyle/styledComponent';

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
                     <div style={{gridColumn: "span3"}} >
                        <p style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" }} onClick={editParentInfo}>
                             Edit
                        </p>
                    </div>
                </Div>
                <Div>
                    <div>
                        <label>Father Name</label>
                        <p>{props.parentById.father_name}</p>
                    </div>
                    <div>
                        <label>Mother Name</label>
                        <p>{props.parentById.mother_name}</p>
                    </div>
                    <div>
                        <label>Primary Telephone</label>
                        <p>{props.parentById.primary_telephone}</p>
                    </div>
                    <div>
                        <label>Secondary Telephone</label>
                        <p>{props.parentById.secondary_telephone}</p>
                    </div>
                   
                    <div>
                        <label>Block Code</label>
                        <p>{props.parentById.block_code}</p>
                    </div>
                    <div>
                        <label>Building</label>
                        <p>{props.parentById.building}</p>
                    </div>
                    <div>
                        <label>Flat</label>
                        <p>{props.parentById.flat}</p>
                    </div>
                    <div>
                        <label>Road</label>
                        <p>{props.parentById.road}</p>
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
