import axios from 'axios';

export const FETCH_STAFFCOURSES_START = 'FETCH_STAFFCOURSES_START';
export const FETCH_STAFFCOURSES_SUCCESS = 'FETCH_STAFFCOURSES_SUCCESS';
export const FETCH_STAFFCOURSES_FAILURE = 'FETCH_STAFFCOURSES_FAILURE';

export const getStaffCourses = () => dispatch => {

    let staff_id = 1
    console.log('STUDENT COURSE ID', staff_id)
    dispatch({ type: FETCH_STAFFCOURSES_START })
    axios.put(`https://speak-out-be-staging.herokuapp.com/api/?table=course_result_view&where=staff_id=${staff_id}`)
    .then(res => {
        console.log('Student Course Action', res) 
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