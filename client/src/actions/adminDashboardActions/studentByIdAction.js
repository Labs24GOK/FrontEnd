import axios from 'axios';
export const FETCH_STUDENTBYID_START = 'FETCH_STUDENTBYID_START';
export const FETCH_STUDENTBYID_SUCCESS = 'FETCH_STUDENTBYID_SUCCESS';
export const FETCH_STUDENTBYID_FAILURE = 'FETCH_STUDENTBYID_FAILURE';
export const getStudentById = id => dispatch => {
  dispatch({ type: FETCH_STUDENTBYID_START });
  axios
    .get(`http://localhost:4000/api/?table=student&where=id=${id}`)
    .then(res => {
      dispatch({
        type: FETCH_STUDENTBYID_SUCCESS,
        payload: res.data.tableData[0]
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
export const toggleEditComponent = (isEditing, isEdited) => dispatch => {
  if (isEditing === 'true') {
    return dispatch({ type: EDIT_STUDENTBYID_START });
  }
  if (isEditing === 'false' && isEdited === 'false') {
    return dispatch({ type: EDIT_STUDENTBYID_CANCELLED });
  }
  // if(isEditing==='false' && isEdited === 'true' ) {
  //     return dispatch({type: EDIT_STUDENTBYID_SUCCESS})
  // }
  // if(isEditing === 'true' && isEdited ==='false') {
  //     return dispatch({type: EDIT_STUDENTBYID_FAILURE})
  // }
};
export const editStudentById = (student_id, state) => dispatch => {
  // let obj1 = {id:id, block_code:"431", delinquent:true} //will fix later
  // let state1 = {...state, ...obj1 }
  axios
    .put(
      `http://localhost:4000/api/?table=student&where=id=${student_id}`,
      state
    )
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
export const DELETE_STUDENTBYID_START = 'DELETE_STUDENTBYID_START';
export const DELETE_STUDENTBYID_SUCCESS = 'DELETE_STUDENTBYID_SUCCESS';
export const DELETE_STUDENTBYID_FAILURE = 'DELETE_STUDENTBYID_FAILURE';
export const deleteStudentById = id => dispatch => {
  dispatch({ type: DELETE_STUDENTBYID_START });
  axios
    .put(`http://localhost:4000/api/?table=student&where=id=${id}`)
    .then(res => {
      dispatch({
        type: DELETE_STUDENTBYID_SUCCESS,
        payload: res.id
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
export const EDIT_DROPDOWN_SUCCESSTABLE1 = 'EDIT_DROPDOWN_SUCCESSTABLE1';
export const EDIT_DROPDOWN_SUCCESSTABLE2 = 'EDIT_DROPDOWN_SUCCESSTABLE2';
export const EDIT_DROPDOWN_SUCCESSTABLE3 = 'EDIT_DROPDOWN_SUCCESSTABLE3';
export const EDIT_DROPDOWN_SUCCESSTABLE4 = 'EDIT_DROPDOWN_SUCCESSTABLE4';
export const EDIT_DROPDOWN_FAILURE = 'EDIT_DROPDOWN_FAILURE';
export const editStudentDropDown = () => dispatch => {
  const locationTable = axios.get(`http://localhost:4000/api/?table=location`);
  const contactTable = axios.get(
    `http://localhost:4000/api/?table=preferred_contact_type`
  );
  const gradeTable = axios.get(`http://localhost:4000/api/?table=school_grade`);
  const blockTable = axios.get(`http://localhost:4000/api/?table=block`);

  dispatch({ type: EDIT_DROPDOWN_START });
  axios
    .all([locationTable, contactTable, gradeTable, blockTable])
    .then(
      axios.spread((...res) => {
        let tablesThree = res.map((each, i) => {
          if (i === 0) {
            dispatch({
              type: EDIT_DROPDOWN_SUCCESSTABLE1,
              payload: each.data.tableData
            });
          }
          if (i === 1) {
            dispatch({
              type: EDIT_DROPDOWN_SUCCESSTABLE2,
              payload: each.data.tableData
            });
          }
          if (i === 2) {
            dispatch({
              type: EDIT_DROPDOWN_SUCCESSTABLE3,
              payload: each.data.tableData
            });
          }
          if (i === 3) {
            dispatch({
              type: EDIT_DROPDOWN_SUCCESSTABLE4,
              payload: each.data.tableData
            });
          }
        });
      })
    )
    .catch(err => {
      console.log('err', err);
      dispatch({ type: EDIT_DROPDOWN_FAILURE, payload: err.payload });
    });
};
