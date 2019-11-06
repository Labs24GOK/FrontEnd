import React from 'react'
import { Grid, Segment, Form } from 'semantic-ui-react'

const CourseInformationTab = props => (
  <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment>Course Type</Segment>
        <Segment>General</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Group Type</Segment>
        <Segment>KinderGarten</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Grade</Segment>
        <Segment>Primary 1-3</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Level</Segment>
        <Segment>Intro</Segment>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>Section</Segment>
        <Segment>A</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Subsection</Segment>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Room</Segment>
        <Segment>12</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Start Time</Segment>
        <Segment>3:00pm</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>End Time</Segment>
        <Segment>6:00pm</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>Notes</Segment>
        <Segment><Form> <Form.TextArea placeholder='Enter any notes here...' style={{"padding-left":"0"}}/></Form></Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default CourseInformationTab