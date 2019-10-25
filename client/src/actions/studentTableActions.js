import axios from 'axios';

export const FETCH_STUDENT_DATA_START = 'FETCH_STUDENT_DATA_START';
export const FETCH_STUDENT_DATA_SUCCESS = 'FETCH_STUDENT_DATA_SUCCESS';
export const FETCH_STUDENT_DATA_FAILURE = 'FETCH_STUDENT_DATA_FAILURE';

export const getStudentTable = () => dispatch => {
    dispatch({type: FETCH_STUDENT_DATA_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=student')
        .then(res => {
           dispatch({type: FETCH_STUDENT_DATA_SUCCESS, payload:res.data.tableData})
        }).catch(err=> {
            console.log('err',err)
            const error = 'Error retrieving student table'
            dispatch({type: FETCH_STUDENT_DATA_FAILURE, payload: error})
        });
};