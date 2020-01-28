import axios from 'axios';

export const FETCH_STUDENTCOURSES_START = 'FETCH_STUDENTCOURSES_START';
export const FETCH_STUDENTCOURSES_SUCCESS = 'FETCH_STUDENTCOURSES_SUCCESS';
export const FETCH_STUDENTCOURSES_FAILURE = 'FETCH_STUDENTCOURSES_FAILURE';

export const getStudentCourses = student_id => dispatch => {
  //most students are missing the course info so this is the test student that is working 
   
    dispatch({ type: FETCH_STUDENTCOURSES_START })
    axios.get(`http://localhost:4000/api/?table=course_result_view&where=student_id=${student_id}`)
    .then(res => {
        dispatch({
            type: FETCH_STUDENTCOURSES_SUCCESS,
            payload: res.data.tableData
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_STUDENTCOURSES_FAILURE,
        payload: err.data
       }) 
    })
}

