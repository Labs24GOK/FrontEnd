import 'react-dropdown/style.css';

import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { createDropdown } from '../../../../../utils/helpers.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editCourseById, getDropDownCourses, toggleEditCourse } from '../../../../../actions';
import {
  ButtonDiv,
  CancelButton,
  Div,
  FormSet,
  FormWrap,
  Input,
  Label,
  SaveButton,
} from '../../mainStyle/styledComponent';

const CourseEditForm = props => {
  console.log("props", props)
  console.log("status", props.courseById.status)
  console.log("term", props.courseById.term)
  const { register, errors, handleSubmit, watch } = useForm();
  const dropDowns = ['term_id', 'course_type_id', 'group_type_id', 'school_grade_id', 'level_id', 'course_schedule_id',  'room_id', 'teacher_id']
  const submitNow = data => {
    for (const property of dropDowns) {
        data[property] = parseInt(data[property])    
    }
    props.editCourseById(data);
    // props.setForm(false);
  }

  const currentlySelectedCourse = watch("course_type_id");

  // const { courseID } = props;

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

  //Arrays for dropdown menus
  const status = ['Active', 'Completed', 'Waitlist', 'Cancelled'];
  const section = ['A', 'B', 'C'];

  // const [state, setState] = useState({
  //   term_id: props.courseById.term_id,
  //   course_type_id: props.courseById.course_type_id,
  //   course_schedule_id: props.courseById.course_schedule_id,
  //   group_type_id: props.courseById.group_type_id,
  //   level_id: props.courseById.level_id,
  //   school_grade_id: props.courseById.school_grade_id,
  //   section: props.courseById.section,
  //   start_date: startdate,
  //   end_date: enddate,
  //   start_time: props.courseById.start_time,
  //   end_time: props.courseById.end_time,
  //   room_id: props.courseById.room_id,
  //   teacher_id: props.courseById.teacher_id,
  //   hourly_rate: props.courseById.hourly_rate,
  //   notes: props.courseById.notes,
  //   status: props.courseById.status,
  // });

 

  // const handleChange = e => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  //state for validation
  // const [errorBorderStartDate, setErrorBorderStartDate] = useState(
  //   'transparent'
  // );
  // const [errorBorderEndDate, setErrorBorderEndDate] = useState('transparent');
  // const [errorBorderStartTime, setErrorBorderStartTime] = useState(
  //   'transparent'
  // );
  // const [errorBorderEndTime, setErrorBorderEndTime] = useState('transparent');
  // const [errorBorderHourlyRate, setErrorBorderHourlyRate] = useState(
  //   'transparent'
  // ); //error #C73642

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   //check for required fields & set border colors depending on state
  //   if (
  //     state.start_date === '' ||
  //     state.end_date === '' ||
  //     state.start_time === '' ||
  //     state.end_time === '' ||
  //     state.hourly_rate === ''
  //   ) {
  //     if (state.start_date === '') {
  //       setErrorBorderStartDate('#ef6570');
  //     } else {
  //       setErrorBorderStartDate('transparent');
  //     }
  //     if (state.end_date === '') {
  //       setErrorBorderEndDate('#ef6570');
  //     } else {
  //       setErrorBorderEndDate('transparent');
  //     }
  //     if (state.start_time === '') {
  //       setErrorBorderStartTime('#ef6570');
  //     } else {
  //       setErrorBorderStartTime('transparent');
  //     }
  //     if (state.end_time === '') {
  //       setErrorBorderEndTime('#ef6570');
  //     } else {
  //       setErrorBorderEndTime('transparent');
  //     }
  //     if (state.hourly_rate === '') {
  //       setErrorBorderHourlyRate('#ef6570');
  //     } else {
  //       setErrorBorderHourlyRate('transparent');
  //     }
  //   } else {
  //     props.editCourseById(courseID, state);
  //   }
  // };


  // return (
  // (
  //   <FormWrap onSubmit={handleSubmit(submitNow)}>
  //     <FormSet>
  //       <Div>
  //         <div>
  //           <Label>Term</Label>
  //           <Dropdown
  //             value={props.courseById.term}
  //             onChange={e => setState({ ...state, term_id: e.value })}
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={props.termDropdown}
  //           />
  //         </div>
  //         <div>
  //           <Label>Course Type</Label>
  //           <Dropdown
  //             value={props.courseById.course_type}
  //             onChange={e => setState({ ...state, course_type_id: e.value })}
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={props.courseTypeDropdown}
  //           />
  //         </div>
  //         <div>
  //           <Label>Group Type</Label>
  //           <Dropdown
  //             value={props.courseById.group_type}
  //             onChange={e => setState({ ...state, group_type_id: e.value })}
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={props.groupTypeDropdown}
  //           />
  //         </div>
  //         <div>
  //           <Label>School Grade</Label>
  //           <Dropdown
  //             value={props.courseById.school_grade}
  //             onChange={e => setState({ ...state, school_grade_id: e.value })}
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={props.schoolGradeDropdown}
  //             disabled={state.course_type_id !== 2}
  //           />
  //         </div>
  //         <div>
  //           <Label>Level</Label>
  //           <Dropdown
  //             value={props.courseById.level}
  //             onChange={e => setState({ ...state, level_id: e.value })}
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={props.levelDropdown}
  //           />
  //         </div>
  //         <div>
  //           <Label>Section</Label>
  //           <Dropdown
  //             value={state.section}
  //             onChange={e => setState({ ...state, section: e.value })}
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={section}
  //           />
  //         </div>
  //         <div>
  //           <Label>Course Schedule</Label>
  //           <Dropdown
  //             value={props.courseById.course_schedule}
  //             onChange={e =>
  //               setState({ ...state, course_schedule_id: e.value })
  //             }
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={props.courseScheduleDropdown}
  //           />
  //         </div>
  //         <div>
  //           <Label>Start Date</Label>
  //           <div>
  //             <Input
  //               type='date'
  //               name='start_date'
  //               value={state.start_date}
  //               onChange={handleChange}
  //             />
  //           </div>
  //         </div>
  //         <div>
  //           <Label>End Date</Label>
  //           <div>
  //             <Input
  //               type='date'
  //               name='end_date'
  //               value={state.end_date}
  //               onChange={handleChange}
  //             />
  //           </div>
  //         </div>
  //         <div>
  //           <Label>Start Time</Label>
  //           <div>
  //             <Input
  //               type='time'
  //               name='start_time'
  //               value={state.start_time}
  //               onChange={handleChange}
  //             />
  //           </div>
  //         </div>
  //         <div>
  //           <Label>End Time</Label>
  //           <div>
  //             <Input
  //               type='time'
  //               name='end_time'
  //               value={state.end_time}
  //               onChange={handleChange}
  //             />
  //           </div>
  //         </div>
  //         <div>
  //           <Label>Room</Label>
  //           <Dropdown
  //             value={`${props.courseById.room}`}
  //             onChange={e => setState({ ...state, room_id: e.value })}
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={props.roomDropdown}
  //           />
  //         </div>
  //         <div>
  //           <Label>Teacher</Label>
  //           <Dropdown
  //             value={props.courseById.teacher}
  //             onChange={e => setState({ ...state, teacher_id: e.value })}
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={props.teacherDropdown}
  //           />
  //         </div>
  //         <div>
  //           <Label>Hourly Rate</Label>
  //           <div>
  //             <Input
  //               type='text'
  //               name='hourly_rate'
  //               value={state.hourly_rate}
  //               onChange={handleChange}
  //             />
  //           </div>
  //         </div>
  //         <div>
  //           <Label>Status</Label>
  //           <Dropdown
  //             value={state.status}
  //             onChange={e => setState({ ...state, status: e.value })}
  //             controlClassName='myControlClassName'
  //             className='dropdown'
  //             options={status}
  //           />
  //         </div>
  //         <div style={{ gridColumn: 'span 4' }}>
  //           <Label>Notes</Label>
  //           <Input
  //             type='text'
  //             name='notes'
  //             value={state.notes}
  //             onChange={handleChange}
  //           />
  //         </div>
  //       </Div>
  //     </FormSet>
      // <ButtonDiv>
      //   <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      //   <SaveButton type='submit' onClick={handleSubmit}>
      //     Save
      //   </SaveButton>
      // </ButtonDiv>
  //   </FormWrap>
  // );
return (
  <FormWrap onSubmit={handleSubmit(submitNow)}>
    <FormSet>
      <Div>
      <div>
            <Label>Status</Label>
              <div>
                <select
                 value={props.courseById.status}
                className="dropDown"  
                name="status" 
                ref={register({required: true})}>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Waitlist">Waitlist</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
          </div>

        <div>
          <Label>Term</Label>
          <select 
          value={props.courseById.term} 
          
          className="dropDown" 
          name="term_id" 
          ref={register({required: true})} >
          {createDropdown(props.termDropdown)}
          </select>
        </div>

        <div>
          <Label>Course Type</Label>
          <select 
           value={props.course_type_id}
           className="dropDown" 
           name="course_type_id" 
           ref={register({required: true})}>
           {createDropdown(props.courseTypeDropdown)}
          </select>   
        </div>
        <div>
              <Label>Group Type</Label>
						<div>
              <select 
              value={props.group_type}
              name="group_type_id" 
              className="dropDown" 
              ref={register({required: true})}>
                {createDropdown(props.groupTypeDropdown)}
              </select>
					  </div>
        </div>  


        <div>
              <Label>Level</Label>
              <div>
                <select 
                value= {props.level_id}
                className="dropDown" 
                name="level_id" 
                ref={register({required: true})}>
                  {createDropdown(props.levelDropdown)}
                </select>  
						  </div>
        </div> 

        <div>
            <Label>Section</Label>
              <div>
                <select className="dropDown"  
                name="section" ref={register({required: true})}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>  
              </div>
        </div>   

        <div>
          <Label>School Grade</Label>
          <select 
            value={props.school_grade} 
            className="dropDown grey" 
            name="school_grade" 
            disabled={currentlySelectedCourse !== "2"} 
            ref={register({required: true})}>
              {createDropdown(props.schoolGradeDropdown)}
          </select>  
        </div>
         


        <div>
            <Label>Course Schedule</Label>
              <div>
                <select className="dropDown" 
                value={props.course_schedule} 
                name="course_schedule" 
                ref={register({required: true})}>
                  {createDropdown(props.courseScheduleDropdown)}
                </select>
              </div>
          </div> 

          <div>
            <Label>Start Date</Label>
              <div>
                <Input type="date" value={props.start_date} className={errors.start_date && "input-error"} name="start_date" ref={register({required: true})}/>
                  {errors.start_date && errors.start_date.type === "required" && 'Start Date is Required'}
              </div>
          </div>

          <div>
            <Label>End Date</Label>
              <div>
                <Input 
                type="date" 
                value={props.end_date} 
                className={errors.end_date && "input-error"} 
                name="end_date" ref={register({required: true})}/>
                  {errors.end_date && errors.end_date.type === "required" && 'End Date is Required'}
              </div>
          </div>
          <div>
            <Label>Start Time</Label>
              <div>
                <Input 
                type="time" 
                value={props.start_time}
                className={errors.start_time && "input-error"} 
                name="start_time" ref={register({required: true})}/>
                  {errors.start_time && errors.start_time.type === "required" && 'Start Time is Required'}	
              </div>
          </div>

          <div>
            <Label>End Time</Label>
              <div>
                <Input 
                 value={props.start_time}
                type="time" 
                className={errors.end_time && "input-error"} 
                name="end_time" ref={register({required: true})}/>
                  {errors.end_time && errors.end_time.type === "required" && 'End Time is Required'}
              </div>
          </div>

          <div>
            <Label>Room</Label>
              <div>
                <select 
                value={`${props.courseById.room}`}
                className="dropDown"  
                name="room_id"
                ref={register({required: true})}>
                  {createDropdown(props.roomDropdown)}
                </select>
              </div>
          </div>


          <div>
            <Label>Teacher</Label>
              <div>
                <select 
                value={props.courseById.teacher}
                className="dropDown"  
                name="teacher_id" 
                ref={register({required: true})}>
                  {createDropdown(props.teacherDropdown)}
                </select>
              </div>
          </div>


          <div>
            <Label>Hourly Rate</Label>
              <div>
                <Input 
                value = {props.hourly_rate}
                type="text" 
                className={errors.hourly_rate && "input-error"} 
                name="hourly_rate" 
                ref={register({required: true})}/>
                  {errors.hourly_rate && errors.hourly_rate.type === "required" && 'Hourly Rate is Required'}
              </div>
          </div>

          <div>
            <Label>Notes</Label>
              <div>
                <Input 
                value = {props.notes}
                type="text" 
                name="notes" ref={register}/>
              </div>
          </div>   



        <ButtonDiv>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        <SaveButton type='submit' onClick={handleSubmit}>
          Save
        </SaveButton>
      </ButtonDiv>
      
      </Div>
    </FormSet>
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
