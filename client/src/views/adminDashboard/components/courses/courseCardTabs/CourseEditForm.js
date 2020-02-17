import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { editCourseById, toggleEditCourse, getDropDownCourses } from '../../../../../actions';
import { withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import {  Icon } from 'semantic-ui-react'
import { FormWrap, Input, CancelButton, SaveButton, Div, FormSet, Label, ButtonDiv} from '../../mainStyle/styledComponent'

const CourseEditForm = props => {
    console.log("COURSE EDIT FORM PROPS", props)

    const { courseID } = props;

    // let startdate = new Date(props.studentById.start_date).toISOString().split("T")[0];
    // let enddate = new Date(props.studentById.end_date).toISOString().split("T")[0];
    
    const [state, setState] = useState({
        term_id: props.courseById.term_id,
        course_type_id: props.courseById.course_type_id,
        group_type_id: props.courseById.group_type_id,
        level_id: props.courseById.level_id,
        school_grade_id: props.courseById.school_grade_id,
        section: props.courseById.section,
        // start_date: startdate,
        // end_date: enddate,
        start_time: props.courseById.start_time,
        end_time: props.courseById.end_time,
        room_id: props.courseById.room_id,
        teacher_id: props.courseById.teacher_id,
        hourly_rate: props.courseById.hourly_rate,
        notes: props.courseById.notes,
        status: props.courseById.status,
    })

    useEffect(() => {
        props.getDropDownCourses();
      }, [])

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.editCourseById(courseID, state)
    }
    const handleCancel = e => {
        e.preventDefault();
        props.toggleEditCourse('false', 'false');
    }

    const status = ['Active', 'Completed', 'Waitlist', 'Cancelled'];
    const section = ['A', 'B', 'C']

    return (
        <FormWrap onSubmit={handleSubmit}>
                {/* <Div>
                    <div style={{gridColumn: "span3"}} >
                    </div>
                </Div> */}
            <FormSet>
                <Div>
                    <div>
                        <Label>Term</Label>
                            <Dropdown
                            value={props.courseById.term}
                            onChange={e => setState({ ...state, term_id: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={props.termDropdown}
                            />
                    </div>
                    <div>
                        <Label>Course Type</Label>
                        <Dropdown
                            value={props.courseById.course_type}
                            onChange={e => setState({ ...state, course_type_id: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={props.courseTypeDropdown}
                        />
                    </div>
                    <div>
                        <Label>Group Type</Label>
                        <Dropdown
                            value={props.courseById.group_type}
                            onChange={e => setState({ ...state, group_type_id: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={props.groupTypeDropdown}
                        />
                    </div>
                    <div>
                        <Label>School Grade</Label>
                        <Dropdown
                            value={props.courseById.school_grade}
                            onChange={e => setState({ ...state, school_grade_id: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={props.schoolGradeDropdown}
                        />
                    </div>
                    <div>
                        <Label>Level</Label>
                        <Dropdown
                            value={props.courseById.level}
                            onChange={e => setState({ ...state, level_id: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={props.levelDropdown}
                        />
                    </div>
                    <div>
                        <Label>Section</Label>
                        <Dropdown
                            value={state.section}
                            onChange={e => setState({ ...state, section: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={section}
                        />
                    </div>
                    <div>
                        <Label>Course Schedule</Label>
                        <Dropdown
                            value={props.courseById.course_schedule}
                            onChange={e => setState({ ...state, course_schedule_id: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={props.courseScheduleDropdown}
                        />
                    </div>
                    {/* <div >
                        <Label>Start Date</Label>
                        <Input
                            type="date"
                            name="start_date"
                            value={state.start_date}
                            onChange={handleChange} />
                    </div>
                    <div >
                        <Label>End Date</Label>
                        <Input
                            type="date"
                            name="end_date"
                            value={state.end_date}
                            onChange={handleChange} />
                    </div> */}
                    <div>
                        <Label>Start Time</Label>
                        <Input
                            type='time'
                            name='start_time'
                            value={state.start_time}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Label>End Time</Label>
                        <Input
                            type='time'
                            name='end_time'
                            value={state.end_time}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Label>Room</Label>
                        <Dropdown
                            value={`${props.courseById.room}`}
                            onChange={e => setState({ ...state, room_id: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={props.roomDropdown}
                        />
                    </div>
                    <div>
                        <Label>Teacher</Label>
                        <Dropdown
                            value={props.courseById.teacher}
                            onChange={e => setState({ ...state, teacher_id: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={props.teacherDropdown}
                        />
                    </div>
                    <div>
                        <Label>Hourly Rate</Label>
                        <Input
                            type='text'
                            name='hourly_rate'
                            value={state.hourly_rate}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Label>Status</Label>
                        <Dropdown
                            value={state.status}
                            onChange={e => setState({ ...state, status: e.value })}
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={status}
                        />
                    </div>
                    <div style={{ gridColumn: 'span 4' }}>
                        <Label>Notes</Label>
                        <Input
                            type='text'
                            name='notes'
                            value={state.notes}
                            onChange={handleChange}
                        />
                    </div>
                </Div>
            </FormSet>
                <ButtonDiv>
                    <CancelButton onClick={handleCancel} >
                        Cancel
                    </CancelButton>
                    <SaveButton type="submit" onClick={handleSubmit}> 
                        Save
                    </SaveButton>
                </ButtonDiv>
        </FormWrap>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.coursesTableReducer.isLoading,
        courseById: state.coursesTableReducer.courseById,
        isEdited: state.coursesTableReducer.isEdited,
        isEditing: state.coursesTableReducer.isEditing,
        termDropdown: state.coursesTableReducer.termTable,
        courseTypeDropdown: state.coursesTableReducer.courseTypeTable,
        groupTypeDropdown: state.coursesTableReducer.groupTypeTable,
        schoolGradeDropdown: state.coursesTableReducer.schoolGradeTable,
        levelDropdown: state.coursesTableReducer.levelTable,
        courseScheduleDropdown: state.coursesTableReducer.courseScheduleTable,
        roomDropdown: state.coursesTableReducer.roomTable,
        teacherDropdown: state.coursesTableReducer.teacherTable,
    };
  };
export default withRouter(
    connect(
        mapStateToProps,
        { editCourseById, toggleEditCourse, getDropDownCourses }
    )(CourseEditForm)
)