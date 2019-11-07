import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getParentById, toggleEditParent } from '../../../../actions';
import { withRouter, Link } from 'react-router-dom';
import ParentForm from './ParentForm'
import { Grid, Segment, Form, Icon } from 'semantic-ui-react'

const ParentInfomation = props => {
    useEffect(() => {
        props.getParentById(props.parentId)
    }, [])

    const editParentInfo = e => {
        e.preventDefault();
        props.toggleEditParent();
   }
    
    return (
        <>
        {!props.isEditing ? 
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>Father Name</Segment>
                        <Segment>{props.parentById.father_name}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Mother Name</Segment>
                        <Segment>{props.parentById.mother_name}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Primary Telephone</Segment>
                        <Segment>{props.parentById.primary_telephone}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Secondary Telephone</Segment>
                        <Segment>{props.parentById.secondary_telephone}</Segment>
                    </Grid.Column>
                    <Grid.Column >
                        <Segment style={{color: "#26ABBD", cursor:"pointer", width:"fit-content"}} onClick={editParentInfo}>
                            <Icon name="edit" style = {{color:"#26ABBD",cursor:"pointer"}}/> Edit 
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>Block Code</Segment>
                        <Segment>{props.parentById.block_code}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Building</Segment>
                        <Segment>{props.parentById.building}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Flat</Segment>
                        <Segment>{props.parentById.flat}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Road</Segment>
                        <Segment>{props.parentById.road}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <div></div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
             : <ParentForm {...props}/>}
        </>
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
