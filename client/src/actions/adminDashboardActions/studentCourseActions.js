import axios from 'axios';

export const FETCH_STUDENTCOURSES_START = 'FETCH_STUDENTCOURSES_START';
export const FETCH_STUDENTCOURSES_SUCCESS = 'FETCH_STUDENTCOURSES_SUCCESS';
export const FETCH_STUDENTCOURSES_FAILURE = 'FETCH_STUDENTCOURSES_FAILURE';

export const getStudentCourses = student_id => dispatch => {
    console.log('STUDENT COURSE ID', student_id)
    dispatch({ type: FETCH_STUDENTCOURSES_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=course_result_view&where=student_id=${student_id}`)
    .then(res => {
        console.log('Student Course Action', res.data.tableData[0]) 
        dispatch({
            type: FETCH_STUDENTCOURSES_SUCCESS,
            payload: res.data.tableData[0]
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_STUDENTCOURSES_FAILURE,
        payload: err.data
       }) 
    })
}