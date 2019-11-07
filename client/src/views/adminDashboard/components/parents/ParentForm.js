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
        primary_telephone: props.parentById.primary_telephone,
        secondary_telephone: props.parentById.secondary_telephone,
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
    const handleCancel = e => {
        e.preventDefault();
        props.toggleEditParent();
    }
    return(
        <>
       <div className="ui segment active tab editForm">
                <Grid columns='equal'>
                    
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>
                            Father Name
                        </Segment>
                            <Input
                                type='text'
                                name='father_name'
                                placeholder='Father Name'
                                onChange={handleChange}
                                value={state.father_name}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Mother Name</Segment>
                            <Input
                                type='text'
                                name='mother_name'
                                placeholder='Mother Name'
                                onChange={handleChange}
                                value={state.mother_name}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Primary Telephone</Segment>
                            <Input
                                type='text'
                                name='secondary_telephone'
                                placeholder='Primary Telephone'
                                onChange={handleChange}
                                value={state.secondary_telephone}
                            />
                        </Grid.Column>
                        <Grid.Column >
                            <Segment.Group horizontal style={{ background: "#E0EBF0", "box-shadow":"none", border:"none" }}>
                                <Segment.Inline onClick={handleSubmit} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" ,margin: 0}}>
                                    <Icon name="save" style={{ color: "#26ABBD", cursor: "pointer" }} /> Save
                            </Segment.Inline>
                                <Segment.Inline onClick={handleCancel} style={{ color: "#C73642", cursor: "pointer", width: "fit-content", "margin-left": "10px" }}>
                                    <Icon name="cancel" style={{ color: "#C73642", cursor: "pointer" }} /> Cancel
                            </Segment.Inline>
                            </Segment.Group>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                        <Segment>Block Code</Segment>
                        <Input
                                type='text'
                                name='block_code'
                                placeholder='Block Code'
                                onChange={handleChange}
                                value={state.block_code}
                            />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Building</Segment>
                        <Input
                                type='text'
                                name='building'
                                placeholder='Building'
                                onChange={handleChange}
                                value={state.building}
                            />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Flat</Segment>
                        <Input
                                type='text'
                                name='flat'
                                placeholder='Flat'
                                onChange={handleChange}
                                value={state.flat}
                            />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Road</Segment>
                        <Input
                                type='text'
                                name='road'
                                placeholder='Road'
                                onChange={handleChange}
                                value={state.road}
                            />
                    </Grid.Column>
                    <Grid.Column>
                        <div></div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
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