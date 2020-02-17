import axios from 'axios';
import API_URL from '../../config/apiUrl';

export const FETCH_STUDENTBYID_START =
  'FETCH_STUDENTBYID_START';
export const FETCH_STUDENTBYID_SUCCESS =
  'FETCH_STUDENTBYID_SUCCESS';
export const FETCH_STUDENTBYID_FAILURE =
  'FETCH_STUDENTBYID_FAILURE';
export const getStudentById = student_id => dispatch => {
  dispatch({ type: FETCH_STUDENTBYID_START });
  axios
    .get(`${API_URL}/student/${student_id}`)
    .then(res => {
      dispatch({
        type: FETCH_STUDENTBYID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_STUDENTBYID_FAILURE,
        payload: err.data
      });
    });
};
export const EDIT_STUDENTBYID_START = 'EDIT_STUDENTBYID_START';
export const EDIT_STUDENTBYID_CANCELLED = 'EDIT_STUDENTBYID_CANCELLED';
export const EDIT_STUDENTBYID_SUCCESS = 'EDIT_STUDENTBYID_SUCCESS';
export const EDIT_STUDENTBYID_FAILURE = 'EDIT_STUDENTBYID_FAILURE';
export const toggleEditComponent = (
  isEditing,
  isEdited
) => dispatch => {
  if (isEditing === 'true') {
    return dispatch({ type: EDIT_STUDENTBYID_START });
  }
  if (isEditing === 'false' && isEdited === 'false') {
    return dispatch({ type: EDIT_STUDENTBYID_CANCELLED });
  }
};
export const editStudentById = (
  student_id,
  state
) => dispatch => {
  axios
    .put(`${API_URL}/student/${student_id}`, state)
    .then(res => {
      dispatch({
        type: EDIT_STUDENTBYID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: EDIT_STUDENTBYID_FAILURE,
        payload: 'Error saving changed student information'
      });
    });
};
export const DELETE_STUDENTBYID_START =
  'DELETE_STUDENTBYID_START';
export const DELETE_STUDENTBYID_SUCCESS =
  'DELETE_STUDENTBYID_SUCCESS';
export const DELETE_STUDENTBYID_FAILURE =
  'DELETE_STUDENTBYID_FAILURE';
export const deleteStudentById = id => dispatch => {
  dispatch({ type: DELETE_STUDENTBYID_START });
  axios
    .put(`${API_URL}/student/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_STUDENTBYID_SUCCESS,
        payload: res.student_id
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_STUDENTBYID_FAILURE,
        payload: err.data
      });
    });
};
export const EDIT_DROPDOWN_START = 'EDIT_DROPDOWN_START';
export const EDIT_DROPDOWN_SUCCESS =
  'EDIT_DROPDOWN_SUCCESS';
export const EDIT_DROPDOWN_FAILURE =
  'EDIT_DROPDOWN_FAILURE';

export const editStudentDropDown = () => dispatch => {
  dispatch({ type: EDIT_DROPDOWN_START });
  axios
    .get(`${API_URL}/student/dropdowns`)
    .then(res => {
      console.log('RES FOR EDIT STUDENT DROPDOWN', res);
      dispatch({
        type: EDIT_DROPDOWN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('err', err);
      dispatch({
        type: EDIT_DROPDOWN_FAILURE,
        payload: err.payload
      });
    });
};
