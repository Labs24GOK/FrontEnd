import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCourse, getDropDownCourses, getDropDown } from '../../../../actions';
import { useForm } from 'react-hook-form';
import { createDropdown } from '../../../../utils/helpers.js';
import { CancelButton, AddButton, ButtonDiv, Div, FormSet, FormWrap, Input,Label,} from '../mainStyle/styledComponent.js';

import '../../../../styles/table.scss';
import '../mainStyle/mainTable.scss';

const CourseRegistrationForm = props => {

  const { register, errors, handleSubmit, watch } = useForm();
  const dropDowns = ['term_id', 'course_type_id', 'group_type_id', 'school_grade_id', 'level_id', 'course_schedule_id',  'room_id', 'teacher_id']
  const submitNow = data => {
    for (const property of dropDowns) {
        data[property] = parseInt(data[property])    
    }
    props.addCourse(data);
    props.setForm(false);
  }
  
  const currentlySelectedCourse = watch("course_type_id");

	useEffect(() => {
		props.getDropDownCourses();
  }, []);

  const handleCancel = event => {
    event.preventDefault();
    props.setForm(false);
  };

  return (
    <FormWrap onSubmit={handleSubmit(submitNow)}>
      <FormSet>
        <Div>
          <div>
            <Label>Term</Label>
              <select className="dropDown" name="term_id" ref={register({required: true })}>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
              </select>	 
          </div> 

          <div>
            <Label>Course Type</Label>
              <div>
                <Input type="text" className={errors.course_type && "input-error"} name="course_type" ref={register({required: true})}/>
                  {errors.course_type && errors.course_type.type === "required" && 'Course type is Required'}
              </div>
          </div>
          
          <div>
              <Label>Group Type</Label>
						<div>
              <Input name="group_type" placeholder='Goverment' className="dropDown" ref={register({required: true})} />
              {errors.group_type && errors.group_type.type === "required" && 'Group type is Required'}
					  </div>
          </div>

          <div>
            <Label>School Grade</Label>
            <div>
              <Input name="school_grade" placeholder='KG 1' ref={register({required: false})} />
					  </div>
          </div>

            <div>
              <Label>Course Level</Label>
              <div>
                <Input className="dropDown" name="level" ref={register({required: true})} />
						  </div>
          </div>

          <div>
            <Label>Section</Label>
              <div>
                <Input name="section" ref={register({required: false})} />
              </div>
          </div>

          <div>
            <Label>Course Schedule</Label>
              <div>
                <Input placeholder='Sat / Sun / Tue'  name="course_schedule" ref={register({required: true})} />
              </div>
          </div>

          <div>
            <Label>Room</Label>
              <div>
                <select className="dropDown"  name="room" ref={register({required: true})}>
                  {createDropdown(props.roomDropdown)}
                </select>
              </div>
          </div>

          <div>
            <Label>Start Date</Label>
              <div>
                <Input type="date" className={errors.start_date && "input-error"} name="start_date" ref={register({required: true})}/>
                  {errors.start_date && errors.start_date.type === "required" && 'Start Date is Required'}
              </div>
          </div>

          <div>
            <Label>End Date</Label>
              <div>
                <Input type="date" className={errors.end_date && "input-error"} name="end_date" ref={register({required: true})}/>
                  {errors.end_date && errors.end_date.type === "required" && 'End Date is Required'}
              </div>
          </div>

          <div>
            <Label>Start Time</Label>
              <div>
                <Input type="time" className={errors.start_time && "input-error"} name="start_time" ref={register({required: true})}/>
                  {errors.start_time && errors.start_time.type === "required" && 'Start Time is Required'}	
              </div>
          </div>

          <div>
            <Label>End Time</Label>
              <div>
                <Input type="time" className={errors.end_time && "input-error"} name="end_time" ref={register({required: true})}/>
                  {errors.end_time && errors.end_time.type === "required" && 'End Time is Required'}
              </div>
          </div>

          <div>
            <Label>Teacher</Label>
              <div>
                <select className="dropDown"  name="teacher_id" ref={register({required: true})}>
                  {createDropdown(props.teacherDropdown)}
                </select>
              </div>
          </div>

          <div>
            <Label>Hourly Rate</Label>
              <div>
                <Input type="text" placeholder='14' className={errors.hourly_rate && "input-error"} name="hourly_rate" ref={register({required: true})}/>
                  {errors.hourly_rate && errors.hourly_rate.type === "required" && 'Hourly Rate is Required'}
              </div>
          </div>

          <div>
            <Label>Status</Label>
              <div>
                <select className="dropDown"  name="status" ref={register({required: true})}>
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
                <Input type="text" name="notes" ref={register}/>
              </div>
          </div>    

        </Div>
      </FormSet>
        <ButtonDiv>
          <CancelButton onClick={handleCancel}>
            Cancel
          </CancelButton>
          <AddButton onClick={handleSubmit} type='submit'>Add Course</AddButton>
        </ButtonDiv>
    </FormWrap>
  )
};

const mapStateToProps = state => {
  return {
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
  connect(mapStateToProps, { getDropDownCourses, addCourse, getDropDown })(
    CourseRegistrationForm
  )
);