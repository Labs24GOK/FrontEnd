import axios from 'axios';

export const FETCH_STUDENTBYID_START = 'FETCH_STUDENTBYID_START';
export const FETCH_STUDENTBYID_SUCCESS = 'FETCH_STUDENTBYID_SUCCESS';
export const FETCH_STUDENTBYID_FAILURE = 'FETCH_STUDENTBYID_FAILURE';

export const getStudentById = id => dispatch => {
    dispatch({ type: FETCH_STUDENTBYID_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=student&where=id=${id}`)
    .then(res => {
        // console.log('getById', res.data)
        dispatch({
            type: FETCH_STUDENTBYID_SUCCESS,
            payload: res.data.tableData[0]
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_STUDENTBYID_FAILURE,
        payload: err.data
       }) 
    })
}


export const EDIT_STUDENTBYID_START = 'EDIT_STUDENTBYID_START';
export const EDIT_STUDENTBYID_SUCCESS = 'EDIT_STUDENTBYID_SUCCESS';
export const EDIT_STUDENTBYID_FAILURE = 'EDIT_STUDENTBYID_FAILURE';

export const toggleEditComponent = () => dispatch => {
    dispatch({ type: EDIT_STUDENTBYID_START })
}

export const editStudentById = (id, state) => dispatch => {
    let obj1 = {id:id, block_code:"431", delinquent:true} //will fix later 
    let state1 = {...state, ...obj1 }
    axios.put(`https://speak-out-be-staging.herokuapp.com/api/?table=student&where=id=${id}`, state1)
    .then(res => {
        // console.log("res for editStudentById", res.data)
        dispatch({
            type: EDIT_STUDENTBYID_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
       dispatch({
        type: EDIT_STUDENTBYID_FAILURE,
        payload: err.data
       }) 
    })
}

export const DELETE_STUDENTBYID_START = 'DELETE_STUDENTBYID_START';
export const DELETE_STUDENTBYID_SUCCESS = 'DELETE_STUDENTBYID_SUCCESS';
export const DELETE_STUDENTBYID_FAILURE = 'DELETE_STUDENTBYID_FAILURE';

export const deleteStudentById = id => dispatch => {
    dispatch({ type: DELETE_STUDENTBYID_START })
    axios.put(`https://speak-out-be-staging.herokuapp.com/api/?table=student&where=id=${id}`)
    .then(res => {
        dispatch({
            type: DELETE_STUDENTBYID_SUCCESS,
            payload: res.id
        })
    })
    .catch(err => {
       dispatch({
        type: DELETE_STUDENTBYID_FAILURE,
        payload: err.data
       }) 
    })
}