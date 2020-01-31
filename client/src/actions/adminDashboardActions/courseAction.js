import axios from 'axios';

export const FETCH_COURSES_START = 'FETCH_COURSES_START';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const getCourseTable = () => dispatch => {
  dispatch({ type: FETCH_COURSES_START });
  axios
    .get(`http://localhost:4000/course`)
    .then(res => {
      console.log("RES FOR COURSE TABLE", res)
      dispatch({ type: FETCH_COURSES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_COURSES_FAILURE, payload: err.payload });
    });
};

export const FETCH_COURSEBYID_START = 'FETCH_COURSEBYID_START';
export const FETCH_COURSEBYID_SUCCESS = 'FETCH_COURSEBYID_SUCCESS';
export const FETCH_COURSEBYID_FAILURE = 'FETCH_COURSEBYID_FAILURE';

export const getCourseById = id => dispatch => {
  dispatch({ type: FETCH_COURSEBYID_START });
  axios
    .get(`http://localhost:4000/course/${id}`)
    .then(res => {
      console.log("RES FROM FETCH COURSEBYID", res)
      dispatch({
        type: FETCH_COURSEBYID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_COURSEBYID_FAILURE,
        payload: err.data
      });
    });
};

export const EDIT_COURSEBYID_START = 'EDIT_COURSEBYID_START';
export const EDIT_COURSEBYID_SUCCESS = 'EDIT_COURSEBYID_SUCCESS';
export const EDIT_COURSEBYID_FAILURE = 'EDIT_COURSEBYID_FAILURE';

export const toggleEditCourse = () => dispatch => {
  dispatch({ type: EDIT_COURSEBYID_START });
};

export const editCouseById = (id, state) => dispatch => {
  axios
    .put(`http://localhost:4000/course/${id}`, state)
    .then(res => {
      dispatch({
        type: EDIT_COURSEBYID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: EDIT_COURSEBYID_FAILURE,
        payload: err.data
      });
    });
};

export const ADD_COURSE_START = 'ADD_COURSE_START';
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS';
export const ADD_COURSE_FAILURE = 'ADD_COURSE_FAILURE';

// export const toggleAddCourseComponent = () => dispatch => {
//     // console.log('hey')
//     dispatch({ type: ADD_COURSE_START })
// }

export const addCourse = course => dispatch => {
  // console.log(course)
  let {
    course_schedule_id,
    course_type_id,
    group_type_id,
    level_id,
    room_id,
    school_grade_id,
    teacher_id,
    term_id
  } = course;
  const newCourse = {
    ...course,
    course_schedule_id: course_schedule_id.value,
    course_type_id: course_type_id.value,
    group_type_id: group_type_id.value,
    level_id: level_id.value,
    room_id: room_id.value,
    school_grade_id: school_grade_id.value,
    teacher_id: teacher_id.value,
    term_id: term_id.value
  };

  console.log(newCourse);
  dispatch({ type: ADD_COURSE_START });
  axios
    .post('http://localhost:4000/api?table=course', newCourse)
    .then(res => {
      // if(res.status===201){
      // axios.get('http://localhost:4000/api?table=course').then(res => {
      //     dispatch({type: ADD_COURSE_SUCCESS, payload: res.data.tableData[0]})
      console.log('res from AddCourse', res);
      dispatch({
        type: ADD_COURSE_SUCCESS,
        payload: res.data[0]
      });
    })
    // })
    .catch(err => {
      console.log('err', err);
      dispatch({ type: ADD_COURSE_FAILURE, payload: err });
    });
};

export const FETCH_DROPDOWNCOURSES_START = 'FETCH_DROPDOWNCOURSES_START';
export const FETCH_DROPDOWN_TABLETERM = 'FETCH_DROPDOWN_TABLETERM';
export const FETCH_DROPDOWN_TABLECOURSETYPE = 'FETCH_DROPDOWN_TABLECOURSETYPE';
export const FETCH_DROPDOWN_TABLEGROUPTYPE = 'FETCH_DROPDOWN_TABLEGROUPTYPE';
export const FETCH_DROPDOWN_TABLESCHOOLGRADE =
  'FETCH_DROPDOWN_TABLESCHOOLGRADE';
export const FETCH_DROPDOWN_TABLELEVEL = 'FETCH_DROPDOWN_TABLELEVEL';
export const FETCH_DROPDOWN_TABLECOURSESCHEDULE =
  'FETCH_DROPDOWN_TABLECOURSESCHEDULE';
export const FETCH_DROPDOWN_TABLEROOM = 'FETCH_DROPDOWN_TABLEROOM';
export const FETCH_DROPDOWN_TABLETEACHER = 'FETCH_DROPDOWN_TABLETEACHER';
export const FETCH_DROPDOWNCOURSES_FAILURE = 'FETCH_DROPDOWNCOURSES_FAILURE';

export const getDropDownCourses = () => dispatch => {
  const term = axios.get(`http://localhost:4000/api/?table=term`);
  const courseType = axios.get(`http://localhost:4000/api/?table=course_type`);
  const groupType = axios.get(`http://localhost:4000/api/?table=group_type`);
  const schoolGrade = axios.get(
    `http://localhost:4000/api/?table=school_grade`
  );
  const level = axios.get(`http://localhost:4000/api/?table=level`);
  const courseSchedule = axios.get(
    `http://localhost:4000/api/?table=course_schedule`
  );
  const room = axios.get(`http://localhost:4000/api/?table=room`);
  const teacher = axios.get(`http://localhost:4000/api/?table=staff`);

  dispatch({ type: FETCH_DROPDOWNCOURSES_START });
  axios
    .all([
      term,
      courseType,
      groupType,
      schoolGrade,
      level,
      courseSchedule,
      room,
      teacher
    ])
    .then(
      axios.spread((...res) => {
        res.forEach((each, i) => {
          if (i === 0) {
            dispatch({
              type: FETCH_DROPDOWN_TABLETERM,
              payload: each.data.tableData
            });
          }
          if (i === 1) {
            dispatch({
              type: FETCH_DROPDOWN_TABLECOURSETYPE,
              payload: each.data.tableData
            });
          }
          if (i === 2) {
            dispatch({
              type: FETCH_DROPDOWN_TABLEGROUPTYPE,
              payload: each.data.tableData
            });
          }
          if (i === 3) {
            dispatch({
              type: FETCH_DROPDOWN_TABLESCHOOLGRADE,
              payload: each.data.tableData
            });
          }
          if (i === 4) {
            dispatch({
              type: FETCH_DROPDOWN_TABLELEVEL,
              payload: each.data.tableData
            });
          }
          if (i === 5) {
            dispatch({
              type: FETCH_DROPDOWN_TABLECOURSESCHEDULE,
              payload: each.data.tableData
            });
          }
          if (i === 6) {
            dispatch({
              type: FETCH_DROPDOWN_TABLEROOM,
              payload: each.data.tableData
            });
          }
          if (i === 7) {
            dispatch({
              type: FETCH_DROPDOWN_TABLETEACHER,
              payload: each.data.tableData
            });
          }
        });
      })
    )
    .catch(err => {
      console.log('err', err);
      dispatch({ type: FETCH_DROPDOWNCOURSES_FAILURE, payload: err.payload });
    });
};

export const DISPLAY_STUDENTSBYCOURSEID_START =
  'DISPLAY_STUDENTSBYCOURSEID_START';
export const DISPLAY_STUDENTSBYCOURSEID_SUCCESS =
  'DISPLAY_STUDENTSBYCOURSEID_SUCCESS';
export const DISPLAY_STUDENTSBYCOURSEID_FAILURE =
  'DISPLAY_STUDENTSBYCOURSEID_FAILURE';

export const getStudentTableByCourseID = course_id => dispatch => {
  console.log('course_id in courseAction.js', course_id);
  dispatch({ type: DISPLAY_STUDENTSBYCOURSEID_START });
  axios
    .get(
      `http://localhost:4000/api/?table=course_enrollment&where=course_id=${course_id}`
    )
    .then(res => {
      console.log('res in courseAction.js', res);
      dispatch({
        type: DISPLAY_STUDENTSBYCOURSEID_SUCCESS,
        payload: res.data.tableData
      });
    })
    .catch(err => {
      dispatch({
        type: DISPLAY_STUDENTSBYCOURSEID_FAILURE,
        payload: err.payload
      });
    });
};

export const SET_FILTER_COURSES = 'SET_FILTER_COURSES';
export const filterCourseTable = searchTerm => dispatch => {
  dispatch({ type: SET_FILTER_COURSES, payload: searchTerm });
  dispatch({ type: FETCH_COURSES_START });
  axios
    .get(`http://localhost:4000/api?table=course`)
    .then(res => {
      searchTerm = searchTerm.toLowerCase();
      let courseList = res.data.tableData;
      courseList = courseList.filter(course => {
        if (course.id && course.id.toString().match(searchTerm)) {
          return true;
        }
        if (course.term && course.term.toLowerCase().match(searchTerm)) {
          return true;
        }
        if (
          course.course_type &&
          course.course_type.toLowerCase().match(searchTerm)
        ) {
          return true;
        }
        if (
          course.group_type &&
          course.group_type.toLowerCase().match(searchTerm)
        ) {
          return true;
        }
        if (
          course.school_grade &&
          course.school_grade.toLowerCase().match(searchTerm)
        ) {
          return true;
        }
        if (course.level && course.level.toLowerCase().match(searchTerm)) {
          return true;
        }
        if (
          course.course_schedule &&
          course.course_schedule.toLowerCase().match(searchTerm)
        ) {
          return true;
        }
        if (course.teacher && course.teacher.toLowerCase().match(searchTerm)) {
          return true;
        }
        return false;
      });
      dispatch({ type: FETCH_COURSES_SUCCESS, payload: courseList });
    })
    .catch(err => {
      console.log('err', err);
      dispatch({ type: FETCH_COURSES_FAILURE, payload: err.payload });
    });
};
