import React, { useState} from 'react';
import { connect } from 'react-redux'
import { Grid, Segment, Input, Icon, Form } from 'semantic-ui-react'
import { addParent, toggleAddParentComponent} from '../../../../actions';
import { withRouter, Link } from 'react-router-dom';




const ParentRegistrationForm = (props) => {
console.log ( 'parent registry props', props)

  const [state, setState] = useState({
    id: '',
    mother_name: '',
    father_name: '',
    block_code: '',
    road: '',
    building: '',
    flat: '',
    primary_telephone: '',
    secondary_telephone: '',
    user_id: '',
    // created_at: '',
    // updated_at: ''
  })


  const handleChange = e => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
}


const formSubmit = e => {
    console.log('add parent state sent', state)
  e.preventDefault();
  props.addParent(state)
}

const cancelBtn = e => {
    e.preventDefault()
    props.toggleAddParentComponent()
}


  return(
    <div className="ui segment active tab editForm">
    <Grid columns='equal'>
      
            {/* row 1 */}
            <Grid.Row>
                <Grid.Column>
                    <Segment> ID</Segment>
                    <Input 
                        type='text'
                        name='id'
                        placeholder=' ID'
                        onChange={handleChange}
                        value={state.id}
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
                    <Segment>Father Name</Segment>
                    <Input 
                        type='text'
                        name='father_name'
                        placeholder='Father Name'
                        onChange={handleChange}
                        value={state.father_name}
                    />
                </Grid.Column>
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



                <Grid.Column >
                    <Segment.Group horizontal style={{ background: "#E0EBF0" }}>
                        <Segment.Inline onClick={formSubmit} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" ,margin: 0}}>
                        <Icon name="save" type='submit' style={{ color: "#26ABBD", cursor: "pointer" }} /> Save
                        </Segment.Inline>
                        <Segment.Inline onClick={cancelBtn} style={{ color: "#C73642", cursor: "pointer", width: "fit-content", "margin-left": "10px" }}>
                        <Icon name="cancel" style={{ color: "#C73642", cursor: "pointer" }}  /> Cancel
                        </Segment.Inline>
                        </Segment.Group>
                </Grid.Column>
                </Grid.Row>
                
                {/* row 2 */}
                <Grid.Row>
                <Grid.Column>
                    <Segment>Road</Segment>
                    <Input 
                        type='text' //use date for calendar
                        name='road'
                        placeholder='Road'
                        onChange={handleChange}
                        value={state.road}
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
                    <Segment>Primary Telephone</Segment>
                    <Input 
                        type='text'
                        name='primary_telephone'
                        placeholder='Primary Telephone'
                        onChange={handleChange}
                        value={state.primary_telephone}
                    />
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>
                    <Segment>Secondary Telephone</Segment>
                    <Input 
                        type='text'
                        name='secondary_telephone'
                        placeholder='Secondary Telephone'
                        onChange={handleChange}
                        value={state.secondary_telephone}
                    />
                </Grid.Column>
              
              {/* row3 */}
                <Grid.Column>
                    <Segment>User Id</Segment>
                    <Input 
                        type='text'
                        name='user_id'
                        placeholder='User Id'
                        onChange={handleChange}
                        value={state.user_id}
                    />
                </Grid.Column>


                <Grid.Column>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>
            </Grid.Row>
           </Grid>
    </div>
  )
}


const mapStateToProps = state => {
  return {
      isLoading: state.parentReducer.isLoading,
      parentById: state.parentReducer.parentById,
      isPosting: state.parentReducer.isPosting,
      isPosted: state.parentReducer.isPosted
  };
};



export default withRouter(
  connect(
    mapStateToProps,
    { addParent, toggleAddParentComponent}
)(ParentRegistrationForm)
)



