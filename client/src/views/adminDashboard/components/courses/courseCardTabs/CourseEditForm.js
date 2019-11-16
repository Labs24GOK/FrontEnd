import React, {useState } from 'react'
import { connect } from 'react-redux';
import { editCouseById, toggleEditCourse } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import { Grid, Segment, Input, Icon } from 'semantic-ui-react'

const CourseEditForm = props => {
    
    const [state, setState] = useState({
        id: props.courseById.id,
        course_type: props.courseById.course_type,
        group_type: props.courseById.group_type,
        school_grade: props.courseById.school_grade,
        level: props.courseById.level,
        section: props.courseById.section,
        subsection: props.courseById.subsection,
        room_id: props.courseById.room_id,
        start_time: props.courseById.start_time,
        end_time: props.courseById.end_time,
        notes: props.courseById.notes,
    })
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.editCouseById(props.courseId, state)
    }
    const handleCancel = e => {
        props.toggleEditCourse();
    }
    return(
        <>
       <div className="ui segment active tab editForm">
                <Grid columns='equal'>
                    
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>
                            Course Type
                        </Segment>
                            <Input
                                type='text'
                                name='course_type'
                                placeholder='Course Type'
                                onChange={handleChange}
                                value={state.course_type}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Group Type</Segment>
                            <Input
                                type='text'
                                name='group_type'
                                placeholder='Group Type'
                                onChange={handleChange}
                                value={state.group_type}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>School Grade</Segment>
                            <Input
                                type='text'
                                name='school_grade'
                                placeholder='School Grade'
                                onChange={handleChange}
                                value={state.school_grade}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Level</Segment>
                            <Input
                                type='text'
                                name='level'
                                placeholder='Level'
                                onChange={handleChange}
                                value={state.level}
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
                        <Segment>Section</Segment>
                        <Input
                                type='text'
                                name='section'
                                placeholder='Section'
                                onChange={handleChange}
                                value={state.section}
                            />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Subsection</Segment>
                        <Input
                                type='text'
                                name='subsection'
                                placeholder='Subsection'
                                onChange={handleChange}
                                value={state.subsection}
                            />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Room</Segment>
                        <Input
                                type='text'
                                name='room_id'
                                placeholder='Room'
                                onChange={handleChange}
                                value={state.room_id}
                            />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Start Time</Segment>
                        <Input
                                type='text'
                                name='start_time'
                                placeholder='Start Time'
                                onChange={handleChange}
                                value={state.start_time}
                            />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>End Time</Segment>
                        <Input
                                type='text'
                                name='end_time'
                                placeholder='End Time'
                                onChange={handleChange}
                                value={state.end_time}
                            />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>
                    <Segment>Notes</Segment>
                        <Input
                                type='text'
                                name='notes'
                                placeholder='Notes'
                                onChange={handleChange}
                                value={state.notes}
                            />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.coursesTableReducer.isLoading,
        courseById: state.coursesTableReducer.courseById,
        isEditing: state.coursesTableReducer.isEditing,
    };
  };
export default withRouter(
    connect(
        mapStateToProps,
        { editCouseById, toggleEditCourse }
    )(CourseEditForm)
)