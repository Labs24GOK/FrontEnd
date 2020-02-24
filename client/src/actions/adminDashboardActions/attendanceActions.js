import axios from 'axios';
import API_URL from '../../config/apiUrl';
import { notification } from 'antd'

export const CREATE_ATTENDANCE_START = 'CREATE_ATTENDANCE_START';
export const CREATE_ATTENDANCE_SUCCESS = 'CREATE_ATTENDANCE_SUCCESS';
export const CREATE_ATTENDANCE_FAILURE = 'CREATE_ATTENDANCE_FAILURE';

export const postStudentAttendance = state => dispatch => {

  const openSuccessNotification = (type) => {
    notification[type]({
       message: `Attendance Submission`,
       description: 'Student Attendance Saved Successfully!',
       duration: 6
    });
   }

   const openEditNotification = (type) => {
    notification[type]({
       message: `Attendance Submission`,
       description: 'Student Edited Saved Successfully!',
       duration: 6
    });
   }

   const openErrorNotification = (type) => {
    notification[type]({
       message: `Attendance Submission`,
       description: 'Student Attendance Submission Failed!',
       duration: 6
    });
   }

  dispatch({ type: CREATE_ATTENDANCE_START });
  axios
    .post(`${API_URL}/attendance`, state)
    .then(res => {
      //console.log(res);
      if (res.status === 201) {
        openSuccessNotification('success')
        dispatch({
          type: CREATE_ATTENDANCE_SUCCESS,
          payload: 'Student Attendance Saved Successfully!',
        });
      } else if (res.status === 200) {
        openEditNotification('success')
        dispatch({
          type: CREATE_ATTENDANCE_SUCCESS,
          payload: 'Student Attendance Edited Successfully!'
        })
      }
    })
    .catch(err => {
      openErrorNotification('error')
      dispatch({
        type: CREATE_ATTENDANCE_FAILURE,
        payload: err.data,
      });
    });
};
