import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


import { FormWrap, Input, Button } from '../mainStyle/styledComponent.js';


const CourseRegistrationForm = (props) => {

    const genderArr = ['hi', 'bye']

    const [course, setCourse] = useState({
        term_id: '',
        course_type_id: '',
        group_type_id: '',
        school_grade_id: '',
        level_id: '',
        course_schedule_id: '',
        room_id: '',
        teacher_id: '',
        section: '',
        subsection: '',
        hourly_rate: '',
        start_time: '16:30:00',
        end_time: '18:30:30',
        notes: '',
        status: '',
    })

    const [touched, setTouched] = useState({
        term_id: false,
        course_type_id: false,
        group_type_id: false,
        school_grade_id: false,
        level_id: false,
        course_schedule_id: false,
        room_id: false,
        teacher_id: false,
        section: false,
        subsection: false,
        hourly_rate: false,
        start_time: false,
        end_time: false,
        notes: false,
        status: false,
    })


    function handleChange(event) {
       setCourse({
           ...course,
           [event.target.name]: event.target.value
       })
    }


    function handleSubmit(event) {
        event.preventDefault();

    
    }

    const handleCancel = () => {

    }

    const handleBlur = field => evt => {
        setTouched({
            ...touched,
            [field]: true
        })
    }

    const validate = (state) => {
        const {
            term_id,
            course_type_id,
            group_type_id,
            school_grade_id,
            level_id,
            course_schedule_id,
            room_id,
            teacher_id,
            section,
            subsection,
            hourly_rate,
            start_time,
            end_time,
            notes,
            status
        } = state;
            return {
                term_id: term_id.length === 0,
                course_type_id: course_type_id.length === 0,
                group_type_id: group_type_id.length === 0,
                school_grade_id: school_grade_id.length === 0,
                level_id: level_id.length === 0,
                course_schedule_id: course_schedule_id.length === 0,
                room_id: room_id.length === 0,
                teacher_id: teacher_id.length === 0,
                section: section.length === 0,
                subsection: subsection.length === 0,
                hourly_rate: hourly_rate.length === 0,
                start_time: start_time.length === 0,
                end_time: end_time.length === 0,
                notes: notes.length === 0,
                status: status.length === 0
            }
    }

    const canBeSubmitted = () => {
        const errors = validate(course);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }
   

    const errors = validate(course);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = field => {
        const hasError = errors[field];
        const shouldShow = touched[field];
        return hasError ? shouldShow : false;
    };

    return (
        <FormWrap onSubmit={handleSubmit} style={{ margin: '30px 10px 20px 10px' }}>
            <fieldset style={{ border: '1px solid transparent', margin: '10px 5px 0px 5px', background: '#E0EBF0' }}>
                <div style={{
                    display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gridGap: '15px', margin: '10px'
                }}>
                    <div>
                        <label>Section</label>
                        <div style={shouldMarkError('section')? {border: '1px solid red'} : null}>
                            <Input
                                type="text"
                                name="section"
                                value={course.section}
                                onChange={handleChange} 
                                onBlur={handleBlur('section')}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Subsection</label>
                        <div style={shouldMarkError('subsection')? {border: '1px solid red'} : null}>
                            <Input
                                type="text"
                                name="subsection"
                                value={course.subsection}
                                onChange={handleChange} 
                                onBlur={handleBlur('subsection')}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Hourly Rate</label>
                        <div style={shouldMarkError('hourly_rate')? {border: '1px solid red'} : null}>
                            <Input
                                type="text"
                                name="hourly_rate"
                                value={course.hourly_rate}
                                onChange={handleChange} 
                                onBlur={handleBlur('hourly_rate')}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Start Time</label>
                        <div style={shouldMarkError('start_time')? {border: '1px solid red'} : null}>
                            <Input
                                type="text"
                                name="start_time"
                                value={course.start_time}
                                onChange={handleChange} 
                                onBlur={handleBlur('start_time')}
                            />
                        </div>
                    </div>

                    <div>
                        <label>End Time</label>
                        <div style={shouldMarkError('end_time')? {border: '1px solid red'} : null}>
                            <Input
                                type="text"
                                name="end_time"
                                value={course.end_time}
                                onChange={handleChange} 
                                onBlur={handleBlur('end_time')}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Notes</label>
                        <div style={shouldMarkError('notes')? {border: '1px solid red'} : null}>
                            <Input
                                type="text"
                                name="notes"
                                value={course.notes}
                                onChange={handleChange} 
                                onBlur={handleBlur('notes')}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Status</label>
                        <div style={shouldMarkError('status')? {border: '1px solid red'} : null}>
                            <Input
                                type="text"
                                name="status"
                                value={course.status}
                                onChange={handleChange} 
                                onBlur={handleBlur('status')}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Term</label>
                        <div style={shouldMarkError('term_id')? {border: '1px solid red'} : null}>
                            <Dropdown
                                value={course.term_id}
                                onChange={(e) => setCourse({ ...course, term_id: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={genderArr}
                                onBlur={handleBlur('term_id')}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Course Type</label>
                        <div style={shouldMarkError('course_type_id')? {border: '1px solid red'} : null}>
                            <Dropdown
                                value={course.course_type_id}
                                onChange={(e) => setCourse({ ...course, course_type_id: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={genderArr}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Group Type</label>
                        <div style={shouldMarkError('group_type_id')? {border: '1px solid red'} : null}>
                            <Dropdown
                                value={course.group_type_id}
                                onChange={(e) => setCourse({ ...course, group_type_id: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={genderArr}
                            />
                        </div>
                    </div>

                    <div>
                        <label>School Grade</label>
                        <div style={shouldMarkError('school_grade_id')? {border: '1px solid red'} : null}>
                            <Dropdown
                                value={course.school_grade_id}
                                onChange={(e) => setCourse({ ...course, school_grade_id: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={genderArr}
                            />
                        </div>
                    </div>


                    <div>
                        <label>Level</label>
                        <div style={shouldMarkError('level_id')? {border: '1px solid red'} : null}>
                            <Dropdown
                                value={course.level_id}
                                onChange={(e) => setCourse({ ...course, level_id: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={genderArr}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Course Schedule</label>
                        <div style={shouldMarkError('course_schedule_id')? {border: '1px solid red'} : null}>
                            <Dropdown
                                value={course.course_schedule_id}
                                onChange={(e) => setCourse({ ...course, course_schedule_id: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={genderArr}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Room</label>
                        <div style={shouldMarkError('room_id')? {border: '1px solid red'} : null}>
                            <Dropdown
                                value={course.room_id}
                                onChange={(e) => setCourse({ ...course, room_id: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={genderArr}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Teacher</label>
                        <div style={shouldMarkError('teacher_id')? {border: '1px solid red'} : null}>
                            <Dropdown
                                value={course.teacher_id}
                                onChange={(e) => setCourse({ ...course, teacher_id: e })}
                                controlClassName='myControlClassName'
                                className='dropdown'
                                options={genderArr}
                            />
                        </div>
                    </div>

        </div>
      </fieldset>
        <div style={{ alignSelf: 'flex-end' }}>
            <Button onClick={handleCancel} style={{ background: '#C73642', width: '80px' }}>
                Cancel
            </Button>
            <Button type="submit" disabled={isDisabled}>
                Add student
            </Button>
        </div>
    </FormWrap >
  )
}



const mapStateToProps = state => {
    return {

    };
};

export default withRouter(
    connect(
        mapStateToProps,
        {}
    )(CourseRegistrationForm)
);
