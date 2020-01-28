import axios from 'axios';

export const FETCH_STAFFCOURSES_START = 'FETCH_STAFFCOURSES_START';
export const FETCH_STAFFCOURSES_SUCCESS = 'FETCH_STAFFCOURSES_SUCCESS';
export const FETCH_STAFFCOURSES_FAILURE = 'FETCH_STAFFCOURSES_FAILURE';

export const FETCH_STUDENTSBYCOURSEID_START = 'FETCH_STUDENTSBYCOURSEID_START';
export const FETCH_STUDENTSBYCOURSEID_SUCCESS = 'FETCH_STUDENTSBYCOURSEID_SUCCESS';
export const FETCH_STUDENTSBYCOURSEID_FAILURE = 'FETCH_STUDENTSBYCOURSEID_FAILURE';

export const getStaffCourses = teacher_id => dispatch => {
    dispatch({ type: FETCH_STAFFCOURSES_START })
    axios.get(`http://localhost:4000/api/?table=course_view&where=teacher_id=${teacher_id}`)
    .then(res => {
        dispatch({
            type: FETCH_STAFFCOURSES_SUCCESS,
            payload: res.data.tableData
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_STAFFCOURSES_FAILURE,
        payload: err.data
       }) 
    })
}

export const getStudentsByCourseID = course_id => dispatch => {
    dispatch({ type: FETCH_STUDENTSBYCOURSEID_START })
    axios.get(`http://localhost:4000/api/?table=course_enrollment_view&where=course_id=${course_id}`)
    .then(res => {
        dispatch({
            type: FETCH_STUDENTSBYCOURSEID_SUCCESS,
            payload: res.data.tableData
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_STUDENTSBYCOURSEID_FAILURE,
        payload: err.data
       }) 
    })
}



