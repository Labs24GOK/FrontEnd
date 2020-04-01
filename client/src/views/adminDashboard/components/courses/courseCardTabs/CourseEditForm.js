import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { createDropdown } from '../../../../../utils/helpers.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editCourseById, getDropDownCourses, toggleEditCourse } from '../../../../../actions';

import { ButtonDiv,  CancelButton,  Div,  FormSet,  FormWrap,  Input,  Label,  SaveButton,} from '../../mainStyle/styledComponent';

const CourseEditForm = props => {
  const { courseID } = props;
  const { register, errors, handleSubmit, watch } = useForm();
  const dropDowns = ['term_id', 'course_type_id', 'group_type_id', 'school_grade_id', 'level_id', 'course_schedule_id',  'room_id', 'teacher_id']
  
  const submitNow = data => {
    for (const property of dropDowns) {
        data[property] = parseInt(data[property])    
    }
    props.editCourseById(courseID, data);
  }

  const currentlySelectedCourse = watch("course_type_id");

  let startdate = new Date(props.courseById.start_date)
    .toISOString()
    .split('T')[0];
  let enddate = new Date(props.courseById.end_date).toISOString().split('T')[0];

  useEffect(() => {
    props.getDropDownCourses();
  }, []);

  const handleCancel = e => {
    e.preventDefault();
    props.toggleEditCourse('false', 'false');
  };

return (
  <FormWrap onSubmit={handleSubmit(submitNow)}>
    <FormSet>
      <Div>
        <div>
          <Label>Status</Label>
            <div>
              <select name="status" defaultValue={props.courseById.status} className="dropDown" ref={register({required: true})}>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                <option value="Waitlist">Waitlist</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
        </div>
        <div>
          <Label>Term</Label>
            <select name="term_id" defaultValue={props.courseById.term_id} className="dropDown" ref={register({required: true})}>
              {createDropdown(props.termDropdown)}
            </select>
        </div>
        <div>
          <Label>Course Type</Label>
            <select name="course_type_id" defaultValue ={props.courseById.course_type_id} className="dropDown" ref={register({required: true})}>
              {createDropdown(props.courseTypeDropdown)}
            </select>   
        </div>
        <div>
              <Label>Group Type</Label>
						<div>
              <select name="group_type_id" defaultValue={props.courseById.group_type_id} className="dropDown" ref={register({required: true})}>
                {createDropdown(props.groupTypeDropdown)}
              </select>
					  </div>
        </div>  
        <div>
              <Label>Level</Label>
              <div>
                <select name="level_id" defaultValue= {props.courseById.level_id} className="dropDown" ref={register({required: true})}>
                  {createDropdown(props.levelDropdown)}
                </select>  
						  </div>
        </div> 
        <div>
            <Label>Section</Label>
              <div>
                <select name="section"  defaultValue ={props.courseById.section} className="dropDown" ref={register({required: true})}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>  
              </div>
        </div>   
        <div>
          <Label>School Grade</Label>
          <select className={"dropDown " + (currentlySelectedCourse !== "2" ? "grey" : "")} name="school_grade_id" defaultValue={props.courseById.school_grade_id} disabled={currentlySelectedCourse !== "2"} ref={register({required: true})}>
              {createDropdown(props.schoolGradeDropdown)}
          </select>  
        </div>
        <div>
            <Label>Course Schedule</Label>
              <div>
                <select name="course_schedule_id"  className="dropDown" defaultValue={props.courseById.course_schedule} ref={register({required: true})}>
                  {createDropdown(props.courseScheduleDropdown)}
                </select>
              </div>
          </div> 
          <div>
            <Label>Start Date</Label>
              <div>
                <Input name="start_date" type="date" 
                defaultValue={startdate} 
                className={errors.start_date && "input-error"} 
                 ref={register({required: true})}
                />
                  {errors.start_date && errors.start_date.type === "required" && 'Start Date is Required'}
              </div>
          </div>
          <div>
            <Label>End Date</Label>
              <div>
                <Input 
                type="date" 
                defaultValue={enddate} 
                className={errors.end_date && "input-error"} 
                name="end_date" ref={register({required: true})}
                />
                  {errors.end_date && errors.end_date.type === "required" && 'End Date is Required'}
              </div>
          </div>     
          <div>
            <Label>Start Time</Label>
              <div>
                <Input 
                type="time" 
              defaultValue={props.courseById.start_time}
                className={errors.start_time && "input-error"} 
                name="start_time" ref={register({required: true})}
                />
                  {errors.start_time && errors.start_time.type === "required" && 'Start Time is Required'}	
              </div>
          </div>
          <div>
            <Label>End Time</Label>
              <div>
                <Input 
                 defaultValue={props.courseById.end_time}
                type="time" 
                className={errors.end_time && "input-error"} 
                name="end_time" ref={register({required: true})}
                />
                  {errors.end_time && errors.end_time.type === "required" && 'End Time is Required'}
              </div>
          </div>
          <div>
            <Label>Room</Label>
              <div>
                <select 
                defaultValue={`${props.courseById.room}`}
                className="dropDown"  
                name="room_id"
                ref={register({required: true})}
                >
                  {createDropdown(props.roomDropdown)}
                </select>
              </div>
          </div>
          <div>
            <Label>Teacher</Label>
              <div>
                <select 
                defaultValue ={props.courseById.teacher}
                className="dropDown"  
                name="teacher_id" 
                ref={register({required: true})}
                >
                  {createDropdown(props.teacherDropdown)}
                </select>
              </div>
          </div>
          <div>
            <Label>Hourly Rate</Label>
              <div>
                <Input 
                defaultValue = {props.courseById.hourly_rate}
                type="text" 
                className={errors.hourly_rate && "input-error"} 
                name="hourly_rate" 
                ref={register({required: true})}
                />
                  {errors.hourly_rate && errors.hourly_rate.type === "required" && 'Hourly Rate is Required'}
              </div>
          </div>
          <div>
            <Label>Notes</Label>
              <div>
                <Input 
                defaultValue = {props.courseById.notes}
                type="text" 
                name="notes" ref={register}
                />
              </div>
          </div>   
          </Div>
    </FormSet>
        <ButtonDiv>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        <SaveButton type='submit' onClick={handleSubmit}>
          Save
        </SaveButton>
      </ButtonDiv>
  </FormWrap>
);
};

const mapStateToProps = state => {
  return {
    courseById: state.coursesTableReducer.courseById,
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
  connect(mapStateToProps, {
    editCourseById,
    toggleEditCourse,
    getDropDownCourses,
  })(CourseEditForm)
);
