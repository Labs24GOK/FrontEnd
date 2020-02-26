import axios from 'axios';
import API_URL from '../../config/apiUrl';

export const FETCH_STUDENTATTENDANCE_START =
  'FETCH_STUDENTATTENDANCE_START';
export const FETCH_STUDENTATTENDANCE_SUCCESS =
  'FETCH_STUDENTATTENDANCE_SUCCESS';
export const FETCH_STUDENTATTENDANCE_FAILURE =
  'FETCH_STUDENTATTENDANCE_FAILURE';

export const getStudentAttendanceTable = course_id => dispatch => {
  dispatch({ type: FETCH_STUDENTATTENDANCE_START });
  axios
    .get(`${API_URL}/attendance/courseenrollment/${course_id}`)
    .then(res => {
      dispatch({
        type: FETCH_STUDENTATTENDANCE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_STUDENTATTENDANCE_FAILURE,
        payload: err.data
      });
    });
};
