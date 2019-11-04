import axios from 'axios';

export const FETCH_PARENTS_START = 'FETCH_PARENTS_START';
export const FETCH_PARENTS_SUCCESS = 'FETCH_PARENTS_SUCCESS';
export const FETCH_PARENTS_FAILURE = 'FETCH_PARENTS_FAILURE';

export const getParentTable = () => dispatch => {
    dispatch({type: FETCH_PARENTS_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=students')
        .then(res => {
            console.log('student table', res)
           dispatch({type: FETCH_PARENTS_SUCCESS, payload:res.data.tableData})
        }).catch(err=> {
            console.log('err',err)
            dispatch({type: FETCH_PARENTS_FAILURE, payload: err.payload})
        });
};