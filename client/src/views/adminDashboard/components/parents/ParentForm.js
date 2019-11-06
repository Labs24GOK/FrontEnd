import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { editParentById, toggleEditParent } from '../../../../actions';
import { withRouter } from 'react-router-dom';
import { Grid, Segment, Input, Icon } from 'semantic-ui-react'
const ParentForm = props => {
    console.log('props.parentById.id',props.parentById.id)
    
    const [state, setState] = useState({
        id: props.parentById.id,
        father_name: props.parentById.father_name,
        mother_name: props.parentById.mother_name,
        telephone: props.parentById.telephone,
        block_code: props.parentById.block_code,
        building: props.parentById.building,
        flat: props.parentById.flat,
        road: props.parentById.road
    })
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.editParentById(props.parentId, state)
    }

    return(
        
        <>
       
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.parentReducer.isLoading,
        parentById: state.parentReducer.parentById,
        isEditing: state.parentReducer.isEditting,
    };
  };
export default withRouter(
    connect(
        mapStateToProps,
        { editParentById, toggleEditParent }
    )(ParentForm)
)