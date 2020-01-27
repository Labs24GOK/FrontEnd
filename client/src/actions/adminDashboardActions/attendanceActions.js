import axios from 'axios';

export const CREATE_ATTENDANCE_START = 'CREATE_ATTENDANCE_START';
export const CREATE_ATTENDANCE_SUCCESS = 'CREATE_ATTENDANCE_SUCCESS';
export const CREATE_ATTENDANCE_FAILURE = 'CREATE_ATTENDANCE_FAILURE';


export const postStudentAttendance = (attendance) => dispatch => {
    dispatch({ type: CREATE_ATTENDANCE_START })
    axios.post('https://speak-out-be-staging.herokuapp.com/api/attendance', attendance)
    .then(res => {
        console.log(res)
        if(res.status === 201){
            dispatch({
                type: CREATE_ATTENDANCE_SUCCESS,
                payload: 'Student Attendance Saved Successfully!'
            })
        }
    })
    .catch(err => {
       dispatch({
        type: CREATE_ATTENDANCE_FAILURE,
        payload: err.data
       }) 
    })
}
