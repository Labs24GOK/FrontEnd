import axios from 'axios';

export const FETCH_STUDENTS_START = 'FETCH_STUDENTS_START';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const getStudentTable = () => dispatch => {
    dispatch({type: FETCH_STUDENTS_START})
    // axios.get('https://speak-out-be-staging.herokuapp.com/api?table=students')
    axios.get('http://localhost:3300/api?table=students')
        .then(res => {
            console.log('student table', res)
           dispatch({type: FETCH_STUDENTS_SUCCESS, payload:res.data.tableData})
        }).catch(err=> {
            console.log('err',err)
            dispatch({type: FETCH_STUDENTS_FAILURE, payload: err.payload})
        });
};