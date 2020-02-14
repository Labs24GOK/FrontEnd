import React, {useState } from 'react'
import { connect } from 'react-redux';
import { editCouseById, toggleEditCourse } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
// import {  Icon } from 'semantic-ui-react'
import { FormWrap, Input, CancelButton, SaveButton, Div, FormSet, Label} from '../../mainStyle/styledComponent'

const CourseEditForm = props => {
    
    const [state, setState] = useState({
        term_id: props.courseById.term_id,
        course_type: props.courseById.course_type,
        group_type: props.courseById.group_type,
        school_grade: props.courseById.school_grade,
        level: props.courseById.level,
        section: props.courseById.section,
        room_id: props.courseById.room_id,
        start_time: props.courseById.start_time,
        end_time: props.courseById.end_time,
        notes: props.courseById.notes,
        status: props.courseById.status
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
       <div>
            <FormWrap onSubmit={handleSubmit}>
                <Div>
                    <div style={{gridColumn: "span3"}} >
                    </div>
                </Div>
                <FormSet>
                    <Div>
                        <div>
                            <Label>Course Type</Label>
                            <Input
                                type='text'
                                name='course_type'
                                placeholder='Course Type'
                                onChange={handleChange}
                                value={state.course_type}
                            />
                        </div>
                        <div>
                            <Label>Group Type</Label>
                            <Input
                                type='text'
                                name='group_type'
                                placeholder='Group Type'
                                onChange={handleChange}
                                value={state.group_type}
                            />
                        </div>
                        <div>
                            <Label>School Grade</Label>
                            <Input
                                type='text'
                                name='school_grade'
                                placeholder='School Grade'
                                onChange={handleChange}
                                value={state.school_grade}
                            />
                        </div>
                        <div>
                            <Label>Level</Label>
                            <Input
                                type='text'
                                name='level'
                                placeholder='Level'
                                onChange={handleChange}
                                value={state.level}
                            />
                        </div>
                    <div>
                        <Label>Section</Label>
                        <Input
                                type='text'
                                name='section'
                                placeholder='Section'
                                onChange={handleChange}
                                value={state.section}
                            />
                    </div>
                    <div>
                        <Label>Room</Label>
                        <Input
                                type='text'
                                name='room_id'
                                placeholder='Room'
                                onChange={handleChange}
                                value={state.room_id}
                            />
                    </div>
                    <div>
                        <Label>Start Time</Label>
                        <Input
                                type='text'
                                name='start_time'
                                placeholder='Start Time'
                                onChange={handleChange}
                                value={state.start_time}
                            />
                    </div>
                    <div>
                        <Label>End Time</Label>
                        <Input
                                type='text'
                                name='end_time'
                                placeholder='End Time'
                                onChange={handleChange}
                                value={state.end_time}
                            />
                    </div>
                <div>
                    <Label>Notes</Label>
                        <Input
                                type='text'
                                name='notes'
                                placeholder='Notes'
                                onChange={handleChange}
                                value={state.notes}
                            />
                    </div>
                    </Div>
                </FormSet>
                <div style={{ alignSelf: 'flex-end' }}>
                    <CancelButton onClick={handleCancel} >
                        Cancel
                    </CancelButton>
                    <SaveButton type="submit" onClick={handleSubmit}> 
                        Save
                    </SaveButton>
                </div>
            </FormWrap>
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