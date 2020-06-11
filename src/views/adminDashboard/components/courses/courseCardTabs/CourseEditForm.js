import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { createDropdown } from '../../../../../utils/helpers.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editCourseById, getDropDownCourses, toggleEditCourse } from '../../../../../actions';

import { ButtonDiv,  CancelButton,  Div,  FormSet,  FormWrap,  Input,  Label,  SaveButton,} from '../../mainStyle/styledComponent';

const CourseEditForm = props => {
  const { courseID } = props;
  const { 
    course_schedule,
    course_type,
    end_time,
    group_type,
    hourly_rate,
    level,
    notes,
    room,
    school_grade,
    section,
    start_time,
    status,
    teacher_id,
    term
   } = props.courseById
  const { register, errors, handleSubmit } = useForm();
  const dropDowns = ['teacher_id']
  
  const submitNow = data => {
    for (const property of dropDowns) {
        data[property] = parseInt(data[property])    
    }
    props.editCourseById(courseID, data);
  }

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
            <Label>Term</Label>
              <select className="dropDown" name="term" defaultValue={term} ref={register({required: true })}>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
              </select>	 
          </div> 

          <div>
            <Label>Course Type</Label>
              <div>
                <Input type="text" className={course_type && "input-error"} name="course_type" defaultValue={course_type} ref={register({required: true})}/>
                  {errors.course_type && errors.course_type.type === "required" && 'Course type is Required'}
              </div>
          </div>
          
          <div>
              <Label>Group Type</Label>
						<div>
              <Input name="group_type" placeholder='Goverment' className="dropDown" defaultValue={group_type} ref={register({required: true})} />
              {errors.group_type && errors.group_type.type === "required" && 'Group type is Required'}
					  </div>
          </div>

          <div>
            <Label>School Grade</Label>
            <div>
              <Input name="school_grade" placeholder='KG 1' defaultValue={school_grade} ref={register({required: false})} />
					  </div>
          </div>

            <div>
              <Label>Course Level</Label>
              <div>
                <Input className="dropDown" name="level" defaultValue={level} ref={register({required: true})} />
						  </div>
          </div>

          <div>
            <Label>Section</Label>
              <div>
                <Input name="section" defaultValue={section} ref={register({required: false})} />
              </div>
          </div>

          <div>
            <Label>Course Schedule</Label>
              <div>
                <Input placeholder='Sat / Sun / Tue'  name="course_schedule" defaultValue={course_schedule} ref={register({required: true})} />
              </div>
          </div>

          <div>
            <Label>Room</Label>
              <div>
                <Input name="room" defaultValue={room} ref={register({required: true})} />
              </div>
          </div>

          <div>
            <Label>Start Date</Label>
              <div>
                <Input type="date" className={errors.start_date && "input-error"} name="start_date" defaultValue={startdate} ref={register({required: true})}/>
                  {errors.start_date && errors.start_date.type === "required" && 'Start Date is Required'}
              </div>
          </div>

          <div>
            <Label>End Date</Label>
              <div>
                <Input type="date" className={errors.end_date && "input-error"} name="end_date" defaultValue={enddate} ref={register({required: true})}/>
                  {errors.end_date && errors.end_date.type === "required" && 'End Date is Required'}
              </div>
          </div>

          <div>
            <Label>Start Time</Label>
              <div>
                <Input type="time" className={errors.start_time && "input-error"} name="start_time" defaultValue={start_time} ref={register({required: true})}/>
                  {errors.start_time && errors.start_time.type === "required" && 'Start Time is Required'}	
              </div>
          </div>

          <div>
            <Label>End Time</Label>
              <div>
                <Input type="time" className={errors.end_time && "input-error"} name="end_time" defaultValue={end_time} ref={register({required: true})}/>
                  {errors.end_time && errors.end_time.type === "required" && 'End Time is Required'}
              </div>
          </div>

          <div>
            <Label>Teacher</Label>
              <div>
                <select className="dropDown"  name="teacher_id" defaultValue={teacher_id} ref={register({required: true})}>
                  {createDropdown(props.teacherDropdown)}
                </select>
              </div>
          </div>

          <div>
            <Label>Hourly Rate</Label>
              <div>
                <Input type="text" placeholder='14' className={errors.hourly_rate && "input-error"} name="hourly_rate" defaultValue={hourly_rate} ref={register({required: true})}/>
                  {errors.hourly_rate && errors.hourly_rate.type === "required" && 'Hourly Rate is Required'}
              </div>
          </div>

          <div>
            <Label>Status</Label>
              <div>
                <select className="dropDown"  name="status" defaultValue={status} ref={register({required: true})}>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Waitlist">Waitlist</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
          </div>

          <div>
            <Label>Course Notes</Label>
              <div>
                <Input type="text" name="notes" defaultValue={notes} ref={register}/>
              </div>
          </div>    

        </Div>
      </FormSet>
        <ButtonDiv>
          <CancelButton onClick={handleCancel}>
            Cancel
          </CancelButton>
          <SaveButton onClick={handleSubmit} type='submit'>Save</SaveButton>
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
